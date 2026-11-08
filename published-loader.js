/* published-loader.js — 把後台「已發布」資料合併進公開站既有資料（不重寫原 renderer）。
 * 交易式：先在副本上完整驗證並建好新資料，全部成功才一次替換；任何錯誤都完整保留原資料。
 * 對應規則：世界觀 id、角色 c-序號、平台 p-序號（序號 = 公開站原陣列位置，原 name 作為穩定別名）。
 * 平台改名：保留原 name 當識別鍵（圖示、分組、角色連結），新名放 title 顯示；保留 invite／sponsor 等原欄位。 */
(function (root) {
  "use strict";
  var ADMIN = "https://jcna-creator-admin.jcna-amamiya.workers.dev";
  var SECTIONS = ["about", "platforms", "worlds", "characters"];
  var IMG = ["cover", "avatar", "image", "icon"];
  var VIS = ["public", "coming-soon", "hidden"];
  var CONTACT_KEYS = ["instagram", "x", "threads", "plurk", "discord1", "discord2", "marshmallow"];
  var LAST = null;
  function str(v, max, where) { if (typeof v !== "string" || v.length > max) fail(where); return v; }
  function about(site) {
    var a = site.about; if (a == null) return null; if (!isObj(a)) fail("about"); var out = {};
    Object.keys(a).forEach(function (k) { if (["intro", "contactNote", "contacts"].indexOf(k) < 0) fail("about." + k); });
    if (a.intro != null) out.intro = str(a.intro, 600, "about.intro");
    if (a.contactNote != null) out.contactNote = str(a.contactNote, 200, "about.contactNote");
    if (a.contacts != null) { if (!isObj(a.contacts)) fail("contacts"); out.contacts = {};
      Object.keys(a.contacts).forEach(function (k) { var v = a.contacts[k]; if (CONTACT_KEYS.indexOf(k) < 0 || typeof v !== "string" || v.length > 400 || !/^https:\/\/[^\s"'<>]+$/.test(v)) fail("contacts." + k); out.contacts[k] = v; }); }
    return out;
  }
  function newest(site) { var n = site.newest; if (n == null) return null;
    if (!Array.isArray(n) || n.length > 10 || !n.every(function (x, i) { return typeof x === "string" && x && x.length <= 40 && n.indexOf(x) === i; })) fail("newest"); return n.slice(); }
  function textLines(el, t) { while (el.firstChild) el.removeChild(el.firstChild); t.split("\n").forEach(function (line, i) { if (i) el.appendChild(document.createElement("br")); el.appendChild(document.createTextNode(line)); }); }
  function applyAbout(A) { // 先找齊所有目標節點，缺任何一個就整段不動
    var intro = document.querySelector(".panel.intro"); if (!intro) return false;
    var ps = Array.prototype.filter.call(intro.children, function (e) { return e.tagName === "P" && !e.querySelector(".nick"); });
    var note = document.querySelector(".panel.intro .contacts > p:not(.clabel)");
    var links = document.querySelectorAll(".panel.intro .contacts .srow a");
    if ((A.intro != null && !ps[0]) || (A.contactNote != null && !note) || (A.contacts && links.length !== CONTACT_KEYS.length)) return false;
    if (A.intro != null) textLines(ps[0], A.intro);
    if (A.contactNote != null) note.textContent = A.contactNote;
    if (A.contacts) CONTACT_KEYS.forEach(function (k, i) { if (A.contacts[k]) links[i].setAttribute("href", A.contacts[k]); });
    return true;
  }
  var HEX = /^#[0-9a-fA-F]{6}$/, DIRS = ["to bottom", "to right", "135deg"];
  function fail(m) { throw new Error("invalid published data: " + m); }
  function isObj(o) { return o && typeof o === "object" && !Array.isArray(o); }
  function img(v, where) {
    if (v == null || v === "") return v;
    if (typeof v !== "string") fail(where);
    if (/^media:[0-9a-f]{64}$/.test(v)) return ADMIN + "/public/media/" + v.slice(6);
    if (/^assets\/[\w\-./]+$/.test(v) && v.indexOf("..") < 0) return v;
    if (/^https:\/\/[^\s"'<>]+$/.test(v)) return v;
    fail(where);
  }
  function clean(p, where) {
    if (!isObj(p)) fail(where);
    var r = {}; Object.keys(p).forEach(function (k) { if (k !== "_id" && k !== "_order") r[k] = p[k]; });
    IMG.forEach(function (k) { if (k in r) r[k] = img(r[k], where + "." + k); });
    if ("links" in r) { if (!Array.isArray(r.links)) fail(where + ".links"); r.links.forEach(function (l, i) { if (!isObj(l) || (l.url != null && !/^https:\/\//.test(l.url))) fail(where + ".links" + i); }); }
    if ("url" in r && r.url != null && r.url !== "" && !/^https:\/\//.test(r.url)) fail(where + ".url");
    return r;
  }
  function idx(id, pre) { var m = new RegExp("^" + pre + "-(\\d{3})$").exec(id || ""); return m ? +m[1] : -1; }
  function theme(site) {
    var t = site.theme; if (t == null) return null; if (!isObj(t)) fail("theme");
    var c = t.colors || {}, out = {};
    ["bg", "accent", "text"].forEach(function (k) { if (c[k] != null) { if (!HEX.test(c[k])) fail("theme." + k); out[k] = c[k]; } });
    var g = t.background;
    if (g != null) { if (!isObj(g) || (g.type !== "solid" && g.type !== "gradient")) fail("theme.background");
      if (g.type === "gradient") { if (!HEX.test(g.from) || !HEX.test(g.to) || DIRS.indexOf(g.direction) < 0) fail("theme.gradient"); out.gradient = { from: g.from, to: g.to, direction: g.direction }; } }
    return Object.keys(out).length ? out : null;
  }
  function rgba(hex, a) { var n = parseInt(hex.slice(1), 16); return "rgba(" + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (n & 255) + "," + a + ")"; }
  function themeCss(t) {
    var v = [];
    if (t.bg) v.push("--bg-0:" + t.bg, "--bg-1:" + t.bg);
    if (t.accent) v.push("--gold:" + t.accent, "--gold-dim:" + rgba(t.accent, .45), "--line:" + rgba(t.accent, .22));
    if (t.text) v.push("--lavender-soft:" + t.text);
    var css = ":root{" + v.join(";") + "}";
    if (t.gradient) css += "html{background:" + t.gradient.from + "}body{background:linear-gradient(" + t.gradient.direction + "," + t.gradient.from + "," + t.gradient.to + ") fixed;background-color:" + t.gradient.from + "}";
    else if (t.bg) css += "html{background:" + t.bg + "}body{background:" + t.bg + "}";
    return css;
  }
  // 純函式：不修改 ctx，回傳全新陣列；任何不合法都丟錯
  function build(P, ctx) {
    if (!isObj(P) || !Array.isArray(P.worlds) || !Array.isArray(P.characters) || !Array.isArray(P.platforms)) fail("shape");
    var site = P.site == null ? {} : P.site; if (!isObj(site)) fail("site");
    var W = ctx.WORKS, C = ctx.CHARACTERS, PL = ctx.PLATFORMS;
    var byId = {}; W.forEach(function (w) { byId[w.id] = w; });
    var seen = {}, vis = {}, works = [];
    P.worlds.forEach(function (p, i) { var id = p && (p._id || p.id); if (typeof id !== "string" || !id || seen[id]) fail("world" + i); seen[id] = 1;
      var v = p.visibility; if (v != null && VIS.indexOf(v) < 0) fail("world.visibility:" + id); vis[id] = v;
      if (v === "hidden") return; // 墓碑：不輸出、也不讓內建資料復活
      var d = clean(p, "world:" + id); d.id = id;
      if (v === "coming-soon") { var b = byId[id] || {}; var o = { id: id, title: d.title || b.title, emoji: d.emoji, cover: d.cover, coverPos: b.coverPos, tags: d.tags, visibility: "coming-soon" }; works.push(o); return; } // 只留展示欄位，不合併內建故事
      works.push(byId[id] ? Object.assign({}, byId[id], d) : d); });
    W.forEach(function (w) { if (!seen[w.id]) works.push(w); });
    var usedC = {}, chars = [];
    P.characters.forEach(function (p, n) { var i = idx(p && p._id, "c"); if (i < 0 || usedC[i]) fail("character" + n); usedC[i] = 1;
      var v = p.visibility; if (v != null && VIS.indexOf(v) < 0) fail("character.visibility:" + p._id);
      if (v === "hidden") return;
      var d = clean(p, "character:" + p._id);
      if (v === "coming-soon") { chars.push({ name: d.name, avatar: d.avatar, avatarPos: C[i] && C[i].avatarPos, work: d.work, links: [], visibility: "coming-soon" }); return; }
      if (!Array.isArray(d.links)) d.links = C[i] && C[i].links ? C[i].links : []; chars.push(C[i] ? Object.assign({}, C[i], d) : d); });
    C.forEach(function (c, i) { if (!usedC[i]) chars.push(c); });
    // 隱藏或未開放世界觀底下的角色一律不輸出（含後台沒有、只存在內建的角色）
    chars = chars.filter(function (c) { return vis[c.work] !== "hidden" && vis[c.work] !== "coming-soon"; });
    var usedP = {}, plats = P.platforms.map(function (p, n) { var i = idx(p && p._id, "p"); if (i < 0 || usedP[i]) fail("platform" + n); usedP[i] = 1;
      var d = clean(p, "platform:" + p._id), o = PL[i]; if (!o) return d;
      if (d.name && d.name !== o.name) { d.title = d.name; } delete d.name; // 原 name 是穩定別名
      return Object.assign({}, o, d); });
    PL.forEach(function (p, i) { if (!usedP[i]) plats.push(p); });
    // 分組名稱：原名或新名都映回原名（穩定別名）
    var alias = {}; plats.forEach(function (p) { alias[p.name] = p.name; if (p.title) alias[p.title] = alias[p.title] || p.name; });
    var groups = null;
    if (site.platformGroups != null) { if (!Array.isArray(site.platformGroups)) fail("platformGroups");
      groups = site.platformGroups.map(function (g, i) { if (!isObj(g) || (g.names != null && !Array.isArray(g.names))) fail("group" + i); return Object.assign({}, g, { names: (g.names || []).map(function (n) { return alias[n] || n; }) }); }); }
    var order = null;
    if (site.layout != null) { if (!isObj(site.layout)) fail("layout"); var o = site.layout.sectionOrder;
      if (o != null) { if (!Array.isArray(o) || !o.every(function (s, i) { return SECTIONS.indexOf(s) >= 0 && o.indexOf(s) === i; })) fail("sectionOrder"); order = o.slice(); } }
    return { works: works, chars: chars, plats: plats, groups: groups, order: order, theme: theme(site), about: about(site), newest: newest(site) };
  }
  function swap(arr, items) { arr.splice.apply(arr, [0, arr.length].concat(items)); }
  function apply(ctx, P) {
    var R;
    try { R = build(P, ctx); } catch (e) { if (root.console) console.warn("published data ignored", e.message); return false; }
    var keep = { W: ctx.WORKS.slice(), C: ctx.CHARACTERS.slice(), PL: ctx.PLATFORMS.slice(), G: ctx.PLATFORM_GROUPS.slice() };
    try { swap(ctx.WORKS, R.works); swap(ctx.CHARACTERS, R.chars); swap(ctx.PLATFORMS, R.plats); if (R.groups) swap(ctx.PLATFORM_GROUPS, R.groups); }
    catch (e) { swap(ctx.WORKS, keep.W); swap(ctx.CHARACTERS, keep.C); swap(ctx.PLATFORMS, keep.PL); swap(ctx.PLATFORM_GROUPS, keep.G); return false; }
    LAST = R;
    if (typeof document !== "undefined") {
      if (R.about) { var ra = function () { try { applyAbout(R.about); } catch (e) {} }; document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ra) : ra(); }
      if (R.theme) { var st = document.createElement("style"); st.id = "published-theme"; st.textContent = themeCss(R.theme); (document.head || document.documentElement).appendChild(st); }
      if (R.order) { var run = function () { var main = document.querySelector("main"); if (!main) return;
          var secs = R.order.map(function (id) { return document.getElementById(id); }).filter(function (el) { return el && el.parentNode === main; }); if (!secs.length) return;
          var anchor = secs.reduce(function (a, el) { return a.compareDocumentPosition(el) & 2 ? el : a; });
          var marker = document.createComment("sections"); main.insertBefore(marker, anchor); secs.forEach(function (el) { main.insertBefore(el, marker); }); marker.remove(); };
        document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", run) : run(); }
    }
    return true;
  }
  // 在 script.js 的 NEWEST 宣告後呼叫；只有整份資料已成功套用才會替換名單
  function applyNewest(arr) { if (!LAST || !LAST.newest || !Array.isArray(arr)) return false; swap(arr, LAST.newest); return true; }
  root.__publishedLoader = { build: build, apply: apply, themeCss: themeCss, applyNewest: applyNewest, applyAbout: applyAbout };
  root.__applyPublishedNewest = applyNewest;
  root.__applyPublished = function (ctx) { return apply(ctx, root.__PUBLISHED); };
})(typeof window !== "undefined" ? window : globalThis);
