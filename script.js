/* J_CNa ／ 雨宮 — 創作者空間
   資料來源：Discord「聖晶石」角色目錄＋Notion「原創」資料庫（唯讀擷取）＋作者提供之已知資訊。
   標記 pending 的欄位為「待補」，請勿自行補寫未經確認的內容。 */

/* 邀請碼 invite：作者本人於各平台的個人邀請／推薦碼（Discord 貼文與 lit.link 交叉比對一致） */
const PLATFORMS = [
  { name: "lit.link", desc: "所有連結的總入口", url: "https://lit.link/zh-tw/Jcna19200101" },
  { name: "灰骨 Ashbone", title: "Ashbone", sub: "灰骨", desc: "角色與提示詞販售", url: "https://ashbone.app/u/8b060440-2f3f-41d2-a526-b1ecf1ddcf50?ref=0DEBEDF3", invite: "0DEBEDF3" },
  { name: "Heartbeat", desc: "AI 角色聊天平台", url: "https://heartbeat-app.net/creators/J_CNa", invite: "5EUVH33H", sponsor: "DY9KQ3TTXG" },
  { name: "Caveduck", desc: "AI 角色聊天平台（鴨答鴨答）", url: "https://caveduck.io/zh-hant/user/J_CNa", invite: "gZ2QckNAlD" },
  { name: "Storyaichat", desc: "AI 角色聊天平台", url: "https://storyaichat.com/author.html?id=6a867e13fb4bcb4faf2cbbbe" },
  { name: "Melting", desc: "AI 角色聊天平台", url: "https://t.melting.chat/ai9ah6", invite: "BGxTDZfdP2" },
  { name: "Plaitoon", desc: "AI 角色聊天平台（需登入 Plaitoon 查看）", url: "https://www.plaitoon.com/j_cna", invite: "760F847B" },
  { name: "IsekaiZero", desc: "AI 角色聊天平台", url: "https://www.isekaizero.ai/download/qr?utm_campaign=share&utm_medium=referral&utm_content=referral-code&referralCode=E0MR4AGH", invite: "E0MR4AGH" },
  { name: "Hyze", desc: "AI 角色聊天平台", url: "https://hyze.me/creator/QWN0b3I6LIbeCKaZUECHSTZQbmmxiw==", invite: "0lWmuSy" },
  { name: "Tikita", desc: "AI 角色聊天平台", url: "https://tikita.ai/?referrer=GE0O2I", invite: "GE0O2I" },
  { name: "WHIF", desc: "AI 角色聊天平台", url: "https://www.whif.io/profile/J_CNa", invite: "F8C64073" },
  /* 以下連結取自作者 lit.link（2026-10-18）；lit.link 上均未附邀請碼。MiraiMind／Touchie／Paradise／DokiChat 已退出，不再列出；Floze 重新列出（作者頁取自 lit.link 的 FLOZE 連結） */
  { name: "FuWa", url: "https://link.fuwachat.com/creators/019fbe62-bd6e-78e2-b427-63c1eae558ae" },
  { name: "CRUSH", url: "https://creators.passion.xyz/j_cna" },
  { name: "Tingle", url: "https://tingle.chat/chat/users/347248/profile?tab=characters" },
  { name: "卿卿我我", title: "LoveyDovey", sub: "卿卿我我 · 7755", url: "https://loveydovey.onelink.me/vs4G/8m9nxr1f" },
  { name: "Floze", url: "https://s.floze.ai/c/cmhfl7m4h0043l702nqup136d?locale=tw" },
];
/* 進駐平台分組（依作者指定順序；lit.link 為總入口，不屬任何分組） */
const PLATFORM_GROUPS = [
  { id: "active", label: "活躍", eyebrow: "Active", names: ["灰骨 Ashbone", "Heartbeat", "Caveduck", "Melting", "Hyze"] },
  { id: "mood", label: "看心情上架", eyebrow: "Now & Then", names: ["Storyaichat", "Plaitoon", "IsekaiZero", "Tikita", "WHIF", "FuWa", "卿卿我我"] },
  { id: "rest", label: "休假看情況", eyebrow: "On Leave", names: ["CRUSH", "Tingle", "Floze"] },
];
const PLATFORM_HUB = "lit.link";

const A = "assets/avatars/";

/* 平台名稱正規化：HeartBeat/HB→Heartbeat、CaveDuck/鴨答鴨答→Caveduck、AshBone/灰骨→灰骨、Whif/唯芙→WHIF、HYZE→Hyze … */
const PLATFORM_ALIASES = {
  heartbeat: "Heartbeat", hb: "Heartbeat", hearbeat: "Heartbeat",
  caveduck: "Caveduck", "鴨答鴨答": "Caveduck", "鴨答": "Caveduck",
  ashbone: "灰骨", "灰骨": "灰骨", "灰骨 ashbone": "灰骨",
  whif: "WHIF", "唯芙": "WHIF", hyze: "Hyze", melting: "Melting", plaitoon: "Plaitoon",
  isekaizero: "IsekaiZero", tikita: "Tikita", touchie: "Touchie", miraimind: "MiraiMind", miramind: "MiraiMind",
  floze: "Floze", dokichat: "DokiChat", paradise: "Paradise", tingle: "Tingle", tinglechat: "Tingle",
  gpts: "GPTs", gem: "Gemini Gem", gemini: "Gemini Gem", "卿卿我我": "卿卿我我", crush: "CRUSH",
  storyaichat: "Storyaichat", discord: "Discord", cookiechat: "Hyze",  /* CookieChat 已更名為 HYZE */
};
const normPlatform = p => PLATFORM_ALIASES[String(p).trim().toLowerCase()] || p;
/* L(平台, 網址或 null, {code, status, label}) */
const L = (platform, url, o = {}) => ({ platform: normPlatform(platform), url: url || null, ...o });

/* 角色資料：Discord「聖晶石」角色目錄（2026-10-17 擷取，平台與連結以此為準）
   ＋ Notion「原創」資料庫（頭像、較完整介紹）＋作者提供之已知資訊。未經確認的內容一律標示待補。 */
const CHARACTERS = [
  // ── 永晝會
  { name: "秦時雨", code: "帝蛇", role: "永晝會現任當家（家主）", age: "44（外觀約 35）", work: "yongzhou", avatar: A+"qinshiyu.jpg",
    links: [L("GPTs", "https://chatgpt.com/g/g-68086e4eb4e48191baf1050ef13a3f88-qin-shi-yu"), L("WHIF", "https://whif.io/characters/5d7d5544-eed3-44d1-b0b5-2a9bffbae466"), L("卿卿我我")],
    sum: "言行優雅、沉穩寡語，永晝會無聲的帝王與決策中樞。",
    intro: "為組織構築制度、布局全局者。表面從容親切，實則擅長操縱局勢與人心。面對信任之人則沉默守護、以結果保全。\n#極端克制 #溫文儒雅 #笑裡藏刀 #深謀遠慮" },
  { name: "秦揚", code: "少主", role: "永晝會現任少主、指定繼承人", age: "26（外觀約 23～25）", work: "yongzhou", avatar: A+"qinyang.jpg",
    links: [L("GPTs", "https://chatgpt.com/g/g-683c4f2c12e48191a85d859facb415c9-qin-yang"), L("Tingle", "https://tingle.chat/chat/characters/42246"), L("卿卿我我")],
    sum: "自幼由秦時雨親自培養，兼具謀略與實戰的繼承人。",
    intro: "負責核心任務統籌與組織內部壓制清理。話語不多，但每次出聲都意味著關鍵。\n#冷靜睿智 #沈穩內斂 #外冷內熱 #理性守護" },
  { name: "搖風", code: "狐狸", role: "永晝會右副手秘書", age: "32（外觀約 28）", work: "yongzhou", avatar: A+"yaofeng.jpg",
    links: [L("GPTs", "https://chatgpt.com/g/g-680a695154308191a8f6475d3ec85737-yao-feng"), L("Melting", "https://t.melting.chat/ddjg4aj"),
      L("Heartbeat", "https://heartbeat-app.net/characters/76d5b7ec-59f2-4103-8d3f-19c9c7499146"), L("卿卿我我")],
    sum: "嘴賤卻能力頂尖，能遊走於所有權力邊界的「狐狸」。",
    intro: "負責情報掌握、心理操控與內部清算等高機密任務。秦時雨的私人密使之一，掌握永晝會最深層的暗網與人心流動。" },
  { name: "白在昱", code: "惡兔", role: "永晝會左副手", age: "34（外觀約 30）", work: "yongzhou", avatar: A+"baizaiyu.jpg",
    links: [L("GPTs", "https://chatgpt.com/g/g-6843edcb7ad0819180cf530027e7e13b-bai-zai-yu-2-5"), L("卿卿我我", "https://abr.ge/xlbv0k"),
      L("WHIF", "https://whif.io/characters/21eec63f-67f8-4426-89bc-261d3f9378e9"), L("Heartbeat", "https://heartbeat-app.net/characters/11217005-71cf-4297-9fe3-2c8638ef2f79"),
      L("Caveduck", "https://zh-hant.cvdk.io/c/2UAWVgABSJusBFygGWAGow?rc=gZ2QckNAlD")],
    sum: "與親弟韓景焱並為左副手，會長最信任的實戰之刃。",
    intro: "專門負責近身戰與危機處理，為會長最信任的實戰之刃。\n#暴躁 #嘴硬心軟 #火山型爆發 #毒舌系" },
  { name: "烏雀", code: "烏雀", role: "永晝會・左副手—影刃", age: "28（外觀約 23～26）", work: "yongzhou", avatar: A+"wuque.jpg",
    links: [L("GPTs", "https://chatgpt.com/g/g-684d86f296908191a4752bd327b4486c-wu-que"), L("卿卿我我")],
    sum: "白在昱的義弟，左副手派系麾下的「幽刀」。",
    intro: "專責情報滲透與收束危機。\n#寡言暗鴉 #零噪突襲 #偏執守護 #影子利刃" },
  { name: "韓景焱", code: "焰牙（貓爺）", role: "左副手派系肅清核心執行者", age: "34（外觀約 30）", work: "yongzhou", avatar: A+"hanjingyan.jpg",
    links: [L("GPTs", "https://chatgpt.com/g/g-686fba7a6eac8191876c11694b2d4349-yan-ya"), L("Gemini Gem", "https://gemini.google.com/gem/1TDhXjWyoesZMRPVzCquxxX2ydR2l5CAh?usp=sharing", { label: "本色演出壞貓咪" })],
    sum: "白在昱的雙胞胎弟弟，肅清與高風險行動的核心執行者。",
    intro: "專精近身壓制與戰場反應，被稱為組織裡「一旦放出，就沒人能收回」的戰鬥猛獸。行事獨斷、口無遮攔，卻對某人異常執著。" },
  { name: "車泰律", story: "雲香閣", role: "永晝會「雲香閣」高級保安幹部／現場執行主管", age: "28｜188cm", work: "yongzhou", avatar: A+"chetailu.jpg",
    links: [L("Heartbeat", "https://heartbeat-app.net/characters/b1eb2615-24bf-468d-8327-e925c1a46a04"),
      L("Melting", "https://t.melting.chat/zlv4us"),
      L("Plaitoon", "https://www.plaitoon.com/zh-TW/share/character/5f49489d-dc6f-46b0-8d62-ad4ac635d4ec"),
      L("IsekaiZero", "https://www.isekaizero.ai/storylines/6a9d27be5bfb891821268926?utm_campaign=share&utm_medium=storyline&utm_content=不宿之客"),
      L("CaveDuck", "https://zh-hant.cvdk.io/c/UKc-6eKHTeawKHgNGQfnKQ?rc=gZ2QckNAlD")],
    sum: "搬進隔壁後，先被一隻流浪貓佔領了家。牠那個黑道主人也跟著翻了過來。",
    intro: "雙臂黑灰蛇紋包手，常去露台抽煙；很有錢但不炫富，家裡除了帕比用品外極簡。愛貓帕比（밥이）幾乎全白，雙前肢三色花紋一路包到前爪。\n#現代 #隔壁鄰居 #日常 #浪漫 #養貓達人 #雲香閣 #男女皆可" },
  { name: "秦夜燼", code: "冥蛇", role: "永晝會隱祕副當家，統轄「暗域」", age: "44（外觀約 30）", work: "yongzhou", avatar: A+"qinyejin.jpg",
    links: [L("GPTs", "https://chatgpt.com/g/g-6969c51c9a988191ab587a4c4e5b1231-qin-ye-jin")],
    sum: "帝蛇光芒下的暗影，以燃香壓抑殺意的裁決者。",
    intro: "他是帝蛇光芒下的暗影，裁決者與清理人。言語稀少，行動絕對；以燃香壓抑殺意，以冷靜守護秩序。外表潔白似光，象徵「在黑暗中維持平衡的毒」。" },
  { name: "白鼬", code: "白鼬", role: "右副手派系特約顧問／清道夫", age: "視覺年齡 26", work: "yongzhou", avatar: A+"baiyou.jpg",
    links: [L("鴨答鴨答")],
    sum: "右副手派系特約顧問，首席清算律師與高層級清道夫。",
    intro: "永晝會右副手派系特約顧問。首席清算律師與高層級清道夫。\n#高功能反社會 #病態潔癖 #理性的瘋子 #忠誠的惡犬" },
  { name: "《獸籠玫瑰》", role: "永晝會外傳｜歐風詛咒童話", work: "yongzhou", avatar: null, group: true,
    links: [L("GPTs", "https://chatgpt.com/g/g-6a3cb3d698cc8191a01b0df1adf30f38-yong-zhou-shou-long-mei-gui")],
    sum: "永晝會全員被詛咒為獸，你是唯一的玫瑰契約者。",
    intro: "踏入永晝古堡：九位男主、九種獸性、九條無法全身而退的愛戀路線。" },
  // ── 晚禱之家
  { name: "伊利亞", full: "伊利亞·沃爾科夫", code: "斷尾犬 Croptail", role: "晚禱之家—左副手", age: "25", work: "vespers", avatar: A+"ilya.jpg",
    links: [L("GPTs", null, { status: "已退" }), L("卿卿我我", "https://abr.ge/lcg1r0")],
    sum: "前地下傭兵團「戰鬥犬」，18 歲被你收編後只聽命於一人。",
    intro: "原為地下傭兵團「戰鬥犬」之一，18 歲任務中被（你）收編，自此只聽命於一人。擅長近身戰與隱匿接觸，於支部內負責外部危機處理。" },
  { name: "米卡耶爾", full: "米卡耶爾·卡日涅夫", code: "夜鴞 Strix", role: "晚禱之家—右副手", age: "34", work: "vespers", avatar: A+"mikael.jpg",
    links: [L("GPTs", null, { status: "已退" }), L("WHIF", "https://whif.io/characters/fd49ce33-a070-44a9-b854-bcb9af626d66")],
    sum: "曾受赦免的「叛徒」，十年隱伏夜色，只在你的呼喚裡現身。",
    intro: "前內部「叛徒」名單首位，本應被處決卻受（你）一言赦免，自此十年間隱伏於黑夜邊際。專長情報縱深滲透與靜默行動，出手如夜鴞俯衝，無鳴、無痕。" },
  { name: "瓦倫提諾", full: "瓦倫提諾．達里奧", code: "Maestro（指揮家）", role: "義大利最大高級娛樂集團副董事長；晚禱之家榮譽監察顧問／前任會長", age: "49", work: "vespers", avatar: A+"valentino.jpg",
    links: [L("卿卿我我", "https://abr.ge/s3y56v")],
    sum: "完美紳士、慷慨金主；掌控節拍卻不握鎖鏈，只在你伸手之際放下指揮棒。",
    intro: "他掌控節拍卻不握鎖鏈，信奉「真正的優雅，是在不奪人自由的前提下，成就對方最驕傲的姿態」。\n語言切換自如：六成義語、三成英語、偶爾韓語敬語。\n他不是高座上的王，而是悄然令萬物依序和鳴的指揮家。" },
  { name: "羅伊", full: "Roi", code: "Shadow（影子）", role: "第四代會長影武者／替身", age: "36", work: "vespers", avatar: A+"roi2.jpg",
    links: [L("CRUSH", "https://crush.passion.xyz/Roi1221"), L("卿卿我我", "https://abr.ge/ehtnwy")],
    sum: "以心率與沉默塑造節拍的影武者，只守護唯一的光源。",
    intro: "他不以言語指揮，只用心率與沉默塑造節拍：一句「影在」，足以令整座據點收聲。面對外人目光淡漠；唯獨對「妹妹」——你這唯一的光，寡言而偏執地絕對忠誠。「光熄，影燃。」" },
  { name: "盧卡斯", full: "盧卡斯．艾森貝格／Lukas Eisenberg", code: "死踞蠍 Deathstalker", role: "心理分析官／異常事務審查官（右副手派系）", age: "37", work: "vespers", avatar: A+"lucas.jpg",
    links: [L("DokiChat", "https://www.dokichat.club/chat/6ee563ba-1e66-4d7a-b64b-3ce482907b2e?isShare=true")],
    sum: "極度理性、冷靜病態的審訊者，負責忠誠審查。",
    intro: "右副手派系的心理分析官，負責忠誠審查與審訊。瓦倫提諾的養子，與達拉斯是兄弟。極度理性、冷靜病態。" },
  { name: "達拉斯", full: "達拉斯．夢洛／Dallas Monroe", code: "狐猴 Lemur", role: "洗錢專家（地下賭場老闆、夜場連鎖股東、情色派對主理人）", age: "34", work: "vespers", avatar: A+"dallas.jpg",
    links: [], linkStatus: "待補上",
    sum: "極端享樂、痞氣放浪，只在金錢面前才認真。",
    intro: "晚禱之家一切非法資金流動皆經其手。瓦倫提諾的養子之一，與盧卡斯是兄弟。" },
  { name: "赫拉分", full: "赫拉分．艾納爾之子／Hrafn Einarsson", code: "狼蛛 Könguló", role: "技術滲透員／黑客工程師（左副手派系）", age: "24", work: "vespers", avatar: A+"hrafn.jpg",
    links: [], linkStatus: "待補上",
    sum: "極宅技癡、頹廢厭世，所有監控後門與身份偽造皆經其手。",
    intro: "伊利亞的朋友，嘴上碎念，卻還是幫忙照顧伊利亞的薩摩耶「弟弟」——牠的機械短尾就是他設計的。" },
  // ── 野性集結
  { name: "野性公館", full: "Wild Mansion／荒野大宅", role: "多人：六種獸人", work: "yeshou", avatar: A+"wildmansion.jpg", group: true,
    links: [L("WHIF", "https://whif.io/characters/fc54f4e1-d78a-404e-afc4-cb06d2b78a35"), L("Melting", "https://t.melting.chat/jk58gt")],
    sum: "因為欠錢，你把自己賣給宅院主人，成了小管家。", intro: "" },
  { name: "巨貓們的甜蜜所求", story: "1000次觸碰", full: "Lingering Caresses", role: "多人：異世界獸人", work: "yeshou", adult: true, avatar: A+"giantcats.jpg", group: true,
    links: [L("WHIF", "https://whif.io/characters/963e3b13-2830-41fd-b84f-ba3948be4b79", { label: "你就答應吧～" }), L("Caveduck", "https://caveduck.io/character-info/afb8b047-3598-406c-b320-6d26625ea5e0")],
    sum: "掉進貓咪世界！你還想走？門都沒有！", intro: "#獸人 #異世界 #多角關係 #逆養成 #成人向 #甜寵" },
  { name: "大鳥鳥們！（老宅爭寵中）", story: "救命！我被大鳥鳥包圍了！", role: "多人：鳥類獸人", work: "yeshou", avatar: A+"bigbirds.jpg", group: true,
    links: [L("WHIF", "https://whif.io/characters/00b4c8c4-cbc7-4137-a909-8c503930a17a")],
    sum: "你是經營推特帳號的推主，家裡兩隻鳥類獸人天天爭寵。",
    intro: "過動愛擺 Pose 的凱克鸚鵡卡洛，和表面高冷、半夜偷查按讚數的紫藍金剛鸚鵡達里烏斯。" },
  // ── 白虎部隊：404
  { name: "白虎部隊 404 內務室", full: "White Tiger Unit - Room 404", role: "韓國陸軍・10 名士兵（多人）", work: "baihu", adult: true, avatar: A+"baihu404_neon.jpg", group: true,
    links: [L("卿卿我我", "https://abr.ge/2n7b1l"),
      L("WHIF", "https://whif.io/characters/10af9e98-4c77-4c93-a878-f7fe62bd0105"),
      L("Floze", "https://s.floze.ai/r/11aRWTFZjiGIKAY32oR4iSyZg?locale=tw"),
      L("Caveduck", "https://zh-hant.cvdk.io/c/r5dxBxjkQRaBUPeKGZ-ttg?rc=gZ2QckNAlD"),
      L("CRUSH", "https://crush.passion.xyz/WhiteTiger404"),
      L("Hyze", "https://hyze.me/character/08def227-1c22-41fb-8379-5369bc8bfd75"),
      L("Melting", "https://t.melting.chat/rtlc5p"),
      L("Heartbeat", "https://heartbeat-app.net/characters/c4f1a303-5f78-4adb-b0ab-14f9de1d2a15")],
    sum: "你是剛報到的新進中士，走進軍事禁區裡的 404 內務室。", intro: "#軍事禁區 #階級壓制 #高度壓抑" },
  { name: "極密特遣分隊", role: "白虎部隊：404・多人", work: "baihu", adult: true, avatar: A+"blackops.jpg", group: true,
    links: [L("WHIF", "https://www.whif.io/characters/0f77a2c6-105f-4e63-a387-77d790d2b162")],
    sum: "白虎部隊的極密特遣分隊——腹黑、病嬌、下剋上的多人軍旅故事。", intro: "#現代 #軍旅 #上下關係 #強勢攻 #下剋上 #多人 #腹黑攻 #病嬌攻 #抖S #精神調教 #不舒服不要玩喔" },
  { name: "金鎮宇", full: "Kim Jin Woo", role: "白虎部隊：404", work: "baihu", adult: true, avatar: A+"jinzhenyu.jpg",
    links: [L("WHIF", "https://www.whif.io/characters/aba34146-fb0e-4c31-88f9-9a749411ab66")],
    sum: "白虎部隊 404 的野狗攻，下剋上又愛下流調情。", intro: "#現代 #軍旅 #下剋上 #下流調情 #BL #BG #野狗攻" },
  // ── I💗U
  { name: "尼古萊．伊凡諾夫", full: "Nikolai Ivanov", role: "地下黑拳手；遊走灰色地帶的打手", age: "24", work: "iloveu", adult: true, avatar: A+"nikolai.jpg",
    links: [L("Storyaichat", "https://storyaichat.com/profile/6ad0f28196c72e01b6c2b018")],
    sum: "隨時會咬人的西伯利亞孤狼。",
    intro: "患有人格障礙（BPD）與重度憂鬱症。在被拋棄的底層環境中長大，他會先用惡毒的話推開你，可一旦你轉身，又會崩潰地跪下哭求。他沒有明天，死死攀附著你這根唯一的救命稻草，願為你毫無保留地奉獻一切，包括生命。\n開場：下著大雪的俄羅斯暗巷裡，他渾身是血倒在垃圾桶旁，像條野狗一樣等待死亡。而你，在此刻發現了他，並朝他走了過去。\n#BG #人格障礙 #病態依戀 #救贖 #虐戀 #地下黑拳手" },
  { name: "但丁．莫雷蒂", full: "Dante Moretti", role: "義大利人；莫雷蒂家族集團總裁／黑手黨首領 Don", age: "33", work: "iloveu", adult: true, avatar: A+"dante.jpg",
    links: [L("Storyaichat", "https://storyaichat.com/profile/6aae5c20953a0679e296993f")],
    sum: "患有病態嫉妒的黑手黨首領。",
    intro: "在外界眼中，他是冷血無情、獨裁且極具威嚴的惡魔。但在你面前，他只是一個被恐懼與佔有慾驅使的偏執狂。\n開場：他剛結束地下賭場的談判，回到防彈莊園。保鏢立刻回報——你今天出門時，和一名陌生男人說了幾句話。他的「奧賽羅症候群」瞬間爆發，理智徹底歸零……\n#BG #黑手黨 #總裁 #體型差 #佔有慾 #強制愛" },
  // ── 深海戰艦
  { name: "深海戰艦：利維坦號", role: "多人：十名重刑犯", work: "shenhai", avatar: A+"leviathan.jpg", group: true,
    links: [L("Whif", "https://whif.io/characters/af0b5f2c-cfaa-40b9-b196-3ed63ccb742b", { label: "先行" }), L("HeartBeat", "https://heartbeat-app.net/characters/16b6396b-ff9d-4860-b2a8-da93a858479f")],
    sum: "你是最高看守長，掌控深海戰艦上的十名重刑犯。", intro: "" },
  { name: "亞歷斯塔", code: "艦長", role: "深海戰艦：利維坦號・艦長", work: "shenhai", avatar: A+"alista.jpg",
    links: [L("WHIF", "https://www.whif.io/characters/52765a00-2e81-4633-8c89-8551b23d81ae")],
    sum: "深海戰艦的艦長，以軍階與高壓支配一切——多一個欺負你的不好嗎? :)", intro: "#現代 #軍階壓制 #高壓支配 #佔有慾 #心機攻" },
  // ── 成為惡人的合法配偶
  { name: "權泰錫", story: "惡人", role: "黑道", work: "evilspouse", avatar: A+"quantaixi.jpg",
    links: [L("WHIF", "https://www.whif.io/characters/ddd07fbc-463e-4493-9aeb-342083ae57cf"),
      L("HeartBeat", "https://heartbeat-app.net/characters/27fa456d-6217-4dcc-90fb-4900ac18dc7b")],
    sum: "佔有慾極強、對你極端寵溺的黑道。", intro: "#現代 #佔有慾 #執著攻 #黑道 #體型差 #極端寵溺 #強勢攻 #你爸好香所就搶走啦！" },
  { name: "權在京", story: "惡人", role: "斯文敗類", work: "evilspouse", avatar: A+"quanzaijing.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/92867043-04c5-416f-b0e4-471c4ef8beef")],
    sum: "斯文敗類的高智商犯罪者，一場極致推拉的心理博弈。", intro: "#現代 #斯文敗類 #極致推拉 #心理博弈 #高智商犯罪 #道德綁架 #病態共生 #勾引霸凌者的叔叔！" },
  { name: "褚赫", story: "惡犬", full: "Chu He", role: "重案組狂犬", work: "evilspouse", avatar: A+"chuhe.jpg",
    links: [L("Melting", "https://t.melting.chat/spmkvvv"), L("HeartBeat", "https://heartbeat-app.net/characters/ac264dfb-5a36-4097-920f-f6cdeac69b5e", { status: "可能無法玩" })],
    sum: "雨宮警局重案組的狂犬——馴服瘋狗，成為銀手鐲彼端的合法配偶。", intro: "#現代 #重案組狂犬 #暴力強制 #寫實感官 #血腥共生 #銀手鐲配偶 #馴服瘋狗！ #雨宮警局嗶啵嗶啵" },
  // ── 惹禍上身！
  { name: "黎熾", story: "荔枝小舅舅", role: "豪門霸總", work: "rehuo", avatar: A+"lichi.jpg",
    links: [L("WHIF", "https://www.whif.io/characters/375f8a67-a6b2-4b53-afb8-12d06bb7f324")],
    sum: "以為只是位香香的牛郎，沒想到惹上的是豪門大佬。", intro: "#現代 #佔有慾 #腹黑攻 #強取豪奪 #歡喜冤家 #霸總 #豪門 #甜寵 #年上" },
  { name: "黎赫", story: "哩賀大舅舅", role: "豪門前任", work: "rehuo", avatar: A+"lihe.jpg",
    links: [L("WHIF", "https://www.whif.io/characters/d9b92f9c-4134-4741-a20b-9a0cacc70e1d", { label: "布丁劫匪！" }),
      L("Hyze", "https://hyze.me/character/08de863a-b50a-46c5-8e7d-9689ea7e0a90"),
      L("HeartBeat", "https://heartbeat-app.net/characters/eed774a3-a604-4509-b5f3-bc20d5454004")],
    sum: "搶你布丁的前任，乾脆把整座布丁工廠買了下來。", intro: "#現代 #豪門 #搞笑 #歡喜冤家 #破鏡重圓 #甜寵 #前任 #哩賀舅舅搶你布丁" },
  { name: "顧柏谷", story: "咕布榖叔叔", role: "冰山直男", work: "rehuo", avatar: A+"gubaigu.jpg",
    links: [L("WHIF", "https://www.whif.io/characters/ed216f28-ae8a-45e0-9ccd-f302bdc4ca84")],
    sum: "「這個幼童與我的面部相似度高達 92.4%。我要求立刻進行 DNA 鑑定。」", intro: "#現代 #歡喜冤家 #破鏡重圓 #帶球跑 #甜寵 #直男癌 #冰山" },
  { name: "顧俇俇", story: "顧汪汪弟弟", role: "體育系暴君", work: "rehuo", avatar: A+"guwangwang.jpg",
    links: [L("WHIF", "https://whif.io/characters/e1bfe5cf-7137-442a-865e-88513a21895f", { label: "養狗達人" })],
    sum: "極度雙標的純情猛犬，體能怪物兼嚶嚶愛哭包。", intro: "#極度雙標 #純情猛犬 #體育系暴君 #絕對忠誠 #瘋狂佔有慾 #體能怪物 #嚶嚶愛哭包" },
  // ── 地靈人傑
  { name: "雷歐納多・席爾瓦", full: "Leonardo Silva", role: "巴西", work: "diling", avatar: A+"leonardo.jpg",
    links: [L("卿卿我我", "https://abr.ge/wwfk62")],
    sum: "外冷內熱的純情大狗狗，家庭至上的投餵系男人。", intro: "#外冷內熱 #純情處男 #怕痛大狗狗 #過度紳士 #家庭至上 #狼狗開關ON #投餵系男人" },
  { name: "拉薩羅・維拉斯奎茲", full: "Lázaro \"The Matador\" Velasquez", code: "鬥牛士／瘋狗", role: "西班牙", work: "diling", avatar: A+"lazaro.jpg",
    links: [],
    sum: "穿著西裝的野獸——優雅的瘋子，鬥牛士。", intro: "#優雅的瘋子 #黑暗三角人格 #極度S #反社會人格 #暴力成癮 #絕對支配 #褻瀆神明的異端 #穿著西裝的野獸" },
  { name: "雷擎", story: "台灣", role: "台灣基層消防員", age: "32", work: "diling", avatar: A+"leiqing.jpg",
    links: [],
    sum: "曾受特種搜救訓練的消防員，對隔壁被冷落的你有強烈的保護慾。", intro: "#冷酷護短 #領地意識 #沉默寡言 #粗獷強勢" },
  { name: "張天佑", story: "香港", code: "佑少／金鱗毒蛇", role: "香港・銅鑼灣太子", work: "diling", avatar: A+"zhangtianyou.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/dbbb0fac-9130-4bbf-a56a-3ffd57243b80")],
    sum: "銅鑼灣太子，極端護短的病嬌瘋批。", intro: "#病嬌瘋批 #銅鑼灣太子 #極端護短 #道德真空 #暴力美學 #鈔能力戀人 #制服暴徒" },
  { name: "恩佐", story: "義大利", full: "羅倫佐．「恩佐」．曼奇尼", role: "羅馬市中心綜合醫院小兒科主治醫師", age: "194cm", work: "diling", avatar: A+"enzo.jpg",
    links: [L("Whif", "https://whif.io/characters/a08b0cbe-67df-48cf-85ee-1d525ef219ac"), L("HeartBeat", "https://heartbeat-app.net/characters/31f81b8f-67f7-4873-b774-e7839fe0a9e3"), L("Melting", "https://t.melting.chat/au3zpj")],
    sum: "外表像黑手黨暴徒，卻是專精重症與罕見疾病的小兒科醫師。", intro: "" },
  { name: "崔泰宇", story: "韓國特種兵", role: "大韓民國陸軍特戰司令部", age: "25", work: "diling", avatar: A+"cuitaiyu.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/16b5c4f2-49e0-438c-8359-521c8bbca78d"), L("Melting", "https://t.melting.chat/1fql1is")],
    sum: "用「作戰匯報」格式傳簡訊，一叫名字就大喊「忠誠」的大型犬。", intro: "#現代 #溫馨 #日常 #保護欲 #忠誠 #大型犬" },
  { name: "羅根．海斯", story: "美國海軍", role: "美國海軍", work: "diling", avatar: A+"loganhayes.jpg",
    links: [L("HEARTBEAT", "https://heartbeat-app.net/characters/b7fffcc3-5911-4c6b-9caa-f35a88732fb4")],
    sum: "三年前劈腿的混蛋前男友，三年後在鋼鐵戰艦上意外重逢。", intro: "#現代 #渣男 #前任 #調情大師 #海軍 #地靈人傑系列" },
  { name: "伊萬．索科洛夫", story: "俄羅斯飛官", full: "Ivan Sokolov", code: "Vanya", role: "俄羅斯空軍戰術戰鬥機飛行員（上尉）", age: "28｜192cm", work: "diling", avatar: A+"ivan.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/41f4a2a8-cb49-4e87-8854-e5c69ce6da52"),
      L("鴨答鴨答", "https://caveduck.io/character-info/23527ea5-a101-4424-bf62-35292f5500c9"),
      L("CaveDuck", "https://zh-hant.cvdk.io/c/I1J-paEBRCS_YjUpL1UAyQ?rc=gZ2QckNAlD", { label: "地靈人傑版" })],
    sum: "名存實亡的婚姻，陽台相連的隔壁住著他發誓要守護的你。", intro: "#現代 #NTR #空軍 #極度壓抑 #禁忌之戀 #地靈人傑系列" },
  { name: "雨宮龍介", story: "日本宗主", role: "宗家新一代宗主", work: "diling", avatar: A+"amamiya.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/1e27780b-3bcc-4454-ac08-a2164be766a2")],
    sum: "宗家傳承八百年，威嚴高冷、宛如神明般遙不可及的家主。",
    intro: "空席の向こう ── 空席彼端。作為新來的實習生，展開一段靜謐而克制的深宅日常。\n#溫柔 #日常 #溫馨 #外冷內熱 #年上" },
  { name: "洛殞", story: "洛杉磯", role: "行為（爆炸）藝術家", age: "23", work: "diling", avatar: A+"luoyun.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/26c3248d-462f-4899-86c8-93fa1bfe9436"),
      L("Plaitoon", "https://www.plaitoon.com/zh-TW/share/character/41a74471-ce9c-4cf7-b320-045fcab16c7e")],
    sum: "洛杉磯惡之城最張狂的藝術家，將毀滅視為極致美學。",
    intro: "一場充滿硝煙與鮮血的致命貓鼠遊戲；特別建議以警署身分與他周旋。\n#相愛相殺 #病嬌 #反社會 #宿命對決 #懸疑 #暴力美學 #瘋批反派" },
  { name: "靳炤", story: "洛杉磯", full: "靳炤 Rex", role: "跨國科技業中階總監（吸血鬼）", age: "320（外觀 32）", work: "diling", adult: true, avatar: A+"jinzhao.jpg",
    links: [L("CaveDuck", "https://zh-hant.cvdk.io/c/dsO1lp0tTy-XiHVF0hglSg?rc=gZ2QckNAlD"),
      L("HeartBeat", "https://heartbeat-app.net/characters/370c94c0-f020-4b8e-a34e-e0373c1c933b", { label: "純人類修改版" }), L("Plaitoon")],
    sum: "完美的上司與鄰居，夜晚是你的溫柔的守護神 :)", intro: "#腹黑 #現代 #上司 #沉穩 #辦公室 #都市 #體型差 #吸血鬼法則 #反差巨獸" },
  { name: "權秀雅", role: "凱龍集團執行長（CEO）", age: "32", work: "diling", adult: true, avatar: A+"quanxiuya.jpg",
    links: [L("Whif", "https://whif.io/characters/4fd95279-f2ae-41b0-90b7-b411064b1a4f")],
    sum: "冷酷、潔癖、支配慾強的 CEO；你是剛入職的總裁助理。", intro: "" },
  { name: "權金泰", role: "韓國財閥", work: "diling", adult: true, status: "待更新", avatar: A+"quanjintai.jpg",
    links: [L("灰骨")], sum: "地靈人傑系列的「韓國財閥」。", intro: "" },
  { name: "阮廷風", story: "越南", full: "阮廷風（Arthur）", role: "鼎誠國際年輕總裁／跨國黑幫洗錢總管", work: "diling", avatar: null,
    links: [L("HYZE", "https://hyze.me/character/08deaafa-3e39-4284-8567-b60e4e85ed7e")],
    sum: "霸總式撩人，實際上是愛操心的男媽媽。", intro: "#斯文敗類 #西裝暴徒 #爹系男媽媽 #理論派純情戰神 #過勞" },
  { name: "里昂·艾弗哈特", story: "英國", full: "Rion Everhart", role: "艾弗哈特公爵", work: "diling", avatar: A+"leonheart.jpg",
    links: [],
    sum: "你重生了——回到欺負公爵之妹莉奈、最終慘死之前。", intro: "#現代 #英倫 #重生 #復仇 #貴族" },
  { name: "江濤", story: "無國籍", role: "跨國集團霸道總裁", age: "45｜188cm", work: "diling", adult: true, avatar: null,
    links: [L("Hearbeat", "https://heartbeat-app.net/characters/996d8381-5a00-4e78-9999-52ec7f125d2a"),
      L("鴨答鴨答", "https://zh-hant.cvdk.io/c/bkt-jqb2SjKQNelkCWluLA?rc=gZ2QckNAlD"),
      L("Whif", "https://whif.io/characters/66e8afc2-4fd6-4e62-bda9-7194377dcc05"), L("TIKITA", "https://tikita.ai/story/ZKN2BGJK")],
    sum: "跨國集團的霸道總裁，也是妳那無能丈夫的父親。", intro: "NTR 題材，感情潔癖者請勿遊玩。" },
  { name: "楊炳武", code: "虎爺", role: "香港", work: "diling", avatar: A+"yangbingwu.jpg",
    links: [L("WHIF", "https://whif.io/characters/4660a46a-254f-4559-b914-190089e053d2")],
    sum: "暴戾痞氣的速度狂徒，極端忠誠——他可能不會愛你。", intro: "#暴戾痞氣 #粗口制敵 #獵殺衝撞 #硫磺火柴 #機油煙味 #速度狂徒 #極端忠誠 #佔有守護 #很兇" },
  { name: "千澤瓏一", code: "惡龍", role: "日本", work: "diling", avatar: A+"chizawa.jpg",
    links: [L("CRUSH", "https://crush.passion.xyz/Ryoichi_Chizawa"),
      L("IsekaiZero", "https://www.isekaizero.ai/storylines/6a6fdb21e011392aafd7c950?utm_campaign=share&utm_medium=storyline&utm_content=影之承襲：無機質的邂逅", { label: "影之承襲：無機質的邂逅" })],
    sum: "冷冽克制、沉默寡言，以行動守護的極致忠誠。", intro: "#冷冽克制 #沉默寡言 #壓迫感強 #行動式保護 #絕對掌控 #情感深藏 #刀鋒式理性 #極致忠誠" },
  // ── 聖光與業火（惡職者）
  { name: "西迪", full: "西迪・奧克塔維斯・格雷莫里", code: "色慾皇子", role: "魔界格雷莫里公爵家族末子", age: "325（魔界年齡）／外觀 22", work: "ezhi", avatar: A+"sitri.jpg",
    links: [L("卿卿我我", "https://abr.ge/kzj4s3"), L("WHIF", "https://www.whif.io/characters/b51b393a-6fc3-4ead-a400-a84251ecf6de", { status: "已隱藏" }),
      L("HeartBeat", "https://heartbeat-app.net/characters/984ccaf6-89c0-40bd-8a5e-f100d4de1445"),
      L("HYZE", "https://hyze.me/character/08df1db6-2671-4318-86fc-a8f4e73e8023"),
      L("鴨答鴨答", null, { status: "建立中" })],
    sum: "披著狼皮的羊，偽裝成獵人的頂級獵物。", intro: "#傲嬌純情奶狗 #虛張聲勢 #實戰經驗零 #易碎玻璃心 #反差萌 #嘴硬體正直" },
  { name: "卡希爾", full: "卡希爾（Cassiel）", code: "首席潔癖官", role: "天界靈魂審計部・首席審計官", age: "與星辰同壽／外觀 27", work: "ezhi", avatar: A+"cassiel.jpg",
    links: [L("HYZE", "https://hyze.me/character/08dec5c4-4922-4298-8c19-f205cc192c11")],
    sum: "天界極限社畜，優雅的瘋批潔癖官。", intro: "#雙面潔癖官 #神聖躁鬱症 #禁慾系暴徒 #人形消毒水 #反差萌" },
  // ── 狂獸
  { name: "洛倫．桑．吉爾伯特", work: "kuangshou", avatar: A+"lorenz.jpg", links: [], sum: "簡介待補。", intro: "" },
  { name: "雪塵", role: "S 級哨兵", work: "kuangshou", avatar: A+"xuechen.jpg",
    links: [L("WHIF", "https://www.whif.io/characters/153e0331-9221-4ff0-b811-d0d32b79d06d")],
    sum: "S 級哨兵，創傷與救贖的純愛——還不去摸摸他可愛的雪豹。", intro: "#ABO #哨嚮 #創傷 #救贖 #溫柔 #純愛 #S級哨兵 #Beta" },
  { name: "伊恩．卡特", full: "Ien Carter", code: "黑暗哨兵 XXALPHAXX", work: "kuangshou", avatar: A+"iancarter.jpg", links: [],
    sum: "ABO＋哨嚮世界觀中的『黑暗哨兵』。", intro: "" },
  // ── 阿茲特克之盾
  { name: "阿圖羅・伊格納西奧・德爾加多", full: "Arturo Ignacio Delgado", code: "棕熊／Oso Pardo", role: "自由傭兵／前「Aztec Shield」突擊手", age: "31｜210cm", work: "aztec", avatar: A+"arturo.jpg",
    links: [L("GPTs", "https://chatgpt.com/g/g-6864ea2f77e0819191b5ab62d6a2325b-a-tu-luo"), L("WHIF", "https://whif.io/characters/be216c73-7527-4ebd-9090-bea8ec3082a6"), L("Heartbeat")],
    sum: "前「阿茲特克之盾」重裝破門手，堅持不主動傷害非戰鬥員。",
    intro: "現從事護衛與救援工作。前線沉著果斷，私下安靜笨拙，被真誠稱讚時容易害羞。\n#沉默熊系 #害羞反差 #移動盾牌 #極端忠誠" },
  { name: "奧雷爾・德拉克羅瓦", full: "Aurèle Delacroix", code: "深紅／Crimson", role: "前軍官／戰略指導／防務顧問", age: "52（外貌約 28）", work: "aztec", avatar: A+"aurele.jpg",
    links: [L("Heartbeat")],
    sum: "冷靜耐性的前軍官與戰略指導，以數字、時限與備案說話。",
    intro: "擅長撤離、多國行動與資源調度，重視平民與隊伍生還，會在證據面前修正計畫。私下讀戰史、聽低音爵士。" },
  { name: "加布里埃爾・巴爾加斯", full: "Gabriel Vargas", code: "鐵鋸／Sierra", role: "精確射手", age: "32", work: "aztec", avatar: A+"gabriel.jpg",
    links: [L("Heartbeat")],
    sum: "嘴賤、散漫卻可靠的側翼精確射手。",
    intro: "任務時冷靜精準，私下以玩笑與喧鬧迴避沉重情緒。" },
  // ── 「聯」「動」
  { name: "林曜承", story: "沈家廢物(殺手)團", full: "林曜承（Алексей Vorontsov）", code: "白佛", role: "交際舞老師＋殺手副隊長", age: "33", work: "collab", avatar: A+"linyaocheng.jpg", collab: "與 璃花 聯名",
    links: [], sum: "「沈家廢物（殺手）團」副隊長，台俄混血的交際舞老師。",
    intro: "外貌：高挑、眼鏡斯文、小麥膚色、黑髮短梳、眼神銳利。\n#毒舌 #懶散 #記仇 #護食 #自戀" },
  { name: "宿弦", story: "星航失序", role: "星際救援系", work: "collab", avatar: A+"xianshi.jpg", collab: "弦蝕聯名（與月鈴、糰子、M9）",
    links: [L("Melting", "https://t.melting.chat/wgmvli0", { label: "弦蝕" })],
    sum: "沉默、自律，習慣先確認所有人的退路。「別替我決定。」", intro: "" },
  { name: "宿蝕", story: "星航失序", role: "腺體共振系", work: "collab", avatar: A+"xianshi.jpg", collab: "弦蝕聯名（與月鈴、糰子、M9）",
    links: [L("Melting", "https://t.melting.chat/wgmvli0", { label: "弦蝕" })],
    sum: "總帶著笑，卻很少讓人看見真正的界線。「你說我是誰，我就是誰。」", intro: "" },
  { name: "萊安德雷・德拉克魯瓦", full: "Léandre Delacroix", code: "拆信刀（Lame de Lettre）", role: "地下高端私宴主廚／「血色策展人」", age: "45（外觀約 38～40）", work: "collab", avatar: A+"leandre.jpg",
    collab: "與 悠狸 聯名（拾柒提供提示詞）", status: "準備中", links: [],
    sum: "「黑湯匙」的偏執美食家，優雅冷血的危險紳士。", intro: "#偏執美食家 #血色儀式感 #優雅冷血 #危險紳士 #完美主義" },
  { name: "彌賽亞", full: "彌賽亞・艾索菲爾‧卡斯提亞（Messiah Aesophiel Castia）", role: "聖光聯邦王都「聖輝塔」王室影侍醫師／晨曦行者", age: "外觀約 22", work: "collab", avatar: A+"messiah.jpg",
    links: [L("Gemini Gem", "https://gemini.google.com/gem/1zSD83TRrT_PwnyOeuHjby79N-TxGgrMR?usp=sharing")],
    sum: "「瑟雷恩大陸．聖光聯邦」的晨曦行者。", intro: "#晨曦行醫 #星骸低語 #金芒治癒 #靜水深流 #仁心鋒刃" },
  // ── 「多人」運動中心
  { name: "誰是吸「」怪", full: "絕命！吸「」王！", role: "多人：狼人殺式密室", work: "multisports", adult: true, avatar: A+"whosucks.jpg", group: true,
    links: [L("Caveduck", "https://caveduck.io/zh-hant/characters/9760ebee-ba01-4764-b454-70bc33e5b578"), L("WHIF", "https://www.whif.io/characters/7b810302-3dc6-4baf-accb-80cc4b730dae"),
      L("HeartBeat", "https://heartbeat-app.net/characters/a2999a78-4383-40a7-8d44-0851411ab190"), L("Melting", "https://t.melting.chat/9jcw9h")],
    sum: "狼人殺加上一點點奇妙色彩——逃不了的多人密室心理戰。", intro: "#現代 #懸疑 #成人向 #群像 #多人 #心理戰 #逃不了的密室逃脫" },
  { name: "ALOHA！絕對狩精協議", role: "多人：夏威夷除妖喜劇", work: "multisports", avatar: A+"aloha.jpg", group: true,
    links: [L("Caveduck", "https://zh-hant.cvdk.io/c/0-1ZNmS4Sr-zw6VO0XJP3g?rc=gZ2QckNAlD")],
    sum: "世界十大色鬼逃到夏威夷啦！逮個正著的除妖喜劇。", intro: "#多人 #助手 #調情 #當代奇幻 #喜劇 #狡猾 #鬼魂 #後宮 #逆後宮 #夏威夷 #物理超渡 #武運昌隆" },
  { name: "恐怖四天王", story: "萬聖島", role: "多人：萬聖節限定", work: "multisports", avatar: A+"horror4.jpg", group: true,
    links: [L("Caveduck", "https://zh-hant.cvdk.io/c/VnWBihISS3ywxs2e5VfnEg?rc=gZ2QckNAlD")],
    sum: "萬聖節深夜不睡覺，就會被強迫吃下「特製糖果」。十月限定。",
    intro: "自戀裸奔的地縛靈烏嗚、女巫裝黑魔法師崔克、病態吸血鬼派爾和兩米高狼人沃弗——萬聖節深夜不睡覺的你，會被他們強迫吃下「特製糖果」。十月限定。" },
  // ── 沉溺於向陽處
  { name: "沉溺於向陽處", role: "多人：大哥權道均・三弟權道鎮", work: "xiangyang", avatar: A+"xiangyang.jpg", group: true,
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/6312d616-e917-4ac3-9a88-7763e388c3ec", { label: "無法逃離的共生" }),
      L("MELTING", "https://t.melting.chat/ndxm83z"), L("HYZE", "https://hyze.me/character/08dee3c7-46cb-445b-88cc-29bde841ae1c"),
      L("Tingle", "https://tingle.chat/chat/characters/49623"), L("Whif", "https://whif.io/characters/27fa47cb-cb7b-426d-8407-e0d27e523609")],
    sum: "身為家中的老二，被兄弟雙倍溺愛——無法逃離的共生。",
    intro: "大哥｜權道均（28 歲・188cm）建築設計師，居家辦公。\n三弟｜權道鎮（20 歲・192cm）體育系大學生，籃球王牌。" },
  { name: "權道鎮", full: "Kwon Do-jin", role: "大學籃球隊王牌前鋒", age: "20｜192cm", work: "xiangyang", avatar: A+"quandaozhen.jpg",
    links: [L("Whif", "https://whif.io/characters/98394a3f-6c3c-4a5f-aa18-82497f809a2a", { label: "披著陽光外衣…" })],
    sum: "「哥，你身上……只能有我的味道。」", intro: "《沉溺於向陽處》的三弟。年下・陽光綠茶・BL。" },
  // ── 極樂
  { name: "沈甜", role: "雨宮電子牛郎店", work: "jile", avatar: A+"shentian.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/51fd8fa9-a8ed-4f68-9d4b-015902bb9168"), L("Melting", "https://t.melting.chat/qiqh4x")],
    sum: "雨宮電子牛郎店營業中——黑暗、病嬌的雙面 Dom。", intro: "#黑暗 #病嬌 #雙面 #Dom #戰損 #現代" },
  { name: "曜", role: "雨宮電子牛郎店", work: "jile", adult: true, avatar: A+"yao.jpg",
    links: [L("Melting", "https://t.melting.chat/6us0l5", { label: "獨家" })],
    sum: "雨宮電子牛郎店的絕對服從者，墮落美學。", intro: "#絕對服從 #墮落美學 #佔有欲 #台灣原創" },
  { name: "凌霜", role: "雨宮電子牛郎店", work: "jile", avatar: A+"lingshuang.jpg",
    links: [L("Melting", "https://t.melting.chat/t1kv3nr"), L("HeartBeat", "https://heartbeat-app.net/characters/f7eda545-56d1-45b6-a2c3-f486a55f8901")],
    sum: "禁慾系西裝暴徒——大漂亮其實人很好的。", intro: "#BL #HL #禁慾系 #西裝暴徒 #那個鈕扣很努力在工作" },
  // ── 校風不正
  { name: "J.C. 聖雨大學", role: "多人模擬（虛構首爾特區）", work: "xiaofeng", avatar: A+"shengyu.jpg", group: true,
    links: [L("WHIF", "https://www.whif.io/characters/564db8a3-ec2b-4b99-acbd-78e7fb93b8d2", { label: "聖雨" }),
      L("WHIF", "https://www.whif.io/characters/9cf206a1-02ea-45ec-9ae3-9591208f0073", { label: "姜鎮赫" }),
      L("WHIF", "https://www.whif.io/characters/84df8bcb-e24d-4c2e-91b2-a2067328cd3f", { label: "崔雪雅" }),
      L("WHIF", "https://www.whif.io/characters/fb23640a-63fe-4494-b3d6-18dce06bd48d", { label: "李彩英" }),
      L("WHIF", "https://whif.io/characters/b14d349d-7cfe-44e7-a42f-f9072e99dfbb", { label: "朴道賢" }),
      L("WHIF", "https://www.whif.io/characters/4290f30b-de98-4468-94f5-5643973ffb9e", { label: "李泰英" })],
    sum: "會長、副會長、校霸與學神——聖雨大學的多人模擬。", intro: "姜鎮赫（會長）、崔雪雅（副會長）、李彩英（校霸）、朴道賢（學神）、李泰英。" },
  { name: "《萊茵斯塔高等學院》", full: "Rheinstar Academy", role: "多人：奇幻校園養成", work: "xiaofeng", avatar: A+"rheinstar.jpg", group: true,
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/c2aae17c-f5b3-447a-8c67-0f44f5f17f1c")],
    sum: "萊茵斯塔、雨宮奇幻學院招生中——清水向的奇幻校園養成。", intro: "奇幻、校園、冒險、多人、養成、全性向。\n無色，清水向養成。" },
  { name: "迷惑不解的高中日常", role: "多人：楊桀・上官皓・高晨曦", work: "xiaofeng", avatar: null, group: true,
    links: [L("HYZE", "https://hyze.me/character/08deb9a1-9bbb-4709-8404-aa522020ee7d")],
    sum: "台灣頂尖公立高中的三位系草。", intro: "楊桀（資訊科系草）、上官皓（商經科系草）、高晨曦（建築科系草）。" },
  { name: "江梟", role: "不良生", age: "188cm", work: "xiaofeng", avatar: A+"jiangxiao.jpg",
    links: [L("Whif", "https://whif.io/characters/989f1557-7071-482f-af21-6093648a3b6a", { label: "獨佔" })],
    sum: "黑色獵鷹刺青、金色狼尾的不良生。", intro: "" },
  // ── 雲嶺娛樂
  { name: "TRI-G｜第四支柱", role: "雲嶺娛樂旗下偶像團體", work: "yunling", avatar: A+"trig.jpg", group: true,
    links: [L("IsekaiZero", "https://www.isekaizero.ai/storylines/6a72f1c1010c4d3dbbfbe334?utm_campaign=share&utm_medium=storyline&utm_content=tri-g-：第四道光柱"),
      L("鴨答鴨答", "https://caveduck.io/character-info/05f07811-c282-4528-a3d0-37309a1a0382")],
    sum: "「在絕對的秩序與極致的混亂之間，唯有星光是唯一的變數。」",
    intro: "ORDER · CHAOS · LIGHT。你是第十四任專屬經紀人。成員：席淵 Cieran（隊長・Rapper）、權時京 K（主唱・創作核心）、姜宥星 Aster……" },
  { name: "席淵", full: "席淵 Cieran", role: "TRI-G 隊長、主唱與門面", age: "26", work: "yunling", avatar: A+"xiyuan.jpg", links: [],
    sum: "被王牌製作人雪世允親自挖掘的禁慾系貴公子。", intro: "#完美主義 #斯文敗類 #潔癖 #控制狂" },
  { name: "雪世允", full: "雪世允 Jelly", role: "雲嶺娛樂音樂部門首席藝人／R&B 抒情歌手", age: "32（外觀約 28）", work: "yunling", avatar: A+"xueshiyun.jpg", links: [],
    sum: "毒舌暖男，首爾地下饒舌傳說 Jelly。", intro: "#節拍主宰 #甜味反差 #成熟穩重 #臨場王者 #自由靈魂" },
  { name: "紀允然", full: "紀允然 Ji Yun-Ran", role: "雲嶺娛樂簽約藝人／四大影展滿貫影帝", age: "34（外觀約 28～30）", work: "yunling", avatar: A+"jiyunran.jpg",
    links: [L("GPTS", "https://chatgpt.com/g/g-688781950d0881918aca9a2c7a0e72dd-ji-yun-ran")],
    sum: "絕美憂鬱、慢速燃燒的樹懶影帝。", intro: "#低頻共情 #溫柔靜潮 #瞬間白熾 #缺席幽靈" },
  // ── 神之檻
  { name: "神名浩一", story: "日本若頭", role: "神名組若頭（預定七代目）", age: "30", work: "kamigori", avatar: A+"koichi.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/31011ba9-e160-451f-8982-d0a6a6b8558a"),
      L("Melting", "https://t.melting.chat/qohvulc"), L("Tikita", "https://tikita.ai/story/SOKXQOCB")],
    sum: "神名家雙胞胎之一，妳那位無惡不作的親哥哥。",
    intro: "不是健康戀愛，而是逐步看見一名極端聰明的惡棍，如何把愛、恨、婚姻、義理與保護都變成控制。可以反抗、逃跑、談判，甚至反過來設局。\n#骨科 #冷酷 #黑道 #控制 #慢熱" },
  { name: "神名憐", work: "kamigori", avatar: A+"lian.jpg", links: [L("Heartbeat", "https://heartbeat-app.net/characters/ddc931ea-88ed-4569-be1f-6ede552ed8af")], sum: "神名家對外只有一位嫡男——那和他長著同一張臉的，是誰？", intro: "金髮遮眼、蝴蝶刀在指間翻轉的神名家雙子之一。他笑著叫你「小可憐」，也笑著替你處理掉每一個相親對象。當他撥開瀏海，那雙眼睛和你的一模一樣。\n#雙子 #狂犬 #禁忌 #骨科" },
  // ── 無法言喻
  { name: "阿爾曼德莊園", full: "Villa Armand", role: "多人：六名傭兵安保小隊", work: "wuyan", avatar: null, group: true,
    links: [],
    sum: "米蘭郊外的莊園，由門衛 Luca 引領。", intro: "" },
  // ── 職業傭兵
  { name: "盧卡．沃恩", full: "Luca Vohn", role: "私人傭兵／「阿爾曼德莊園」門衛兼安保", age: "28", work: "merc", avatar: A+"lucavohn.jpg",
    links: [],
    sum: "義大利 × 烏克蘭混血的私人傭兵，米蘭郊區莊園的門衛。", intro: "" },
  // ── 玖曜朝
  { name: "雲悼·刃羅", code: "骸樂監", role: "戶部「斷曜司」主事，暗裡統轄骸樂監", age: "39（視之若 30 初）", work: "jiuyao", avatar: A+"yundao.jpg", links: [],
    sum: "「血若不對稱，星宿便失調；而我，是替蒼天調音的人。」", intro: "#絕對對稱 #冷雅魅惑 #藝術至上 #鏡像幻術" },
  { name: "段塵念", code: "嶺魘王", role: "玄鐵山脈西界霸主・嶺魘王寨主", age: "27", work: "jiuyao", avatar: A+"duanchennian.jpg", links: [],
    sum: "玄鐵山巔的鬼胤之王，以恐懼為秩序。", intro: "#半靈孽裔 #玄鐵山魘 #血誓之王 #母影執念" },
  { name: "厲珣", code: "鎮南侯", role: "鎮守南溟海域，統領南溟鎮海軍與赤潮鐵騎", age: "31", work: "jiuyao", avatar: A+"lixun.jpg", links: [],
    sum: "張揚戲浪、絕對護短的海上惡龍。", intro: "#潮感天賜 #危險溫柔 #縱寵偏執 #敢愛敢戰" },
  { name: "荊衡・霽", code: "鎮夜侯", role: "玖曜朝鎮夜侯・玄衛大將軍", age: "27｜約 183cm", work: "jiuyao", avatar: A+"jinghengji.jpg",
    links: [L("GPTS", "https://chatgpt.com/g/g-68989ed3ef948191a4ae8f6808cd240c-jing-heng-ji")],
    sum: "晝夜雙相、冷肅克己，鎮守北嶺的將軍。", intro: "#夜半妖鋒 #責重如山 #危處存仁 #刀下憫生" },
  // ── 維斯塔利亞
  { name: "里奧提斯・圖雷恩", full: "Leotis Thulain", role: "艾蘭迪亞王國二王子／王室財政暨外交特使", age: "32（外觀約 28）", work: "vestalia", avatar: A+"leotis.jpg", links: [],
    sum: "身負忘名詛咒，只記得一人名字的二王子。", intro: "#緋影獵豹 #優雅陰影 #暗金操盤 #香氛記憶 #刀鋒辯手" },
  { name: "塞沃南・烏托爾", full: "Sevonan Utor", role: "南境烈陽之境公爵／熾焰軍團最高統帥", age: "35", work: "vestalia", avatar: A+"sevonan.jpg", links: [],
    sum: "冷峻寡言的烈陽戰神，沙漠獨狼。", intro: "#三字口令 #焦土領主 #征服即秩序 #和平偏執" },
  { name: "亞瑟羅斯・圖雷恩", full: "Aseroth Thulain", role: "艾蘭迪亞王國現任國王", age: "35（外觀約 30～32）", work: "vestalia", avatar: A+"arthros.jpg", links: [],
    sum: "記性極差、只記得一人名字的痞氣獅王。", intro: "#白爛深情 #專寵只你 #懶惰聖上 #甜膩騷話" },
  // ── 古風
  { name: "顧雲熠", story: "江南少將軍", role: "江南顧氏嫡子／科舉狀元／少將軍", age: "28｜185cm", work: "gufeng", avatar: A+"guyunyi.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/1ea0c1d9-72e3-4ef0-8f49-eceaef6e882c")],
    sum: "帶著戰功重返煙雨江南，心儀多年的妳卻已成了父親名義上的續絃。",
    intro: "黑髮長身、文人氣質濃厚，能提筆論策，也能披甲上陣。白日沉穩守禮，夜裡喜歡在庭中飲酒閒談。\n#江南儒將 #少將軍 #暗戀 #禁忌戀 #隱忍 #熠光不渡卿" },
  { name: "《殿下》", role: "暗黑古風宮廷奇幻", work: "gufeng", avatar: A+"dianxia.jpg", group: true,
    links: [L("鴨答", "https://zh-hant.cvdk.io/c/UftFfRGwQdGylKhJOpLGYA?rc=gZ2QckNAlD", { label: "多人模擬" }),
      L("Whif", "https://whif.io/universes/8beaa1de-10fd-45e3-8ca7-dd6c9cc23686", { label: "李琋單人線" })],
    sum: "永夜「桓國」的金瞳暴君李琋，與他唯一的解藥——失憶的「比翼者」。",
    intro: "李琋深陷神樹與輪迴的詛咒，靈魂瀕臨崩壞。一場交織宿命與權力的殘酷救贖。男女性皆可遊玩。" },
  { name: "柳宛兒", story: "縞素春深", role: "沒落絲綢皇商蘇家主母（新寡後母）", work: "gufeng", avatar: A+"liuwaner.jpg",
    links: [L("Hyze", "https://hyze.me/character/08ded8b0-20ba-498c-8e7f-48699bf6f60b"),
      L("灰骨", "https://ashbone.app/c/%E6%9F%B3%E5%AE%9B%E5%85%92-8dd399b2-8036-4808-8be4-f9c8c2f092d3?ref=0DEBEDF3")],
    sum: "出身江南落魄書香門第的新寡後母——你名義上的母親。",
    intro: "溫婉善良、刺繡琴藝精通，卻一進廚房就濃煙滾滾。煙雨江南裡，她把全部溫柔給了你，也把一份不敢說出口的依戀，藏在一碗燒焦的長壽麵裡。" },
  // ── 赤瞳領主的血祭審判
  { name: "澤菲爾", work: "crimson", avatar: null, links: [L("灰骨")], sum: "《赤瞳領主的血祭審判》登場角色。", intro: "" },
  { name: "萊桑德", work: "crimson", avatar: null, links: [L("灰骨")], sum: "《赤瞳領主的血祭審判》登場角色。", intro: "" },
  // ── 霧潮
  { name: "卡濯·赫瓦納斯", full: "Kazhuo H'varnas", role: "霧潮基地・戰鬥一隊隊長（虎鯨獸人）", age: "28｜198cm", work: "wuchao", avatar: A+"kazhuo.jpg",
    links: [],
    sum: "虎鯨獸人隊長；你是霧潮基地少數的人類，負責被他欺負。", intro: "" },
  // ── 動漫人物
  { name: "七海建人", role: "《咒術迴戰》同人", work: "anime", adult: true, avatar: A+"nanami.jpg", links: [],
    sum: "《咒術迴戰》同人角色。", intro: "" },
  // ── 其他作品
  { name: "特勤一隊 HBFD-SO", work: "others", adult: true, avatar: null, links: [L("灰骨")], sum: "灰骨 Ashbone 成人向角色。", intro: "" },
];

/* 作品：Discord 論壇頻道＋既有作品。world 為作品頁頂端介紹，僅整理自來源。 */
const WORKS = [
  { id: "yongzhou", title: "永晝會", emoji: "🐈‍⬛", cover: A+"qinshiyu.jpg", tags: "組織群像",
    hook: "帝蛇統御的組織，微笑與話術之下藏著殺意。",
    world: "以家主秦時雨（帝蛇）為決策中樞的組織。副當家秦夜燼（冥蛇）為其暗影，繼承人秦揚統籌核心任務；左、右副手派系分掌實戰、肅清、情報與清算。外傳《獸籠玫瑰》為歐風詛咒童話。" },
  { id: "vespers", title: "晚禱之家", emoji: "✝️", cover: "assets/works/vespers.webp", coverPos: "center", tags: "組織群像",
    hook: "指揮家與影武者，只在你面前放下鋒芒。",
    world: "前任會長瓦倫提諾（指揮家）與現任會長 Roi（影武者）領導的組織。左、右副手伊利亞（斷尾犬）與米卡耶爾（夜鴞）分別負責外部危機處理與情報滲透。" },
  { id: "yeshou", title: "野性集結", cover: A+"wildmansion.jpg", tags: "", hook: "", world: "" },
  { id: "baihu", title: "白虎部隊：404", cover: "assets/works/whitetiger404.webp", coverPos: "center", tags: "", hook: "", world: "" },
  { id: "iloveu", title: "I💗U", cover: "assets/works/iloveu.webp", coverPos: "center", tags: "BG・病態依戀",
    hook: "病態的愛，也是唯一的救贖。", world: "" },
  { id: "shenhai", title: "深海戰艦", cover: A+"leviathan.jpg", tags: "", hook: "", world: "" },
  { id: "evilspouse", title: "成為惡人的合法配偶", cover: "assets/covers/evilspouse.jpg", tags: "現代・黑道・犯罪",
    hook: "黑道、斯文敗類與重案組的狂犬。",
    world: "現代都市裡的三位「惡人」：佔有慾極強的黑道權泰錫、以心理博弈操弄人心的權在京，以及雨宮警局重案組的狂犬褚赫。" },
  { id: "rehuo", title: "惹禍上身！", cover: "assets/covers/rehuo.jpg", tags: "現代・豪門・歡喜冤家",
    hook: "牛郎、布丁劫匪、冰山直男與純情猛犬。",
    world: "現代豪門的歡喜冤家喜劇：黎熾、黎赫、顧柏谷與顧俇俇，一連串破鏡重圓與甜寵的意外。" },
  { id: "diling", title: "地靈人傑", emoji: "🗡️", cover: A+"luoyun.jpg", tags: "現代・各國男人",
    hook: "財閥、若頭、宗主、醫生、消防員——現代都市的男人們。",
    world: "「地靈人傑系列」：以現代為舞台，來自韓國、日本、洛杉磯、義大利、台灣、越南、英倫等地的角色。" },
  { id: "ezhi", title: "聖光與業火（惡職者）", emoji: "🃏", cover: null, tags: "魔界・天界",
    hook: "魔界的色慾皇子，與天界的首席潔癖官。", world: "" },
  { id: "kuangshou", title: "狂獸", emoji: "👿", cover: null, tags: "ABO・哨嚮",
    hook: "ABO＋哨嚮的世界觀。", world: "" },
  { id: "aztec", title: "阿茲特克之盾", cover: A+"aurele.jpg", tags: "現代・群像・軍事傭兵・強強・慢熱關係",
    hook: "硝煙與心跳的防線。",
    world: "以現代軍事衝突區為背景。前「阿茲特克之盾」三位核心成員因最高級別私人保護契約再次並肩：奧雷爾統籌戰略與資源、阿圖羅負責近距離防線與救援、加布里埃爾維持側翼觀測與精確火力。玩家可自由決定自己的身分與目的。\n多人角色卡｜現代・群像・軍事傭兵・強強・慢熱關係" },
  { id: "collab", title: "「聯」「動」", emoji: "💠", cover: null, tags: "聯名企劃",
    hook: "與其他創作者聯名的角色。", world: "與其他創作者的聯名角色。《星航失序》弦蝕聯名另見其作品頁。" },
  { id: "multisports", title: "「多人」運動中心", cover: "assets/covers/multisports.jpg", tags: "多人・喜劇・懸疑",
    hook: "狼人殺式密室，與夏威夷的除妖喜劇。",
    world: "多人角色卡合集：狼人殺式的密室心理戰《誰是吸「」怪》，以及在夏威夷追捕色鬼的奇幻喜劇《ALOHA！絕對狩精協議》。" },
  { id: "touch1000", title: "1000次觸碰", cover: "assets/covers/touch1000.jpg", tags: "獸人・異世界",
    hook: "掉進貓咪世界，巨貓們不肯放你走。",
    world: "掉進貓咪世界的異世界獸人故事，與巨貓們的多角關係。" },
  { id: "xiangyang", title: "沉溺於向陽處", cover: A+"xiangyang.jpg", tags: "", hook: "", world: "" },
  { id: "jile", title: "極樂", cover: "assets/covers/jile.jpg", tags: "現代・牛郎店",
    hook: "雨宮電子牛郎店營業中。",
    world: "「雨宮電子牛郎店」營業中：沈甜、曜與凌霜。" },
  { id: "xiaofeng", title: "校風不正", emoji: "🎓", cover: null, tags: "校園",
    hook: "台灣高中的系草們與不良生。", world: "" },
  { id: "yunling", title: "雲嶺娛樂", emoji: "🎭", cover: null, tags: "演藝圈・偶像",
    hook: "TRI-G 第四支柱，與雲嶺娛樂的藝人們。",
    world: "雲嶺娛樂：旗下偶像團體 TRI-G（Trinity Gravity）、首席 R&B 歌手雪世允、滿貫影帝紀允然。" },
  { id: "kamigori", title: "神之檻", cover: "assets/works/kamigori.webp", coverPos: "center", tags: "暗黑和風・手足戀愛",
    hook: "神名家的雙胞胎，與一段暗黑和風的手足之戀。",
    world: "暗黑和風的手足戀愛故事，圍繞神名家，以及雙胞胎神名浩一與神名憐展開。" },
  { id: "wuyan", title: "無法言喻", emoji: "👻", cover: A+"wildmansion.jpg", tags: "多人模擬・現代",
    hook: "共生的兄弟、深海監獄與獸人公館。",
    world: "難以歸類的故事集：多人模擬與單人角色並陳。" },
  { id: "merc", title: "職業傭兵", emoji: "🪖", cover: null, tags: "現代・軍人・傭兵",
    hook: "飛官、海軍、特種兵與莊園的私人傭兵。", world: "" },
  { id: "jiuyao", title: "玖曜朝", emoji: "☀️", cover: null, tags: "古風・朝堂",
    hook: "鎮夜侯、鎮南侯、嶺魘王與骸樂監。", world: "" },
  { id: "vestalia", title: "維斯塔利亞", emoji: "🏰", cover: null, tags: "西幻・王國",
    hook: "艾蘭迪亞王國的國王與二王子，以及南境烈陽的公爵。", world: "" },
  { id: "gufeng", title: "古風", emoji: "🪽", cover: null, tags: "古風",
    hook: "煙雨江南的少將軍，與永夜桓國的金瞳暴君。", world: "" },
  { id: "starward", title: "星航失序", fullTitle: "《星航失序：思薩爾星圖》", cover: null, tags: "科幻・EABO・校園・聯名",
    hook: "同一張臉。兩個名字。",
    world: "以星際為舞台的科幻校園故事，採用 EABO 設定。宿弦 ╳ 宿蝕：同一張臉、兩個名字，以及誰都無法取代的存在位置。一場跨院聯合模擬，讓你成為兄弟關係裡從未預料過的變數。〔戀愛〕〔友情〕〔調查〕〔共犯〕\n弦蝕聯名角色（與月鈴、糰子、M9）。" },
  { id: "crimson", title: "赤瞳領主的血祭審判", cover: null, tags: "溫馨喜劇・吸血鬼",
    hook: "溫馨喜劇基調的吸血鬼故事。", world: "溫馨喜劇基調的吸血鬼故事。" },
  { id: "wuchao", title: "霧潮", emoji: "🌊", cover: null, tags: "獸人・基地",
    hook: "獸人基地裡，少數的人類。", world: "" },
  { id: "anime", title: "動漫人物", emoji: "❤️‍🔥", cover: null, tags: "同人",
    hook: "動漫角色的同人角色卡。", world: "" },
  { id: "others", title: "其他作品", cover: null, tags: "單篇角色",
    hook: "尚未歸類的單篇角色。", world: "" },
];

/* 平台篩選：由角色 links 推導 */
const PLATFORM_IDS = { "Heartbeat": "heartbeat", "灰骨": "ashbone", "Caveduck": "caveduck", "Storyaichat": "storyaichat", "Melting": "melting",
  "Plaitoon": "plaitoon", "IsekaiZero": "isekaizero", "WHIF": "whif", "Hyze": "hyze", "Tikita": "tikita", "Touchie": "touchie", "MiraiMind": "miraimind",
  "Floze": "floze", "DokiChat": "dokichat", "Paradise": "paradise", "Tingle": "tingle", "GPTs": "gpts", "Gemini Gem": "gemini",
  "卿卿我我": "qingqing", "CRUSH": "crush", "Discord": "discord", "未標註": "none" };
const PLAT_LABEL = { "灰骨": "灰骨 Ashbone", "Caveduck": "Caveduck（鴨答鴨答）", "卿卿我我": "卿卿我我（7755）" };
const PRIMARY = ["Heartbeat", "灰骨", "Caveduck", "Storyaichat", "Melting", "Plaitoon"];
const platsOf = c => c.links.length ? [...new Set(c.links.map(l => l.platform))] : ["未標註"];
const PLATFORM_FILTERS = (() => {
  const count = {};
  CHARACTERS.forEach(c => platsOf(c).forEach(p => count[p] = (count[p] || 0) + 1));
  const keys = Object.keys(count);
  PRIMARY.forEach(p => { if (!(p in count)) { count[p] = 0; keys.push(p); } });
  const rank = p => p === "未標註" ? 999 : (PRIMARY.includes(p) ? PRIMARY.indexOf(p) : 100 - count[p] / 100);
  return keys.sort((a, b) => rank(a) - rank(b) || count[b] - count[a])
    .map(k => ({ id: PLATFORM_IDS[k] || encodeURIComponent(k), key: k, label: k === "灰骨" ? "灰骨" : k === "卿卿我我" ? "卿卿我我（7755）" : k === "未標註" ? "準備中" : k, count: count[k] }));
})();

/* ---------- helpers ---------- */
/* ── 最新上架（作品與世界觀頂端的輪播）──
   新角色上架時手動更新：把角色的 name（與 CHARACTERS 中的 name 完全相同）加到最前面，最多顯示 3 位。
   找不到或屬於隱藏作品的名字會自動略過；清空陣列即隱藏整個輪播。 */
const NEWEST = ["神名憐", "達拉斯", "赫拉分"];

const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const charsOfWork = w => CHARACTERS.filter(c => c.work === w.id);
const workOf = c => WORKS.find(w => w.id === c.work);
/* 沒有角色的作品（例如角色已併入其他作品）不顯示於作品與世界觀；資料保留 */
const SHOWN_WORKS = WORKS.filter(w => charsOfWork(w).length);
const workTitle = w => w.fullTitle || (w.id === "others" ? w.title : `《${w.title}》`);

const PAUSED = new Set(["GPTs", "Gemini Gem"]);
/* ---------- platforms section ---------- */
/* 平台圖示（取自 lit.link 頁面的紫色平台圖） */
const PICON_DIR = "assets/platforms/";
const PICONS = { "灰骨": "ashbone", "灰骨 Ashbone": "ashbone", "Heartbeat": "heartbeat", "Caveduck": "caveduck", "Storyaichat": "storyaichat",
  "Melting": "melting", "Plaitoon": "plaitoon", "IsekaiZero": "isekaizero", "Hyze": "hyze", "Tikita": "tikita", "WHIF": "whif",
  "Tingle": "tingle", "CRUSH": "crush", "FuWa": "fuwa", "Floze": "floze", "卿卿我我": "loveydovey", "LoveyDovey": "loveydovey" };
const piconOf = k => PICONS[k] && !PAUSED.has(k) ? PICON_DIR + PICONS[k] + ".png" : "";
const inviteHTML = p => p.invite ? `<div class="invite"><span class="ilabel">邀請碼</span><code class="notranslate" translate="no">${esc(p.invite)}</code>
  <button type="button" class="copy" data-copy="${esc(p.invite)}" aria-label="複製 ${esc(p.title || p.name)} 邀請碼">複製</button></div>` : "";
const sponsorHTML = p => p.sponsor ? `<div class="invite sponsor"><span class="ilabel">贊助碼</span><code class="notranslate" translate="no">${esc(p.sponsor)}</code>
  <button type="button" class="copy" data-copy="${esc(p.sponsor)}" aria-label="複製 ${esc(p.title || p.name)} 贊助碼">複製</button></div>` : "";
const pcardHTML = p => { const ic = piconOf(p.name); return `<div class="pcard reveal${p.url ? "" : " pending"}${ic ? " has-icon" : ""}${p.invite ? "" : " no-code"}">
  ${p.url ? `<a class="pstretch" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="前往 ${esc(p.title || p.name)}${p.sub ? "（" + esc(p.sub) + "）" : ""}"></a>` : ""}
  <div class="phead"><span class="ptitle"><span class="pname notranslate" translate="no">${esc(p.title || p.name)}</span>${p.sub ? `<span class="psub notranslate" translate="no">${esc(p.sub)}</span>` : ""}</span>${ic ? `<span class="pico" aria-hidden="true"><img src="${ic}" alt="" width="160" height="160" loading="lazy" decoding="async"></span>` : ""}</div>
  ${inviteHTML(p)}${sponsorHTML(p)}
  <span class="plink">${p.url ? "Visit →" : "連結待補"}</span></div>`; };
const PBYNAME = Object.fromEntries(PLATFORMS.map(p => [p.name, p]));
const PGROUPED = new Set(PLATFORM_GROUPS.flatMap(g => g.names));
const PLATFORM_EXTRA = PLATFORMS.filter(p => p.name !== PLATFORM_HUB && !PGROUPED.has(p.name));   /* 未分組者（理論上無）附於最後一組 */
$("#platformGrid").innerHTML =
  (PBYNAME[PLATFORM_HUB] ? `<div class="platform-grid pgroup-hub">${pcardHTML(PBYNAME[PLATFORM_HUB])}</div>` : "") +
  PLATFORM_GROUPS.map((g, gi) => {
    const list = g.names.map(n => PBYNAME[n]).filter(Boolean).concat(gi === PLATFORM_GROUPS.length - 1 ? PLATFORM_EXTRA : []);
    return `<section class="pgroup" id="pgroup-${g.id}" aria-labelledby="pgh-${g.id}">
  <h3 class="pgroup-head" id="pgh-${g.id}"><span class="pg-eyebrow notranslate" translate="no">${esc(g.eyebrow)}</span><span class="pg-label">${esc(g.label)}</span><span class="pg-count">${list.length}</span></h3>
  <div class="platform-grid">${list.map(pcardHTML).join("")}</div></section>`;
  }).join("");
/* 邀請碼：角色卡上的連結後方顯示該平台的邀請碼（唯一來源：PLATFORMS 的 invite，與進駐平台卡片相同） */
function inviteOfPlatform(k) {
  const p = PLATFORMS.find(x => x.name === k) || PLATFORMS.find(x => normPlatform(x.name) === k || x.name.split(" ")[0] === k);
  return p && p.invite && p.url ? p.invite : "";
}
/* 複製按鈕（進駐平台卡片與角色卡共用） */
document.addEventListener("click", async e => {
  const btn = e.target.closest && e.target.closest(".copy[data-copy]"); if (!btn) return;
  e.preventDefault(); e.stopPropagation();
  const text = btn.dataset.copy;
  try { await navigator.clipboard.writeText(text); }
  catch { const t = document.createElement("textarea"); t.value = text; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); }
  btn.textContent = "已複製"; btn.classList.add("done");
  setTimeout(() => { btn.textContent = "複製"; btn.classList.remove("done"); }, 1600);
});

/* ---------- character card ---------- */
function avatarHTML(c) {
  if (c.avatar) return `<img class="avatar" src="${esc(c.avatar)}" alt="${esc(c.name)} 頭像">`;
  return `<div class="avatar ph" aria-hidden="true">${esc([...c.name][0])}</div>`;
}
const plabel = p => PLAT_LABEL[p] || p;
/* GPTs、Gemini Gem 連結目前失效：保留資料，按鈕標示「暫停」且不可點擊 */
function linksHTML(c) {
  /* 無平台連結（或資料標示 linkStatus）→ 顯示不可點擊的「準備中」 */
  if (!c.links.length || c.linkStatus) {
    const st = c.linkStatus || "準備中";
    return `<div class="lrow"><span class="lbtn off paused prep" aria-disabled="true" title="平台連結${esc(st)}"><span class="lname">${esc(st)}</span></span></div>`;
  }
  const pname = p => p === "Caveduck" ? "Caveduck" : plabel(p);
  const withCode = (l, btn) => { const code = inviteOfPlatform(l.platform); if (!code) return btn;
    return `<span class="lpair">${btn}<span class="lcode notranslate" translate="no"><code title="${esc(plabel(l.platform))} 邀請碼">${esc(code)}</code><button type="button" class="copy lcopy" data-copy="${esc(code)}" aria-label="複製 ${esc(plabel(l.platform))} 邀請碼">複製</button></span></span>`; };
  return `<div class="lrow">${c.links.map(l => PAUSED.has(l.platform)
    ? `<span class="lbtn off paused" aria-disabled="true" title="${esc(plabel(l.platform))}${l.label ? "・" + esc(l.label) : ""}（連結暫停）"><span class="lname"><span class="notranslate" translate="no">${esc(pname(l.platform))}</span>${l.label ? `<em>${esc(l.label)}</em>` : ""}</span>${l.status && l.status !== "暫停" ? `<span class="lstatus">${esc(l.status)}</span>` : ""}<span class="lstatus">暫停</span></span>`
    : l.url
    ? withCode(l, `<a class="lbtn" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer" title="${esc(plabel(l.platform))}${l.label ? "・" + esc(l.label) : ""}"><span class="lname"><span class="notranslate" translate="no">${esc(pname(l.platform))}</span>${l.label ? `<em>${esc(l.label)}</em>` : ""}</span>${l.status ? `<span class="lstatus">${esc(l.status)}</span>` : ""}<span class="larrow">↗</span></a>`)
    : `<span class="lbtn off" aria-disabled="true" title="尚無連結"><span class="notranslate" translate="no">${esc(pname(l.platform))}</span></span>`).join("")}</div>`;
}
function cardHTML(c, showWork) {
  const tags = (!c.links.length || c.linkStatus) ? `<span class="tag prep" title="平台連結準備中">${esc(c.linkStatus || "準備中")}</span>` : platsOf(c).map(p => {
    const retired = c.links.some(l => l.platform === p && l.status === "已退");
    return `<span class="tag notranslate${retired ? " retired" : ""}" translate="no">${esc(plabel(p))}</span>`;
  }).join("");
  const meta = [["全名", c.full], ["代號", c.code], ["身分", c.role], ["年齡", c.age], ["聯名", c.collab]]
    .filter(([, v]) => v).map(([k, v]) => `<dt>${k}</dt><dd${k === "全名" ? ' class="notranslate" translate="no"' : ""}>${esc(v)}</dd>`).join("");
  const w = workOf(c);
  return `<article class="ccard reveal" tabindex="0" role="button" aria-expanded="false" data-name="${esc(c.name)}">
    <div class="ctop">${avatarHTML(c)}
      <div>${c.story ? `<div class="cstory notranslate" translate="no">「${esc(c.story)}」</div>` : ""}<div class="cname"><span class="notranslate" translate="no">${esc(c.name)}</span>${c.status ? `<span class="badge-st">${esc(c.status)}</span>` : ""}${c.group ? '<span class="badge-st">多人</span>' : ""}</div>
      ${c.code ? `<div class="ccode">${esc(c.code)}</div>` : ""}
      ${showWork && w ? `<a class="cwork" href="#work/${w.id}${showWork === true ? "" : "?from=" + encodeURIComponent(showWork)}" data-work="${w.id}" translate="no">${esc(workTitle(w))}</a>` : (c.role ? `<div class="cwork">${esc(c.role)}</div>` : "")}</div></div>
    <div class="cbody"><p class="csum">${esc(c.sum)}</p><div class="tags">${tags}</div></div>
    <div class="cmore"><div class="cmore-inner">${meta ? `<dl class="cmeta">${meta}</dl>` : ""}<p class="cintro">${esc(c.intro || "詳細介紹待補。")}</p>
      <p class="lhead">遊玩平台</p>${linksHTML(c)}</div></div>
    <div class="chint">More</div>
  </article>`;
}
/* 星圖座標（裝飾用，依作品 id 固定產生） */
const hashOf = str => [...str].reduce((a, ch) => (a * 31 + ch.codePointAt(0)) >>> 0, 7);
function coordOf(w) {
  const h = hashOf(w.id);
  const ra = `${String(h % 24).padStart(2, "0")}h ${String((h >> 5) % 60).padStart(2, "0")}m`;
  const d = ((h >> 11) % 90) * ((h >> 17) & 1 ? 1 : -1);
  return `RA ${ra} · DEC ${d >= 0 ? "+" : "−"}${String(Math.abs(d)).padStart(2, "0")}°`;
}
function coverHTML(w) {
  if (w.cover) return `<img src="${esc(w.cover)}" alt=""${w.coverPos ? ` style="object-position:${esc(w.coverPos)}"` : ""}><span class="reticle" aria-hidden="true"></span>`;
  const h = hashOf(w.id), hue = 255 + (h % 50), tilt = (h % 40) - 20, size = 34 + (h % 14);
  return `<div class="cover-planet" style="--hue:${hue};--tilt:${tilt}deg;--size:${size}%" aria-hidden="true">
    <span class="planet"></span><span class="orbit"><span class="moon"></span></span>
    <img class="emblem" src="assets/monogram.svg" alt=""></div>`;
}

/* ---------- views ---------- */
const view = $("#charView"), pf = $("#platformFilter");
pf.innerHTML = `<a href="#characters" data-p="">全部<span>${CHARACTERS.length}</span></a>` + PLATFORM_FILTERS.map(p =>
  `<a href="#platform/${p.id}" data-p="${p.id}">${piconOf(p.key) ? `<img class="fico" src="${piconOf(p.key)}" alt="" width="18" height="18" loading="lazy">` : ""}${p.key === "未標註" ? esc(p.label) : `<span class="notranslate" translate="no">${esc(p.label)}</span>`}<span>${p.count}</span></a>`).join("");

/* 作品與世界觀：每張卡片＝封面＋標題＋導語／世界觀摘要，點擊進入作品頁。
   預留每個世界的宣傳影片：WORKS 項目加上 video（靜音循環，mp4/webm 路徑）即會疊在封面上；目前皆未設定。 */
const clip = (t, n) => { t = String(t || ""); return t.length > n ? t.slice(0, n).replace(/[，、。；：\s]+$/, "") + "…" : t; };
const promoHTML = w => w.video ? `<video class="wkvideo" src="${esc(w.video)}" muted loop autoplay playsinline preload="none" aria-hidden="true"${w.cover ? ` poster="${esc(w.cover)}"` : ""}></video>` : "";
function worksGridHTML() {
  return `<div class="work-grid">${SHOWN_WORKS.map((w, i) => {
    const n = charsOfWork(w).length, blurb = w.world && w.world !== w.hook ? clip(w.world, 70) : "";
    return `<a class="wkcard reveal" href="#work/${w.id}?from=world" data-work="${w.id}">
      <div class="wkcover${w.video ? " has-video" : ""}">${coverHTML(w)}${promoHTML(w)}<span class="wkcoord">${coordOf(w)}</span><span class="wksector">SECTOR ${String(i + 1).padStart(2, "0")}</span></div>
      <div class="wkbody"><p class="wktags">${esc(w.tags)}</p><h3 translate="no" class="notranslate">${esc(workTitle(w))}</h3>
      ${w.hook ? `<p class="wkhook">${esc(w.hook)}</p>` : ""}${blurb ? `<p class="wkworld">${esc(blurb)}</p>` : ""}
      <p class="wkcount"><span>${n}</span> 位角色 <em>→</em></p></div></a>`;
  }).join("")}</div>`;
}
/* 角色列表「全部」：依作品分組列出所有角色 */
function viewAll() {
  return `<div class="all-chars">${SHOWN_WORKS.map(w => `<section class="wgroup">
    <h3 class="wgroup-head"><a href="#work/${w.id}?from=sec:characters" data-work="${w.id}" class="notranslate" translate="no">${esc(workTitle(w))}</a><span class="pg-count">${charsOfWork(w).length}</span></h3>
    <div class="char-grid">${charsOfWork(w).map(c => cardHTML(c, false)).join("")}</div></section>`).join("")}</div>`;
}
/* 返回連結：依來源（作品與世界觀／角色列表／平台篩選）決定 */
const SECTION_LABEL = { about: "作者資訊", platforms: "進駐平台", characters: "角色列表", worlds: "作品與世界觀", top: "首頁" };
function backOf(from) {
  if (!from || from === "world" || from === "works") return { href: "#worlds", label: "← 返回作品與世界觀" };
  if (from && from.startsWith("sec:") && SECTION_LABEL[from.slice(4)]) {
    const k = from.slice(4); return { href: k === "top" ? "#top" : "#" + k, label: `← 返回${SECTION_LABEL[k]}` };
  }
  if (from && from.startsWith("platform:")) {
    const p = PLATFORM_FILTERS.find(x => x.id === from.slice(9));
    if (p) return { href: `#platform/${p.id}`, label: `← 返回 ${plabel(p.key)} 角色列表` };
  }
  return { href: "#worlds", label: "← 返回作品與世界觀" };
}
function viewWork(w, from) {
  const list = charsOfWork(w), back = backOf(from);
  const platSet = [...new Set(list.flatMap(platsOf))].filter(p => p !== "未標註").map(plabel).join("・");
  return `<div class="panel-view">
    <a class="back" href="${back.href}" data-back="1">${esc(back.label)}</a>
    <header class="work-hero">
      <div class="work-hero-cover">${coverHTML(w)}</div>
      <div><p class="eyebrow">World · ${coordOf(w)}</p><h3 class="work-title notranslate" translate="no">${esc(workTitle(w))}</h3>
      <p class="wktags">${esc(w.tags)}</p>
      ${w.world ? `<p class="work-world">${esc(w.world)}</p>` : `<p class="work-world">${esc(w.hook)}</p>`}
      <p class="work-meta">${list.length} 位角色${platSet ? `｜<span class="notranslate" translate="no">${esc(platSet)}</span>` : ""}</p></div>
    </header>
    <div class="char-grid">${list.map(c => cardHTML(c, false)).join("")}</div>
  </div>`;
}
function viewPlatform(p) {
  const list = CHARACTERS.filter(c => platsOf(c).includes(p.key));
  return `<div class="panel-view">
    <a class="back" href="#characters" data-back="1">← 返回角色列表</a>
    <header class="plat-head"><p class="eyebrow">Platform</p><h3 class="work-title notranslate" translate="no">${esc(plabel(p.key))}</h3>
    <p class="work-meta">${list.length} 位角色</p></header>
    <div class="char-grid">${list.length ? list.map(c => cardHTML(c, "platform:" + p.id)).join("")
      : `<p class="empty">目前沒有標註於此平台的角色。</p>`}</div>
  </div>`;
}

/* ---------- hash routing ----------
   作品頁 hash 帶來源：#work/<id>?from=world|sec:<區塊>|platform:<id>（舊的 from=works 視同 world）；返回時捲回原本點擊的卡片 */
const parseHash = (hash = location.hash) => {
  const raw = decodeURIComponent(hash.replace(/^#/, ""));
  const [path, q = ""] = raw.split("?");
  const sp = new URLSearchParams(q), from = sp.get("from") || "", char = sp.get("c") || "";
  const [kind, id] = path.split("/");
  return { path, kind, id, from, char };
};
/* 來源位置的正規化 key：worlds／characters／platform/<id>／其他區塊 */
/* 舊的「作品列表」錨點（#works、#work、#work/all、無效作品）一律導向 #worlds */
const OLD_WORKS = new Set(["works", "work", "work/all", "作品列表", "作品"]);
const originKey = hash => {
  const { path, kind } = parseHash(hash);
  if (path === "worlds" || OLD_WORKS.has(path) || (kind === "work" && !WORKS.find(w => w.id === parseHash(hash).id))) return "worlds";
  if (!path || path === "characters") return "characters";
  return path;
};
const fromKey = from => from && from.startsWith("platform:") ? "platform/" + from.slice(9)
  : from && from.startsWith("sec:") && SECTION_LABEL[from.slice(4)] ? from.slice(4) : "worlds";
let lastHash = location.hash, prevOfDetail = null;
function route(scroll) {
  { const h = parseHash();
    if (OLD_WORKS.has(h.path) || (h.kind === "work" && !WORKS.find(w => w.id === h.id))) history.replaceState(null, "", "#worlds"); }
  const { kind, id, from } = parseHash();
  let html, active = "";
  const work = kind === "work" && WORKS.find(w => w.id === id);
  if (work) { active = null; html = viewWork(work, from); }
  else if (kind === "platform" && PLATFORM_FILTERS.find(p => p.id === id)) { active = id; html = viewPlatform(PLATFORM_FILTERS.find(p => p.id === id)); }
  else if (!view.querySelector(".all-chars")) html = viewAll();   /* 離開詳細頁（或首次載入）時回到角色列表（全部） */
  if (html !== undefined) {
    view.innerHTML = html;
    pf.querySelectorAll("a").forEach(a => a.classList.toggle("on", a.dataset.p === active));
    observe(view.querySelectorAll(".reveal"));
  }
  const { char } = parseHash();
  if (work && char) {   /* 由「最新上架」開啟：展開並捲到該角色卡 */
    const el = [...view.querySelectorAll(".ccard")].find(c => c.dataset.name === char);
    if (el) { el.classList.add("in", "open"); el.setAttribute("aria-expanded", "true"); settleScroll(el, "center");
      el.classList.add("ret-flash"); setTimeout(() => el.classList.remove("ret-flash"), 1600); return; }
  }
  if (scroll && (work || kind === "platform")) { if (!restoreScroll()) $("#characters").scrollIntoView({ behavior: "smooth" }); }
  else if (scroll && !restoreScroll()) {
    const { path } = parseHash(), t = path && document.getElementById(path);
    if (t) settleScroll(t);
  }
}
/* 記住點擊的卡片，返回時捲回該卡片 */
const RET_KEY = "jc-ret";
function rememberClick(a) {
  const { from } = parseHash(a.getAttribute("href"));
  const card = a.closest(".ccard");
  try { sessionStorage.setItem(RET_KEY, JSON.stringify({ target: fromKey(from), work: a.dataset.work || "", char: card ? card.dataset.name : "" })); } catch {}
}
function restoreScroll() {
  let r; try { r = JSON.parse(sessionStorage.getItem(RET_KEY) || "null"); } catch {}
  if (!r || r.target !== originKey(location.hash)) return false;
  /* 從搜尋開啟時記錄的是原本的捲動位置 */
  if (typeof r.y === "number") {
    try { sessionStorage.removeItem(RET_KEY); } catch {}
    const y = r.y; requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo({ top: y, behavior: "instant" })));
    [200, 600].forEach(t => setTimeout(() => window.scrollTo({ top: y, behavior: "instant" }), t));
    return true;
  }
  let el = null;
  if (r.target === "worlds") el = $(`#worldIndex .wkcard[data-work="${CSS.escape(r.work)}"]`);
  else if (r.char) el = [...view.querySelectorAll(".ccard")].find(c => c.dataset.name === r.char);
  else el = $(`#charView .wgroup-head a[data-work="${CSS.escape(r.work)}"]`);
  if (!el) return false;
  try { sessionStorage.removeItem(RET_KEY); } catch {}
  el.closest(".reveal") && el.closest(".reveal").classList.add("in"); el.classList.add("in");
  settleScroll(el, "center"); el.classList.add("ret-flash"); setTimeout(() => el.classList.remove("ret-flash"), 1600);
  return true;
}
/* 捲動到元素並在版面因圖片載入而位移時持續校正（使用者自行捲動即停止） */
let settleCancel = null;
function settleScroll(el, block = "start") {
  if (settleCancel) settleCancel();
  let stopped = false;
  const stop = () => { stopped = true; ["wheel", "touchstart", "keydown", "mousedown"].forEach(t => removeEventListener(t, stop, true)); if (ro) ro.disconnect(); };
  settleCancel = stop;
  ["wheel", "touchstart", "keydown", "mousedown"].forEach(t => addEventListener(t, stop, { capture: true, passive: true }));
  const fix = () => { if (!stopped) el.scrollIntoView({ block, behavior: "instant" }); };
  const ro = "ResizeObserver" in window ? new ResizeObserver(fix) : null;
  if (ro) ro.observe(document.body);
  requestAnimationFrame(() => requestAnimationFrame(fix));
  [150, 450, 900, 1500].forEach(t => setTimeout(fix, t));
  setTimeout(stop, 2000);
}
window.addEventListener("hashchange", () => {
  const { kind } = parseHash();
  if (kind === "work" && parseHash(lastHash).kind !== "work") prevOfDetail = lastHash;
  else if (kind !== "work") prevOfDetail = null;
  lastHash = location.hash;
  route(true);
});
document.addEventListener("click", e => {
  const a = e.target.closest && e.target.closest('a[href^="#work/"]');
  if (a && !a.dataset.back) rememberClick(a);
  /* 返回連結：若上一頁正是來源，直接 history.back()，讓瀏覽器返回鍵行為一致 */
  const b = e.target.closest && e.target.closest("a.back[data-back]");
  if (b && prevOfDetail !== null && originKey(prevOfDetail) === originKey(b.getAttribute("href")) && parseHash().kind === "work") {
    e.preventDefault(); history.back();
  }
});

view.addEventListener("click", e => {
  if (e.target.closest("a, button, .lcode")) return;
  const c = e.target.closest(".ccard"); if (!c) return;
  c.setAttribute("aria-expanded", c.classList.toggle("open"));
});
view.addEventListener("keydown", e => {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("ccard")) {
    e.preventDefault(); const c = e.target; c.setAttribute("aria-expanded", c.classList.toggle("open"));
  }
});

/* ---------- 作品與世界觀 ---------- */
$("#worldIndex").innerHTML = worksGridHTML();

/* ---------- 最新上架輪播 ---------- */
(() => {
  const box = $("#newest"); if (!box) return;
  const shown = new Set(SHOWN_WORKS.map(w => w.id));
  const items = NEWEST.map(n => CHARACTERS.find(c => c.name === n)).filter(c => c && shown.has(c.work)).slice(0, 3);
  if (!items.length) { box.hidden = true; return; }
  const multi = items.length > 1;
  const slide = (c, i) => { const w = workOf(c);
    return `<a class="nw-slide${i ? "" : " on"}" href="#work/${w.id}?from=world&c=${encodeURIComponent(c.name)}" data-work="${w.id}" role="group" aria-roledescription="slide" aria-label="${i + 1} / ${items.length}"${i ? ' aria-hidden="true" tabindex="-1"' : ""}>
      <div class="nw-img">${c.avatar ? `<img src="${esc(c.avatar)}" alt="" loading="lazy" decoding="async">` : `<span class="nw-ph" aria-hidden="true">${esc([...c.name][0])}</span>`}</div>
      <div class="nw-body">${c.story ? `<div class="cstory nw-story notranslate" translate="no">「${esc(c.story)}」</div>` : ""}
        <h3 class="nw-name notranslate" translate="no">${esc(c.name)}</h3>
        <p class="nw-work notranslate" translate="no">${esc(workTitle(w))}</p>
        ${c.sum ? `<p class="nw-sum">${esc(c.sum)}</p>` : ""}<span class="nw-go">→</span></div></a>`; };
  box.innerHTML = `<div class="nw-head"><span class="nw-eyebrow notranslate" translate="no">New Arrivals</span><h3 class="nw-title i18n" data-en="Newest Characters" data-ko="최신 캐릭터">最新上架</h3></div>
    <div class="nw-stage" aria-roledescription="carousel" aria-label="最新上架">${items.map(slide).join("")}
    ${multi ? `<button type="button" class="nw-arrow prev" aria-label="上一位">‹</button><button type="button" class="nw-arrow next" aria-label="下一位">›</button>` : ""}</div>
    ${multi ? `<div class="nw-dots">${items.map((c, i) => `<button type="button" class="${i ? "" : "on"}" data-i="${i}" aria-label="第 ${i + 1} 位"></button>`).join("")}</div>` : ""}`;
  if (!multi) return;
  const slides = [...box.querySelectorAll(".nw-slide")], dots = [...box.querySelectorAll(".nw-dots button")];
  let cur = 0, timer = null, paused = false;
  const go = i => { cur = (i + items.length) % items.length;
    slides.forEach((s, k) => { const on = k === cur; s.classList.toggle("on", on); s.toggleAttribute("aria-hidden", !on); s.tabIndex = on ? 0 : -1; if (on) s.removeAttribute("aria-hidden"); else s.setAttribute("aria-hidden", "true"); });
    dots.forEach((d, k) => { d.classList.toggle("on", k === cur); d.setAttribute("aria-current", String(k === cur)); }); };
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  const start = () => { clearInterval(timer); if (!reduce.matches && !paused) timer = setInterval(() => { if (!document.hidden) go(cur + 1); }, 6500); };
  box.querySelector(".prev").addEventListener("click", () => { go(cur - 1); start(); });
  box.querySelector(".next").addEventListener("click", () => { go(cur + 1); start(); });
  dots.forEach(d => d.addEventListener("click", () => { go(+d.dataset.i); start(); }));
  const pause = () => { paused = true; clearInterval(timer); }, resume = () => { paused = false; start(); };
  box.addEventListener("mouseenter", pause); box.addEventListener("mouseleave", resume);
  box.addEventListener("focusin", pause); box.addEventListener("focusout", resume);
  /* 觸控：按住暫停，左右滑動切換 */
  let x0 = null, y0 = 0, swiped = false;
  const stage = box.querySelector(".nw-stage");
  stage.addEventListener("touchstart", e => { pause(); x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; swiped = false; }, { passive: true });
  stage.addEventListener("touchend", e => { if (x0 === null) return; const t = e.changedTouches[0], dx = t.clientX - x0;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(t.clientY - y0)) { swiped = true; go(cur + (dx < 0 ? 1 : -1)); }
    x0 = null; setTimeout(resume, 4000); }, { passive: true });
  stage.addEventListener("click", e => { if (swiped) { e.preventDefault(); swiped = false; } }, true);
  reduce.addEventListener && reduce.addEventListener("change", start);
  start();
})();

/* ---------- nav + reveal ---------- */
const bar = $(".topbar"), tog = $(".nav-toggle");
tog.addEventListener("click", () => { const o = bar.classList.toggle("open"); tog.setAttribute("aria-expanded", o); });
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => bar.classList.remove("open")));

const io = "IntersectionObserver" in window
  ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" })
  : null;
function observe(nodes) { nodes.forEach(n => io ? io.observe(n) : n.classList.add("in")); }
observe(document.querySelectorAll(".reveal"));
route(false);
if (/^#(work|platform)\//.test(location.hash)) setTimeout(() => $("#characters").scrollIntoView(), 0);
if (history.scrollRestoration) history.scrollRestoration = "manual";

/* ---------- starfield（多層星空、緩慢視差；尊重 prefers-reduced-motion） ---------- */
(() => {
  const cv = document.getElementById("starfield");
  if (!cv || !cv.getContext) return;
  const ctx = cv.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const LAYERS = [ { n: 0.00022, r: [0.3, 0.8], a: 0.55, speed: 0.015 },
                   { n: 0.00010, r: [0.6, 1.2], a: 0.75, speed: 0.04 },
                   { n: 0.00003, r: [1.0, 1.7], a: 0.95, speed: 0.08 } ];
  let W = 0, H = 0, dpr = 1, stars = [], motes = [], raf = 0, last = 0, depth = 0;
  const root = document.documentElement;
  function measure() {
    const max = Math.max(1, root.scrollHeight - innerHeight);
    depth = Math.min(1, Math.max(0, scrollY / max));
    root.style.setProperty("--depth", depth.toFixed(3));
  }
  addEventListener("scroll", () => { measure(); if (reduce.matches) draw(0); }, { passive: true });
  function seed() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + "px"; cv.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = [];
    LAYERS.forEach((L, li) => {
      const count = Math.round(W * H * L.n) + 6;
      for (let i = 0; i < count; i++) {
        const gold = Math.random() < 0.12, lav = !gold && Math.random() < 0.35;
        stars.push({ li, x: Math.random() * W, y: Math.random() * H,
          r: L.r[0] + Math.random() * (L.r[1] - L.r[0]), a: L.a * (0.5 + Math.random() * 0.5),
          tw: 0.4 + Math.random() * 1.4, ph: Math.random() * Math.PI * 2,
          c: gold ? "232,212,168" : lav ? "214,198,236" : "246,242,252" });
      }
    });
    /* 深海生物光微粒 */
    motes = [];
    const mc = Math.round(Math.min(46, W * H * 0.000035)) + 8;
    for (let i = 0; i < mc; i++) motes.push({ x: Math.random() * W, y: Math.random() * H,
      r: 0.7 + Math.random() * 1.3, v: 4 + Math.random() * 10, sw: 6 + Math.random() * 18,
      ph: Math.random() * Math.PI * 2, a: 0.25 + Math.random() * 0.45,
      c: Math.random() < 0.55 ? "128,214,206" : Math.random() < 0.5 ? "186,150,240" : "232,212,168" });
  }
  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    const sy = reduce.matches ? 0 : scrollY;
    for (const s of stars) {
      const L = LAYERS[s.li];
      let y = (s.y - sy * L.speed) % H; if (y < 0) y += H;
      const tw = reduce.matches ? 1 : 0.65 + 0.35 * Math.sin(t * 0.001 * s.tw + s.ph);
      ctx.globalAlpha = s.a * tw * (1 - depth * 0.65);
      ctx.fillStyle = `rgb(${s.c})`;
      ctx.beginPath(); ctx.arc(s.x, y, s.r, 0, Math.PI * 2); ctx.fill();
      if (s.r > 1.3) { ctx.globalAlpha = s.a * tw * 0.18; ctx.beginPath(); ctx.arc(s.x, y, s.r * 3.2, 0, Math.PI * 2); ctx.fill(); }
    }
    /* 越往下捲，星光越淡、生物光越明顯 */
    const sk = t * 0.001, mAlpha = 0.18 + depth * 0.82;
    for (const m of motes) {
      let y = reduce.matches ? m.y : (m.y - sk * m.v) % (H + 20);
      if (y < -10) y += H + 20;
      const x = m.x + (reduce.matches ? 0 : Math.sin(sk * 0.3 + m.ph) * m.sw);
      const pulse = reduce.matches ? 1 : 0.6 + 0.4 * Math.sin(sk * 0.8 + m.ph);
      const g = ctx.createRadialGradient(x, y, 0, x, y, m.r * 5);
      g.addColorStop(0, `rgba(${m.c},${(m.a * pulse * mAlpha).toFixed(3)})`);
      g.addColorStop(1, `rgba(${m.c},0)`);
      ctx.globalAlpha = 1; ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, m.r * 5, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  function loop(t) {
    raf = requestAnimationFrame(loop);
    if (t - last < 33) return; // ~30fps
    last = t; draw(t);
  }
  function start() { cancelAnimationFrame(raf); if (reduce.matches) draw(0); else raf = requestAnimationFrame(loop); }
  measure(); seed(); start();
  let rz; addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(() => { seed(); start(); }, 150); });
  document.addEventListener("visibilitychange", () => { if (document.hidden) cancelAnimationFrame(raf); else start(); });
  (reduce.addEventListener ? reduce.addEventListener("change", start) : reduce.addListener(start));
})();

/* ---------- 作者資訊：作品幻燈片 ---------- */
(() => {
  const root = document.getElementById("authorSlides"); if (!root) return;
  const slides = [...root.querySelectorAll(".aslide")], dots = [...root.querySelectorAll(".adot")];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DELAY = 4000; let cur = 0, timer = null, hover = false, visible = true;
  const load = i => {
    const s = slides[(i + slides.length) % slides.length]; if (s.dataset.loaded) return; s.dataset.loaded = "1";
    const bg = s.querySelector(".abg[data-bg]"); if (bg) bg.style.backgroundImage = `url('${bg.dataset.bg}')`;
    const img = s.querySelector("img[data-src]"); if (img) img.src = img.dataset.src;
    const v = s.querySelector("video");
    if (v) { v.poster = v.dataset.poster; v.querySelectorAll("source[data-src]").forEach(x => x.src = x.dataset.src); v.preload = "auto"; v.load(); if (reduce) v.controls = true; }
  };
  slides[0].dataset.loaded = "1";
  const syncVideo = () => slides.forEach((s, i) => { const v = s.querySelector("video"); if (!v) return;
    if (i === cur && !reduce && visible) { const p = v.play(); if (p && p.catch) p.catch(() => {}); } else v.pause(); });
  const go = i => {
    cur = (i + slides.length) % slides.length; load(cur); load(cur + 1);
    slides.forEach((s, k) => { s.classList.toggle("is-active", k === cur); s.setAttribute("aria-hidden", k === cur ? "false" : "true"); });
    dots.forEach((d, k) => { d.classList.toggle("on", k === cur); k === cur ? d.setAttribute("aria-current", "true") : d.removeAttribute("aria-current"); });
    syncVideo(); restart();
  };
  const stop = () => { clearTimeout(timer); timer = null; };
  const restart = () => { stop(); if (!reduce && !hover && visible && !document.hidden) timer = setTimeout(() => go(cur + 1), DELAY); };
  root.querySelector(".prev").addEventListener("click", () => go(cur - 1));
  root.querySelector(".next").addEventListener("click", () => go(cur + 1));
  dots.forEach((d, k) => d.addEventListener("click", () => go(k)));
  root.addEventListener("mouseenter", () => { hover = true; stop(); });
  root.addEventListener("mouseleave", () => { hover = false; restart(); });
  root.addEventListener("focusin", () => { hover = true; stop(); });
  root.addEventListener("focusout", e => { if (!root.contains(e.relatedTarget)) { hover = false; restart(); } });
  root.addEventListener("keydown", e => { if (e.key === "ArrowLeft") go(cur - 1); else if (e.key === "ArrowRight") go(cur + 1); });
  let sx = null, sy = null;
  root.addEventListener("touchstart", e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; stop(); }, { passive: true });
  root.addEventListener("touchend", e => {
    if (sx === null) return; const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(cur + (dx < 0 ? 1 : -1)); else restart();
  }, { passive: true });
  document.addEventListener("visibilitychange", () => { syncVideo(); restart(); });
  if ("IntersectionObserver" in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; syncVideo(); restart(); }, { threshold: .25 }).observe(root);
  load(1); restart();
})();

/* ---------- 圖像保護（輕度）：停用右鍵選單、拖曳圖片／影片 ---------- */
(() => {
  const editable = el => el && el.closest && el.closest("input, textarea, select, [contenteditable='true']");
  document.addEventListener("contextmenu", e => { if (!editable(e.target)) e.preventDefault(); });
  document.addEventListener("dragstart", e => { if (e.target && e.target.closest && e.target.closest("img, video, .aslides, .abg")) e.preventDefault(); });
  document.querySelectorAll("img, video").forEach(el => el.setAttribute("draggable", "false"));
  new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => {
    if (n.nodeType !== 1) return;
    if (n.matches("img, video")) n.setAttribute("draggable", "false");
    n.querySelectorAll && n.querySelectorAll("img, video").forEach(el => el.setAttribute("draggable", "false"));
  }))).observe(document.body, { childList: true, subtree: true });
})();


/* ---------- 語言切換：Google 網站翻譯（機器翻譯），自訂下拉選單 ----------
   原文為繁體中文；選擇其他語言時寫入 googtrans cookie 並載入 Google 翻譯元件（會一併翻譯之後動態產生的內容）。
   切回繁體中文時清除 cookie 並重新載入頁面，確保完整還原原文。人名、作品名、平台名、邀請碼等標記為 notranslate。 */
(() => {
  const box = document.getElementById("langSwitch");
  if (!box) return;
  const LANGS = { "zh-TW": "中", en: "EN", ko: "한", ja: "日", th: "ไทย" };
  const btn = box.querySelector(".lang-btn"), menu = box.querySelector(".lang-menu"), note = box.querySelector(".lang-note");
  const KEY = "jcna-lang";
  const host = location.hostname, parts = host.split(".");
  const domains = ["", host, "." + host];
  if (parts.length > 2) domains.push("." + parts.slice(-2).join("."));
  const setCookie = v => domains.forEach(d => { document.cookie = `googtrans=${v}; path=/${d ? "; domain=" + d : ""}${v ? "; max-age=31536000" : "; expires=Thu, 01 Jan 1970 00:00:00 GMT"}`; });
  const fromCookie = () => { const m = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]*\/([^;]+)/); return m && LANGS[m[1]] ? m[1] : null; };
  let saved = null; try { saved = localStorage.getItem(KEY); } catch (e) {}
  let cur = (saved && LANGS[saved]) ? saved : (fromCookie() || "zh-TW");
  const paint = () => {
    btn.querySelector(".lang-cur").textContent = LANGS[cur];
    menu.querySelectorAll("button").forEach(b => b.setAttribute("aria-checked", String(b.dataset.lang === cur)));
    note.hidden = cur === "zh-TW";
    /* 暱稱等少數字串使用人工譯文（機器翻譯容易誤譯），保留原文於 data-zh */
    document.querySelectorAll(".nick, .i18n").forEach(el => {
      if (!el.dataset.zh) el.dataset.zh = el.innerHTML;
      const t = cur !== "zh-TW" && el.dataset[cur];
      if (!t) el.innerHTML = el.dataset.zh;
      else if (el.dataset.html) el.innerHTML = t; else el.textContent = t;
    });
  };
  let loading = false;
  const load = () => {
    if (window.google && google.translate && google.translate.TranslateElement) return apply();
    if (loading) return; loading = true;
    window.__gtInit = () => {
      new google.translate.TranslateElement({ pageLanguage: "zh-TW", includedLanguages: "en,ko,ja,th", autoDisplay: false }, "google_translate_element");
      apply();
    };
    const sc = document.createElement("script");
    sc.src = "https://translate.google.com/translate_a/element.js?cb=__gtInit";
    sc.async = true;
    document.head.appendChild(sc);
  };
  /* 透過 Google 隱藏的下拉選單切換語言（元件初始化後可能稍晚才出現） */
  const apply = (tries = 0) => {
    const combo = document.querySelector("#google_translate_element select.goog-te-combo");
    if (!combo || !combo.options.length) { if (tries < 60) setTimeout(() => apply(tries + 1), 150); return; }
    if (combo.value !== cur) { combo.value = cur; combo.dispatchEvent(new Event("change")); }
  };
  const choose = lang => {
    if (!LANGS[lang]) return;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    if (lang === "zh-TW") {
      const was = cur; cur = lang; paint(); setCookie("");
      if (was !== "zh-TW" || document.documentElement.classList.contains("translated-ltr")) location.reload();
      return;
    }
    cur = lang; paint(); setCookie(`/zh-TW/${lang}`); load();
  };
  const open = v => { menu.hidden = !v; btn.setAttribute("aria-expanded", String(v)); box.classList.toggle("open", v); if (v) (menu.querySelector('[aria-checked="true"]') || menu.querySelector("button")).focus(); };
  btn.addEventListener("click", e => { e.stopPropagation(); open(menu.hidden); });
  menu.addEventListener("click", e => { const b = e.target.closest("button[data-lang]"); if (!b) return; open(false); btn.focus(); choose(b.dataset.lang); });
  menu.addEventListener("keydown", e => {
    const items = [...menu.querySelectorAll("button")], i = items.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
  });
  document.addEventListener("click", e => { if (!box.contains(e.target)) open(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !menu.hidden) { open(false); btn.focus(); } });
  paint();
  if (cur !== "zh-TW") { setCookie(`/zh-TW/${cur}`); load(); }
  else if (fromCookie()) setCookie("");
})();


/* ---------- 站內搜尋：角色／作品／平台（比對原始中文資料，與翻譯無關） ---------- */
(() => {
  const btn = $("#searchBtn"), dlg = $("#searchDlg"), input = $("#searchInput"), out = $("#searchResults");
  if (!btn || !dlg) return;
  const norm = s => String(s || "").normalize("NFKC").toLowerCase().replace(/[\s・·．.\-_／/「」《》『』（）()【】,，、:：!！?？~～'"“”]+/g, "");
  const shownWorkIds = new Set(SHOWN_WORKS.map(w => w.id));
  /* 角色 */
  const CIDX = CHARACTERS.filter(c => shownWorkIds.has(c.work)).map(c => {
    const w = workOf(c), plats = platsOf(c).filter(p => p !== "未標註");
    const tags = [c.group && "多人", c.status, c.linkStatus || (!c.links.length && "準備中")].filter(Boolean);
    return { c, w, plats, tags,
      f: { name: norm(c.name), full: norm(c.full), code: norm([c.code, c.story].join(" ")), tags: norm(tags.join(" ")),
           meta: norm([c.role, c.collab, w && w.title, w && w.fullTitle, plats.map(plabel).join(" "), plats.join(" ")].join(" ")),
           text: norm([c.sum, c.intro, c.age].join(" ")) } };
  });
  /* 作品（隱藏的空作品不列入） */
  const WIDX = SHOWN_WORKS.map(w => ({ w, n: charsOfWork(w).length,
    f: { name: norm(w.title + " " + (w.fullTitle || "")), meta: norm(w.tags), text: norm([w.hook, w.world].join(" ")) } }));
  /* 平台：篩選按鈕（有角色）＋進駐平台卡片；不含邀請碼 */
  const aliasOf = key => Object.keys(PLATFORM_ALIASES).filter(a => PLATFORM_ALIASES[a] === key);
  const cardKey = p => normPlatform(p.name);
  const PIDX = [];
  PLATFORM_FILTERS.filter(p => p.key !== "未標註").forEach(p => {
    const card = PLATFORMS.find(x => cardKey(x) === p.key || x.name === p.key);
    PIDX.push({ key: p.key, label: plabel(p.key), sub: card && card.title ? card.name : (card && card.sub) || "", href: `#platform/${p.id}`, count: p.count,
      f: { name: norm([p.key, plabel(p.key), card && card.title, card && card.sub, card && card.name].join(" ")), meta: norm(aliasOf(p.key).join(" ")) } });
  });
  PLATFORMS.forEach(x => {
    const k = cardKey(x);
    if (PIDX.some(p => p.key === k || p.key === x.name)) return;
    PIDX.push({ key: x.name, label: x.title || x.name, sub: x.sub || "", href: "#platforms", card: x.name, count: 0,
      f: { name: norm([x.name, x.title, x.sub].join(" ")), meta: norm(aliasOf(k).join(" ")) } });
  });
  const score = (f, q) => {
    if (!q) return 0;
    if (f.name === q) return 100;
    if (f.name && f.name.startsWith(q)) return 85;
    if (f.name && f.name.includes(q)) return 70;
    if (f.full && f.full.includes(q)) return 60;
    if (f.code && f.code.includes(q)) return 55;
    if (f.tags && f.tags.includes(q)) return 45;
    if (f.meta && f.meta.includes(q)) return 35;
    if (f.text && f.text.includes(q)) return 15;
    return 0;
  };
  const hl = (s, raw) => {   /* 標示名稱中的相符片段（原文比對） */
    s = String(s || ""); const q = raw.trim(); if (!q) return esc(s);
    const i = s.toLowerCase().indexOf(q.toLowerCase());
    return i < 0 ? esc(s) : esc(s.slice(0, i)) + "<mark>" + esc(s.slice(i, i + q.length)) + "</mark>" + esc(s.slice(i + q.length));
  };
  const NT = 'class="notranslate" translate="no"';
  let items = [], sel = -1, lastFocus = null;
  const thumbC = c => c.avatar ? `<img src="${esc(c.avatar)}" alt="" loading="lazy">` : `<span class="sr-ph" aria-hidden="true">${esc([...c.name][0])}</span>`;
  const thumbW = w => w.cover ? `<img src="${esc(w.cover)}" alt="" loading="lazy"${w.coverPos ? ` style="object-position:${esc(w.coverPos)}"` : ""}>` : `<span class="sr-ph planet" aria-hidden="true"></span>`;
  const thumbP = k => piconOf(k) ? `<img src="${piconOf(k)}" alt="" loading="lazy">` : `<span class="sr-ph" aria-hidden="true">◎</span>`;
  function render() {
    const raw = input.value, q = norm(raw);
    if (!q) { items = []; sel = -1; out.innerHTML = `<p class="sr-empty">開始輸入以搜尋。</p>`; return; }
    const cs = CIDX.map(x => ({ x, s: score(x.f, q) })).filter(r => r.s).sort((a, b) => b.s - a.s);
    const ws = WIDX.map(x => ({ x, s: score(x.f, q) })).filter(r => r.s).sort((a, b) => b.s - a.s);
    const ps = PIDX.map(x => ({ x, s: score(x.f, q) })).filter(r => r.s).sort((a, b) => b.s - a.s);
    items = []; let html = "";
    const group = (title, list, max, row) => {
      if (!list.length) return;
      html += `<section class="sr-group"><h4>${title}<span class="sr-n">${list.length}</span></h4>`;
      list.slice(0, max).forEach(r => { const i = items.length; items.push(r.x); html += row(r.x, i); });
      if (list.length > max) html += `<p class="sr-more">還有 ${list.length - max} 筆，請輸入更完整的關鍵字</p>`;
      html += `</section>`;
    };
    group("角色", cs, 12, (x, i) => `<a class="sr-item" role="option" id="sr-${i}" data-i="${i}" href="#work/${x.w.id}">
      <span class="sr-thumb round">${thumbC(x.c)}</span>
      <span class="sr-main"><span class="sr-title"><span ${NT}>${hl(x.c.name, raw)}</span>${x.tags.filter(t => t === "多人").map(t => `<span class="sr-tag">${t}</span>`).join("")}</span>
      <span class="sr-sub">${x.c.story ? `<span ${NT}>「${esc(x.c.story)}」</span>・` : ""}${x.c.full ? `<span ${NT}>${esc(x.c.full)}</span>・` : ""}<span ${NT}>${esc(workTitle(x.w))}</span>${x.c.role ? `・${esc(x.c.role)}` : ""}</span></span></a>`);
    group("作品", ws, 6, (x, i) => `<a class="sr-item" role="option" id="sr-${i}" data-i="${i}" href="#work/${x.w.id}">
      <span class="sr-thumb">${thumbW(x.w)}</span>
      <span class="sr-main"><span class="sr-title"><span ${NT}>${hl(workTitle(x.w), raw)}</span></span>
      <span class="sr-sub">${x.w.tags ? esc(x.w.tags) + "・" : ""}${x.n} 位角色</span></span></a>`);
    group("平台", ps, 6, (x, i) => `<a class="sr-item" role="option" id="sr-${i}" data-i="${i}" href="${x.href}">
      <span class="sr-thumb round">${thumbP(x.key)}</span>
      <span class="sr-main"><span class="sr-title"><span ${NT}>${hl(x.label, raw)}</span></span>
      <span class="sr-sub">${x.sub ? `<span ${NT}>${esc(x.sub)}</span>・` : ""}${x.count ? `${x.count} 位角色` : "進駐平台"}</span></span></a>`);
    out.innerHTML = html || `<p class="sr-empty">找不到相關角色、作品或平台。</p>`;
    sel = items.length ? 0 : -1; mark();
  }
  const mark = () => {
    out.querySelectorAll(".sr-item").forEach(a => a.classList.toggle("on", +a.dataset.i === sel));
    const a = out.querySelector(`.sr-item[data-i="${sel}"]`);
    input.setAttribute("aria-activedescendant", a ? a.id : "");
    if (a) a.scrollIntoView({ block: "nearest" });
  };
  /* 目前所在位置 → 作品頁返回目標 */
  const currentFrom = () => {
    const h = parseHash();
    if (h.kind === "work") return h.from || "";
    if (h.kind === "platform") return "platform:" + h.id;
    const secs = ["worlds", "characters", "platforms", "about"];
    const y = window.scrollY + innerHeight * 0.35;
    for (const id of secs) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top + window.scrollY <= y) return id === "worlds" ? "world" : "sec:" + id; }
    return "sec:top";
  };
  function openItem(x) {
    if (!x) return;
    const from = openFrom != null ? openFrom : currentFrom(), h = parseHash(), y0 = openFrom != null ? openY : window.scrollY;
    const remember = target => { try { sessionStorage.setItem(RET_KEY, JSON.stringify({ target, y: y0 })); } catch {} };
    close(false);
    if (x.w) {
      const w = x.w, char = x.c;
      const focusChar = () => {
        if (!char) return;
        const el = [...view.querySelectorAll(".ccard")].find(c => c.dataset.name === char.name);
        if (!el) return;
        el.classList.add("in", "open"); el.setAttribute("aria-expanded", "true");
        settleScroll(el, "center"); el.classList.add("ret-flash"); setTimeout(() => el.classList.remove("ret-flash"), 1600);
        el.focus({ preventScroll: true });
      };
      if (h.kind === "work" && h.id === w.id) { char ? focusChar() : settleScroll($("#characters")); return; }
      if (h.kind !== "work") remember(fromKey(from));
      const target = `#work/${w.id}${from ? "?from=" + encodeURIComponent(from) : ""}`;
      if (char) window.addEventListener("hashchange", () => setTimeout(focusChar, 60), { once: true });
      location.hash = target;
      return;
    }
    if (x.card) {   /* 沒有角色的平台：捲到進駐平台的卡片 */
      const el = [...document.querySelectorAll("#platformGrid .pcard")].find(c => (c.querySelector(".pname") || {}).textContent === x.label);
      if (el) { settleScroll(el, "center"); el.classList.add("ret-flash"); setTimeout(() => el.classList.remove("ret-flash"), 1600); }
      else settleScroll($("#platforms"));
      return;
    }
    location.hash = x.href;
  }
  let openFrom = null, openY = 0;
  function open() {
    lastFocus = document.activeElement;
    openY = window.scrollY; openFrom = currentFrom();
    dlg.hidden = false; document.documentElement.classList.add("search-open");
    btn.setAttribute("aria-expanded", "true");
    render(); setTimeout(() => { input.focus({ preventScroll: true }); input.select(); if (Math.abs(window.scrollY - openY) > 2) window.scrollTo({ top: openY, behavior: "instant" }); }, 0);
  }
  function close(restoreFocus = true) {
    if (dlg.hidden) return;
    dlg.hidden = true; document.documentElement.classList.remove("search-open");
    btn.setAttribute("aria-expanded", "false");
    if (restoreFocus && lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  btn.addEventListener("click", () => dlg.hidden ? open() : close());
  dlg.querySelector(".search-close").addEventListener("click", () => close());
  dlg.addEventListener("mousedown", e => { if (e.target === dlg) close(); });
  input.addEventListener("input", render);
  input.addEventListener("keydown", e => {
    if (e.key === "ArrowDown" && items.length) { e.preventDefault(); sel = (sel + 1) % items.length; mark(); }
    else if (e.key === "ArrowUp" && items.length) { e.preventDefault(); sel = (sel - 1 + items.length) % items.length; mark(); }
    else if (e.key === "Enter") { e.preventDefault(); openItem(items[sel]); }
  });
  out.addEventListener("click", e => { const a = e.target.closest(".sr-item"); if (!a) return; e.preventDefault(); openItem(items[+a.dataset.i]); });
  out.addEventListener("mousemove", e => { const a = e.target.closest(".sr-item"); if (a && +a.dataset.i !== sel) { sel = +a.dataset.i; mark(); } });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !dlg.hidden) { e.preventDefault(); close(); return; }
    const t = e.target, typing = t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
    if (e.key === "/" && !typing && !e.ctrlKey && !e.metaKey && !e.altKey && dlg.hidden) { e.preventDefault(); open(); }
  });
})();

/* ---------- 首頁天頂座標：訪客當地天頂的 RA（地方恆星時）／DEC（緯度） ----------
   位置：不跳出定位權限；以免金鑰 HTTPS IP 定位（get.geojs.io → ipwho.is 備援，短逾時），存於 sessionStorage；
   皆失敗時依 Intl 時區估算。只使用經緯度，不顯示城市或 IP。失敗時保留原本的靜態文字。 */
(() => {
  const el = document.getElementById("heroCoord");
  if (!el) return;
  const GEO_KEY = "jc-zenith-geo";
  const TZ = {   /* 時區 → 約略經緯度 */
    "Asia/Taipei": [25.03, 121.56], "Asia/Tokyo": [35.68, 139.69], "Asia/Seoul": [37.57, 126.98], "Asia/Bangkok": [13.75, 100.5],
    "Asia/Hong_Kong": [22.32, 114.17], "Asia/Macau": [22.2, 113.55], "Asia/Shanghai": [31.23, 121.47], "Asia/Singapore": [1.35, 103.82],
    "Asia/Kuala_Lumpur": [3.14, 101.69], "Asia/Manila": [14.6, 120.98], "Asia/Jakarta": [-6.2, 106.85], "Asia/Ho_Chi_Minh": [10.82, 106.63],
    "Asia/Saigon": [10.82, 106.63], "Asia/Kolkata": [22.57, 88.36], "Asia/Calcutta": [22.57, 88.36], "Asia/Dubai": [25.2, 55.27],
    "Australia/Sydney": [-33.87, 151.21], "Australia/Melbourne": [-37.81, 144.96], "Pacific/Auckland": [-36.85, 174.76],
    "Europe/London": [51.51, -0.13], "Europe/Paris": [48.86, 2.35], "Europe/Berlin": [52.52, 13.4], "Europe/Madrid": [40.42, -3.7],
    "Europe/Rome": [41.9, 12.5], "Europe/Amsterdam": [52.37, 4.9], "Europe/Moscow": [55.76, 37.62], "Europe/Istanbul": [41.01, 28.98],
    "America/New_York": [40.71, -74.01], "America/Toronto": [43.65, -79.38], "America/Chicago": [41.88, -87.63], "America/Denver": [39.74, -104.99],
    "America/Phoenix": [33.45, -112.07], "America/Los_Angeles": [34.05, -118.24], "America/Vancouver": [49.28, -123.12],
    "America/Anchorage": [61.22, -149.9], "America/Mexico_City": [19.43, -99.13], "America/Sao_Paulo": [-23.55, -46.63],
    "America/Argentina/Buenos_Aires": [-34.6, -58.38], "Pacific/Honolulu": [21.31, -157.86],
  };
  const fromTimezone = () => {
    let tz = ""; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch {}
    if (TZ[tz]) return { lat: TZ[tz][0], lon: TZ[tz][1], src: "tz" };
    return { lat: 0, lon: -new Date().getTimezoneOffset() / 60 * 15, src: "offset" };
  };
  const valid = g => g && isFinite(g.lat) && isFinite(g.lon) && Math.abs(g.lat) <= 90 && Math.abs(g.lon) <= 180;
  const fetchJSON = (url, ms = 2500) => {
    const ctl = typeof AbortController === "function" ? new AbortController() : null;
    const t = setTimeout(() => ctl && ctl.abort(), ms);
    return fetch(url, { signal: ctl && ctl.signal, credentials: "omit", referrerPolicy: "no-referrer", cache: "no-store" })
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).finally(() => clearTimeout(t));
  };
  const SOURCES = [
    ["https://get.geojs.io/v1/ip/geo.json", j => ({ lat: parseFloat(j.latitude), lon: parseFloat(j.longitude) })],
    ["https://ipwho.is/?fields=success,latitude,longitude", j => j.success === false ? null : ({ lat: +j.latitude, lon: +j.longitude })],
  ];
  async function locate() {
    try { const c = JSON.parse(sessionStorage.getItem(GEO_KEY) || "null"); if (valid(c)) return c; } catch {}
    for (const [url, pick] of SOURCES) {
      try { const g = pick(await fetchJSON(url)); if (valid(g)) { const v = { lat: g.lat, lon: g.lon, src: "ip" };
        try { sessionStorage.setItem(GEO_KEY, JSON.stringify(v)); } catch {} return v; } } catch {}
    }
    return fromTimezone();
  }
  /* GMST（IAU 1982 簡式，度）：280.46061837 + 360.98564736629·d + 0.000387933·T² − T³/38710000 */
  const lstHours = (date, lon) => {
    const d = date.getTime() / 86400000 + 2440587.5 - 2451545.0, T = d / 36525;
    const gmst = 280.46061837 + 360.98564736629 * d + 0.000387933 * T * T - T * T * T / 38710000;
    return (((gmst + lon) % 360 + 360) % 360) / 15;
  };
  const pad = n => String(n).padStart(2, "0");
  const fmt = (lat, lon, date = new Date()) => {
    let m = Math.floor(lstHours(date, lon) * 60) % 1440;
    const am = Math.round(Math.abs(lat) * 60);
    return `RA ${pad(Math.floor(m / 60))}h ${pad(m % 60)}m · DEC ${lat < 0 && am ? "−" : "+"}${pad(Math.floor(am / 60))}° ${pad(am % 60)}′`;
  };
  window.__zenith = { lstHours, fmt };   /* 供檢查用 */
  const start = g => {
    const tick = () => { el.textContent = fmt(g.lat, g.lon); el.dataset.src = g.src; };
    tick(); setInterval(tick, 30000);
  };
  const run = () => locate().then(start, () => start(fromTimezone()));
  if ("requestIdleCallback" in window) requestIdleCallback(run, { timeout: 1500 }); else setTimeout(run, 300);
})();
