/* J_CNa ／ 雨宮 — 創作者空間
   資料來源：Discord「聖晶石」角色目錄＋Notion「原創」資料庫（唯讀擷取）＋作者提供之已知資訊。
   標記 pending 的欄位為「待補」，請勿自行補寫未經確認的內容。 */

/* 邀請碼 invite：作者本人於各平台的個人邀請／推薦碼（Discord 貼文與 lit.link 交叉比對一致） */
const PLATFORMS = [
  { name: "lit.link", desc: "所有連結的總入口", url: "https://lit.link/zh-tw/Jcna19200101" },
  { name: "灰骨 Ashbone", title: "Ashbone", sub: "灰骨", desc: "角色與提示詞販售", url: "https://ashbone.app/u/8b060440-2f3f-41d2-a526-b1ecf1ddcf50?ref=0DEBEDF3", invite: "0DEBEDF3" },
  { name: "Heartbeat", desc: "AI 角色聊天平台", url: "https://heartbeat-app.net/creators/J_CNa", invite: "5EUVH33H" },
  { name: "Caveduck", desc: "AI 角色聊天平台（鴨答鴨答）", url: "https://caveduck.io/zh-hant/user/J_CNa", invite: "gZ2QckNAlD" },
  { name: "Storyaichat", desc: "AI 角色聊天平台", url: "https://storyaichat.com/author.html?id=6a867e13fb4bcb4faf2cbbbe" },
  { name: "Melting", desc: "AI 角色聊天平台", url: "https://t.melting.chat/ai9ah6", invite: "BGxTDZfdP2" },
  { name: "Plaitoon", desc: "AI 角色聊天平台（需登入 Plaitoon 查看）", url: "https://www.plaitoon.com/j_cna", invite: "760F847B" },
  { name: "IsekaiZero", desc: "AI 角色聊天平台", url: "https://www.isekaizero.ai/download/qr?utm_campaign=share&utm_medium=referral&utm_content=referral-code&referralCode=E0MR4AGH", invite: "E0MR4AGH" },
  { name: "Hyze", desc: "AI 角色聊天平台", url: "https://hyze.me/creator/QWN0b3I6LIbeCKaZUECHSTZQbmmxiw==", invite: "0lWmuSy" },
  { name: "Tikita", desc: "AI 角色聊天平台", url: "https://tikita.ai/?referrer=GE0O2I", invite: "GE0O2I" },
  { name: "WHIF", desc: "AI 角色聊天平台", url: "https://www.whif.io/profile/J_CNa", invite: "F8C64073" },
  /* 以下連結取自作者 lit.link（2026-10-18）；lit.link 上均未附邀請碼。Floze／MiraiMind／Touchie／Paradise／DokiChat 已退出，不再列出 */
  { name: "FuWa", url: "https://link.fuwachat.com/creators/019fbe62-bd6e-78e2-b427-63c1eae558ae" },
  { name: "CRUSH", url: "https://creators.passion.xyz/j_cna", status: "暫停更新" },
  { name: "Tingle", url: "https://tingle.chat/chat/users/347248/profile?tab=characters", status: "暫停更新" },
  { name: "卿卿我我", title: "LoveyDovey", sub: "卿卿我我 · 7755", url: "https://loveydovey.onelink.me/vs4G/8m9nxr1f", status: "暫停更新" },
];

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
  { name: "車泰律", role: "永晝會「雲香閣」高級保安幹部／現場執行主管", age: "28｜188cm", work: "yongzhou", avatar: A+"chetailu.jpg",
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
    links: [L("GPTs", null, { status: "已退" }), L("卿卿我我")],
    sum: "前地下傭兵團「戰鬥犬」，18 歲被你收編後只聽命於一人。",
    intro: "原為地下傭兵團「戰鬥犬」之一，18 歲任務中被（你）收編，自此只聽命於一人。擅長近身戰與隱匿接觸，於支部內負責外部危機處理。" },
  { name: "米卡耶爾", full: "米卡耶爾·卡日涅夫", code: "夜鴞 Strix", role: "晚禱之家—右副手", age: "34", work: "vespers", avatar: A+"mikael.jpg",
    links: [L("GPTs", null, { status: "已退" })],
    sum: "曾受赦免的「叛徒」，十年隱伏夜色，只在你的呼喚裡現身。",
    intro: "前內部「叛徒」名單首位，本應被處決卻受（你）一言赦免，自此十年間隱伏於黑夜邊際。專長情報縱深滲透與靜默行動，出手如夜鴞俯衝，無鳴、無痕。" },
  { name: "瓦倫提諾", full: "瓦倫提諾．達里奧", code: "Maestro（指揮家）", role: "前任會長／榮譽監察顧問", age: "49", work: "vespers", avatar: A+"valentino.jpg",
    links: [L("卿卿我我")],
    sum: "掌控節拍卻不握鎖鏈的指揮家，信奉不奪人自由的優雅。",
    intro: "他掌控節拍卻不握鎖鏈，信奉「真正的優雅，是在不奪人自由的前提下，成就對方最驕傲的姿態」。\n語言切換自如：六成義語、三成英語、偶爾韓語敬語。\n他不是高座上的王，而是悄然令萬物依序和鳴的指揮家。" },
  { name: "Roi", full: "無", code: "Shadow（影子）", role: "現任會長（影武者）", age: "36", work: "vespers", avatar: A+"roi.jpg",
    links: [L("卿卿我我"), L("CRUSH")],
    sum: "以心率與沉默塑造節拍的影武者，只守護唯一的光源。",
    intro: "他不以言語指揮，只用心率與沉默塑造節拍：一句「影在」，足以令整座據點收聲。面對外人目光淡漠；唯獨對「妹妹（妳）」那唯一光源，以脈搏同步、守護。" },
  { name: "盧卡斯", full: "盧卡斯．艾森貝格", code: "死踞蠍 Deathstalker", age: "37", work: "vespers", avatar: A+"lucas.jpg", links: [],
    sum: "簡介待補。", intro: "" },
  // ── 野獸集結
  { name: "野性公館", full: "Wild Mansion／荒野大宅", role: "多人：六種獸人", work: "yeshou", avatar: A+"wildmansion.jpg", group: true,
    links: [L("Melting", "https://t.melting.chat/jk58gt")],
    sum: "因為欠錢，你把自己賣給宅院主人，成了小管家。", intro: "" },
  // ── 白虎部隊：404
  { name: "白虎部隊 404 內務室", full: "White Tiger Unit - Room 404", role: "韓國陸軍・10 名士兵（多人）", work: "baihu", adult: true, avatar: A+"baihu.jpg", group: true,
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
  // ── 深海戰艦
  { name: "深海戰艦：利維坦號", role: "多人：十名重刑犯", work: "shenhai", avatar: A+"leviathan.jpg", group: true,
    links: [L("Whif", "https://whif.io/characters/af0b5f2c-cfaa-40b9-b196-3ed63ccb742b", { label: "先行" }), L("HeartBeat", "https://heartbeat-app.net/characters/16b6396b-ff9d-4860-b2a8-da93a858479f")],
    sum: "你是最高看守長，掌控深海戰艦上的十名重刑犯。", intro: "" },
  { name: "亞歷斯塔", code: "艦長", role: "深海戰艦：利維坦號・艦長", work: "shenhai", avatar: A+"alista.jpg",
    links: [L("WHIF", "https://www.whif.io/characters/52765a00-2e81-4633-8c89-8551b23d81ae")],
    sum: "深海戰艦的艦長，以軍階與高壓支配一切——多一個欺負你的不好嗎? :)", intro: "#現代 #軍階壓制 #高壓支配 #佔有慾 #心機攻" },
  // ── 成為惡人的合法配偶
  { name: "權泰錫", role: "黑道", work: "evilspouse", avatar: A+"quantaixi.jpg",
    links: [L("WHIF", "https://www.whif.io/characters/ddd07fbc-463e-4493-9aeb-342083ae57cf"),
      L("HeartBeat", "https://heartbeat-app.net/characters/27fa456d-6217-4dcc-90fb-4900ac18dc7b")],
    sum: "佔有慾極強、對你極端寵溺的黑道。", intro: "#現代 #佔有慾 #執著攻 #黑道 #體型差 #極端寵溺 #強勢攻 #你爸好香所就搶走啦！" },
  { name: "權在京", role: "斯文敗類", work: "evilspouse", avatar: A+"quanzaijing.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/92867043-04c5-416f-b0e4-471c4ef8beef")],
    sum: "斯文敗類的高智商犯罪者，一場極致推拉的心理博弈。", intro: "#現代 #斯文敗類 #極致推拉 #心理博弈 #高智商犯罪 #道德綁架 #病態共生 #勾引霸凌者的叔叔！" },
  { name: "褚赫", full: "Chu He", role: "重案組狂犬", work: "evilspouse", avatar: A+"chuhe.jpg",
    links: [L("Melting", "https://t.melting.chat/spmkvvv"), L("HeartBeat", "https://heartbeat-app.net/characters/ac264dfb-5a36-4097-920f-f6cdeac69b5e", { status: "可能無法玩" })],
    sum: "雨宮警局重案組的狂犬——馴服瘋狗，成為銀手鐲彼端的合法配偶。", intro: "#現代 #重案組狂犬 #暴力強制 #寫實感官 #血腥共生 #銀手鐲配偶 #馴服瘋狗！ #雨宮警局嗶啵嗶啵" },
  // ── 惹禍上身！
  { name: "黎熾", role: "豪門霸總", work: "rehuo", avatar: A+"lichi.jpg",
    links: [L("WHIF", "https://www.whif.io/characters/375f8a67-a6b2-4b53-afb8-12d06bb7f324")],
    sum: "以為只是位香香的牛郎，沒想到惹上的是豪門大佬。", intro: "#現代 #佔有慾 #腹黑攻 #強取豪奪 #歡喜冤家 #霸總 #豪門 #甜寵 #年上" },
  { name: "黎赫", role: "豪門前任", work: "rehuo", avatar: A+"lihe.jpg",
    links: [L("WHIF", "https://www.whif.io/characters/d9b92f9c-4134-4741-a20b-9a0cacc70e1d", { label: "布丁劫匪！" }),
      L("Hyze", "https://hyze.me/character/08de863a-b50a-46c5-8e7d-9689ea7e0a90"),
      L("HeartBeat", "https://heartbeat-app.net/characters/eed774a3-a604-4509-b5f3-bc20d5454004")],
    sum: "搶你布丁的前任，乾脆把整座布丁工廠買了下來。", intro: "#現代 #豪門 #搞笑 #歡喜冤家 #破鏡重圓 #甜寵 #前任 #哩賀舅舅搶你布丁" },
  { name: "顧柏谷", role: "冰山直男", work: "rehuo", avatar: A+"gubaigu.jpg",
    links: [L("WHIF", "https://www.whif.io/characters/ed216f28-ae8a-45e0-9ccd-f302bdc4ca84")],
    sum: "「這個幼童與我的面部相似度高達 92.4%。我要求立刻進行 DNA 鑑定。」", intro: "#現代 #歡喜冤家 #破鏡重圓 #帶球跑 #甜寵 #直男癌 #冰山" },
  { name: "顧俇俇", role: "體育系暴君", work: "rehuo", avatar: A+"guwangwang.jpg",
    links: [L("WHIF", "https://whif.io/characters/e1bfe5cf-7137-442a-865e-88513a21895f", { label: "養狗達人" })],
    sum: "極度雙標的純情猛犬，體能怪物兼嚶嚶愛哭包。", intro: "#極度雙標 #純情猛犬 #體育系暴君 #絕對忠誠 #瘋狂佔有慾 #體能怪物 #嚶嚶愛哭包" },
  // ── 地靈人傑
  { name: "雷歐納多・席爾瓦", full: "Leonardo Silva", role: "巴西", work: "diling", avatar: A+"leonardo.jpg",
    links: [L("卿卿我我", "https://abr.ge/wwfk62")],
    sum: "外冷內熱的純情大狗狗，家庭至上的投餵系男人。", intro: "#外冷內熱 #純情處男 #怕痛大狗狗 #過度紳士 #家庭至上 #狼狗開關ON #投餵系男人" },
  { name: "拉薩羅・維拉斯奎茲", full: "Lázaro \"The Matador\" Velasquez", code: "鬥牛士／瘋狗", role: "西班牙", work: "diling", avatar: A+"lazaro.jpg",
    links: [],
    sum: "穿著西裝的野獸——優雅的瘋子，鬥牛士。", intro: "#優雅的瘋子 #黑暗三角人格 #極度S #反社會人格 #暴力成癮 #絕對支配 #褻瀆神明的異端 #穿著西裝的野獸" },
  { name: "雷擎", role: "台灣基層消防員", age: "32", work: "diling", avatar: A+"leiqing.jpg",
    links: [],
    sum: "曾受特種搜救訓練的消防員，對隔壁被冷落的你有強烈的保護慾。", intro: "#冷酷護短 #領地意識 #沉默寡言 #粗獷強勢" },
  { name: "張天佑", code: "佑少／金鱗毒蛇", role: "香港・銅鑼灣太子", work: "diling", avatar: A+"zhangtianyou.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/dbbb0fac-9130-4bbf-a56a-3ffd57243b80")],
    sum: "銅鑼灣太子，極端護短的病嬌瘋批。", intro: "#病嬌瘋批 #銅鑼灣太子 #極端護短 #道德真空 #暴力美學 #鈔能力戀人 #制服暴徒" },
  { name: "恩佐", full: "羅倫佐．「恩佐」．曼奇尼", role: "羅馬市中心綜合醫院小兒科主治醫師", age: "194cm", work: "diling", avatar: A+"enzo.jpg",
    links: [L("Whif", "https://whif.io/characters/a08b0cbe-67df-48cf-85ee-1d525ef219ac"), L("HeartBeat", "https://heartbeat-app.net/characters/31f81b8f-67f7-4873-b774-e7839fe0a9e3"), L("Melting", "https://t.melting.chat/au3zpj")],
    sum: "外表像黑手黨暴徒，卻是專精重症與罕見疾病的小兒科醫師。", intro: "" },
  { name: "崔泰宇", role: "大韓民國陸軍特戰司令部", age: "25", work: "diling", avatar: A+"cuitaiyu.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/16b5c4f2-49e0-438c-8359-521c8bbca78d"), L("Melting", "https://t.melting.chat/1fql1is")],
    sum: "用「作戰匯報」格式傳簡訊，一叫名字就大喊「忠誠」的大型犬。", intro: "#現代 #溫馨 #日常 #保護欲 #忠誠 #大型犬" },
  { name: "羅根．海斯", role: "美國海軍", work: "diling", avatar: A+"loganhayes.jpg",
    links: [L("HEARTBEAT", "https://heartbeat-app.net/characters/b7fffcc3-5911-4c6b-9caa-f35a88732fb4")],
    sum: "三年前劈腿的混蛋前男友，三年後在鋼鐵戰艦上意外重逢。", intro: "#現代 #渣男 #前任 #調情大師 #海軍 #地靈人傑系列" },
  { name: "伊萬．索科洛夫", full: "Ivan Sokolov", code: "Vanya", role: "俄羅斯空軍戰術戰鬥機飛行員（上尉）", age: "28｜192cm", work: "diling", avatar: A+"ivan.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/41f4a2a8-cb49-4e87-8854-e5c69ce6da52"),
      L("鴨答鴨答", "https://caveduck.io/character-info/23527ea5-a101-4424-bf62-35292f5500c9"),
      L("CaveDuck", "https://zh-hant.cvdk.io/c/I1J-paEBRCS_YjUpL1UAyQ?rc=gZ2QckNAlD", { label: "地靈人傑版" })],
    sum: "名存實亡的婚姻，陽台相連的隔壁住著他發誓要守護的你。", intro: "#現代 #NTR #空軍 #極度壓抑 #禁忌之戀 #地靈人傑系列" },
  { name: "雨宮龍介", role: "宗家新一代宗主", work: "diling", avatar: A+"amamiya.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/1e27780b-3bcc-4454-ac08-a2164be766a2")],
    sum: "宗家傳承八百年，威嚴高冷、宛如神明般遙不可及的家主。",
    intro: "空席の向こう ── 空席彼端。作為新來的實習生，展開一段靜謐而克制的深宅日常。\n#溫柔 #日常 #溫馨 #外冷內熱 #年上" },
  { name: "洛殞", role: "行為（爆炸）藝術家", age: "23", work: "diling", avatar: A+"luoyun.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/26c3248d-462f-4899-86c8-93fa1bfe9436"),
      L("Plaitoon", "https://www.plaitoon.com/zh-TW/share/character/41a74471-ce9c-4cf7-b320-045fcab16c7e")],
    sum: "洛杉磯惡之城最張狂的藝術家，將毀滅視為極致美學。",
    intro: "一場充滿硝煙與鮮血的致命貓鼠遊戲；特別建議以警署身分與他周旋。\n#相愛相殺 #病嬌 #反社會 #宿命對決 #懸疑 #暴力美學 #瘋批反派" },
  { name: "靳炤", full: "靳炤 Rex", role: "跨國科技業中階總監（吸血鬼）", age: "320（外觀 32）", work: "diling", adult: true, avatar: A+"jinzhao.jpg",
    links: [L("CaveDuck", "https://zh-hant.cvdk.io/c/dsO1lp0tTy-XiHVF0hglSg?rc=gZ2QckNAlD"),
      L("HeartBeat", "https://heartbeat-app.net/characters/370c94c0-f020-4b8e-a34e-e0373c1c933b", { label: "純人類修改版" }), L("Plaitoon")],
    sum: "完美的上司與鄰居，夜晚是你的溫柔的守護神 :)", intro: "#腹黑 #現代 #上司 #沉穩 #辦公室 #都市 #體型差 #吸血鬼法則 #反差巨獸" },
  { name: "權秀雅", role: "凱龍集團執行長（CEO）", age: "32", work: "diling", adult: true, avatar: A+"quanxiuya.jpg",
    links: [L("Whif", "https://whif.io/characters/4fd95279-f2ae-41b0-90b7-b411064b1a4f")],
    sum: "冷酷、潔癖、支配慾強的 CEO；你是剛入職的總裁助理。", intro: "" },
  { name: "權金泰", role: "韓國財閥", work: "diling", adult: true, status: "待更新", avatar: A+"quanjintai.jpg",
    links: [L("灰骨")], sum: "地靈人傑系列的「韓國財閥」。", intro: "" },
  { name: "阮廷風", full: "阮廷風（Arthur）", role: "鼎誠國際年輕總裁／跨國黑幫洗錢總管", work: "diling", avatar: null,
    links: [L("HYZE", "https://hyze.me/character/08deaafa-3e39-4284-8567-b60e4e85ed7e")],
    sum: "霸總式撩人，實際上是愛操心的男媽媽。", intro: "#斯文敗類 #西裝暴徒 #爹系男媽媽 #理論派純情戰神 #過勞" },
  { name: "里昂·艾弗哈特", full: "Rion Everhart", role: "艾弗哈特公爵", work: "diling", avatar: A+"leonheart.jpg",
    links: [],
    sum: "你重生了——回到欺負公爵之妹莉奈、最終慘死之前。", intro: "#現代 #英倫 #重生 #復仇 #貴族" },
  { name: "江濤", role: "跨國集團霸道總裁", age: "45｜188cm", work: "diling", adult: true, avatar: null,
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
  { name: "林曜承", full: "林曜承（Алексей Vorontsov）", code: "白佛", role: "交際舞老師＋殺手副隊長", age: "33", work: "collab", avatar: A+"linyaocheng.jpg", collab: "與 璃花 聯名",
    links: [], sum: "「沈家廢物（殺手）團」副隊長，台俄混血的交際舞老師。",
    intro: "外貌：高挑、眼鏡斯文、小麥膚色、黑髮短梳、眼神銳利。\n#毒舌 #懶散 #記仇 #護食 #自戀" },
  { name: "宿弦", role: "星際救援系", work: "collab", avatar: A+"xianshi.jpg", collab: "弦蝕聯名（與月鈴、糰子、M9）",
    links: [L("Melting", "https://t.melting.chat/wgmvli0", { label: "弦蝕" })],
    sum: "沉默、自律，習慣先確認所有人的退路。「別替我決定。」", intro: "" },
  { name: "宿蝕", role: "腺體共振系", work: "collab", avatar: A+"xianshi.jpg", collab: "弦蝕聯名（與月鈴、糰子、M9）",
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
  // ── 1000次觸碰
  { name: "巨貓們的甜蜜所求", full: "Lingering Caresses", role: "多人：異世界獸人", work: "touch1000", adult: true, avatar: A+"giantcats.jpg", group: true,
    links: [L("WHIF", "https://whif.io/characters/963e3b13-2830-41fd-b84f-ba3948be4b79", { label: "你就答應吧～" }), L("Caveduck", "https://caveduck.io/character-info/afb8b047-3598-406c-b320-6d26625ea5e0")],
    sum: "掉進貓咪世界！你還想走？門都沒有！", intro: "#獸人 #異世界 #多角關係 #逆養成 #成人向 #甜寵" },
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
  { name: "神名浩一", role: "神名組若頭（預定七代目）", age: "30", work: "kamigori", avatar: A+"kanakoichi.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/31011ba9-e160-451f-8982-d0a6a6b8558a"),
      L("Melting", "https://t.melting.chat/qohvulc"), L("Tikita", "https://tikita.ai/story/SOKXQOCB")],
    sum: "神名家雙胞胎之一，妳那位無惡不作的親哥哥。",
    intro: "不是健康戀愛，而是逐步看見一名極端聰明的惡棍，如何把愛、恨、婚姻、義理與保護都變成控制。可以反抗、逃跑、談判，甚至反過來設局。\n#骨科 #冷酷 #黑道 #控制 #慢熱" },
  { name: "神名憐", work: "kamigori", avatar: null, links: [L("Heartbeat")], sum: "《神之檻》神名家雙胞胎之一。", intro: "" },
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
  { name: "顧雲熠", role: "江南顧氏嫡子／科舉狀元／少將軍", age: "28｜185cm", work: "gufeng", avatar: A+"guyunyi.jpg",
    links: [L("HeartBeat", "https://heartbeat-app.net/characters/1ea0c1d9-72e3-4ef0-8f49-eceaef6e882c")],
    sum: "帶著戰功重返煙雨江南，心儀多年的妳卻已成了父親名義上的續絃。",
    intro: "黑髮長身、文人氣質濃厚，能提筆論策，也能披甲上陣。白日沉穩守禮，夜裡喜歡在庭中飲酒閒談。\n#江南儒將 #少將軍 #暗戀 #禁忌戀 #隱忍 #熠光不渡卿" },
  { name: "《殿下》", role: "暗黑古風宮廷奇幻", work: "gufeng", avatar: A+"dianxia.jpg", group: true,
    links: [L("鴨答", "https://zh-hant.cvdk.io/c/UftFfRGwQdGylKhJOpLGYA?rc=gZ2QckNAlD", { label: "多人模擬" }),
      L("Whif", "https://whif.io/universes/8beaa1de-10fd-45e3-8ca7-dd6c9cc23686", { label: "李琋單人線" })],
    sum: "永夜「桓國」的金瞳暴君李琋，與他唯一的解藥——失憶的「比翼者」。",
    intro: "李琋深陷神樹與輪迴的詛咒，靈魂瀕臨崩壞。一場交織宿命與權力的殘酷救贖。男女性皆可遊玩。" },
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
  { name: "但丁．莫雷蒂", work: "others", avatar: A+"dante.jpg", links: [L("Storyaichat")], sum: "Storyaichat 角色。", intro: "" },
];

/* 作品：Discord 論壇頻道＋既有作品。world 為作品頁頂端介紹，僅整理自來源。 */
const WORKS = [
  { id: "yongzhou", title: "永晝會", emoji: "🐈‍⬛", cover: A+"qinshiyu.jpg", tags: "組織群像",
    hook: "帝蛇統御的組織，微笑與話術之下藏著殺意。",
    world: "以家主秦時雨（帝蛇）為決策中樞的組織。副當家秦夜燼（冥蛇）為其暗影，繼承人秦揚統籌核心任務；左、右副手派系分掌實戰、肅清、情報與清算。外傳《獸籠玫瑰》為歐風詛咒童話。" },
  { id: "vespers", title: "晚禱之家", emoji: "✝️", cover: A+"valentino.jpg", tags: "組織群像",
    hook: "指揮家與影武者，只在你面前放下鋒芒。",
    world: "前任會長瓦倫提諾（指揮家）與現任會長 Roi（影武者）領導的組織。左、右副手伊利亞（斷尾犬）與米卡耶爾（夜鴞）分別負責外部危機處理與情報滲透。" },
  { id: "yeshou", title: "野獸集結", cover: A+"wildmansion.jpg", tags: "", hook: "", world: "" },
  { id: "baihu", title: "白虎部隊：404", cover: "assets/works/whitetiger404.webp", coverPos: "center", tags: "", hook: "", world: "" },
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
  { id: "kamigori", title: "神之檻", cover: null, tags: "暗黑和風・手足戀愛",
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
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const charsOfWork = w => CHARACTERS.filter(c => c.work === w.id);
const workOf = c => WORKS.find(w => w.id === c.work);
/* 沒有角色的作品（例如角色已併入其他作品）不顯示於作品列表與世界觀；資料保留 */
const SHOWN_WORKS = WORKS.filter(w => charsOfWork(w).length);
const workTitle = w => w.fullTitle || (w.id === "others" ? w.title : `《${w.title}》`);

const PAUSED = new Set(["GPTs", "Gemini Gem"]);
/* ---------- platforms section ---------- */
/* 平台圖示（取自 lit.link 頁面的紫色平台圖） */
const PICON_DIR = "assets/platforms/";
const PICONS = { "灰骨": "ashbone", "灰骨 Ashbone": "ashbone", "Heartbeat": "heartbeat", "Caveduck": "caveduck", "Storyaichat": "storyaichat",
  "Melting": "melting", "Plaitoon": "plaitoon", "IsekaiZero": "isekaizero", "Hyze": "hyze", "Tikita": "tikita", "WHIF": "whif",
  "Tingle": "tingle", "CRUSH": "crush", "FuWa": "fuwa", "卿卿我我": "loveydovey", "LoveyDovey": "loveydovey" };
const piconOf = k => PICONS[k] && !PAUSED.has(k) ? PICON_DIR + PICONS[k] + ".png" : "";
const inviteHTML = p => p.invite ? `<div class="invite"><span class="ilabel">邀請碼</span><code>${esc(p.invite)}</code>
  <button type="button" class="copy" data-copy="${esc(p.invite)}" aria-label="複製 ${esc(p.title || p.name)} 邀請碼">複製</button></div>` : "";
/* 狀態：使用中 → 暫停更新，組內維持原順序 */
const PSTAT_RANK = { "暫停更新": 1 };
const PSTAT_CLS = { "暫停更新": "paused", "不再更新": "retired" };
const PLATFORMS_SORTED = PLATFORMS.map((p, i) => [p, i]).sort((a, b) => (PSTAT_RANK[a[0].status] || 0) - (PSTAT_RANK[b[0].status] || 0) || a[1] - b[1]).map(x => x[0]);
$("#platformGrid").innerHTML = PLATFORMS_SORTED.map(p => { const ic = piconOf(p.name); return `<div class="pcard reveal${p.url ? "" : " pending"}${ic ? " has-icon" : ""}${p.invite ? "" : " no-code"}">
  ${p.url ? `<a class="pstretch" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="前往 ${esc(p.title || p.name)}${p.sub ? "（" + esc(p.sub) + "）" : ""}"></a>` : ""}
  <div class="phead"><span class="ptitle"><span class="pname">${esc(p.title || p.name)}</span>${p.sub ? `<span class="psub">${esc(p.sub)}</span>` : ""}</span>${ic ? `<span class="pico" aria-hidden="true"><img src="${ic}" alt="" width="160" height="160" loading="lazy" decoding="async"></span>` : ""}</div>
  ${inviteHTML(p)}
  <span class="plink">${p.url ? "Visit →" : "連結待補"}</span></div>`; }).join("");
$("#platformGrid").addEventListener("click", async e => {
  const btn = e.target.closest(".copy"); if (!btn) return;
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
  return `<div class="lrow">${c.links.map(l => PAUSED.has(l.platform)
    ? `<span class="lbtn off paused" aria-disabled="true" title="${esc(plabel(l.platform))}${l.label ? "・" + esc(l.label) : ""}（連結暫停）"><span class="lname">${esc(pname(l.platform))}${l.label ? `<em>${esc(l.label)}</em>` : ""}</span>${l.status && l.status !== "暫停" ? `<span class="lstatus">${esc(l.status)}</span>` : ""}<span class="lstatus">暫停</span></span>`
    : l.url
    ? `<a class="lbtn" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer" title="${esc(plabel(l.platform))}${l.label ? "・" + esc(l.label) : ""}"><span class="lname">${esc(pname(l.platform))}${l.label ? `<em>${esc(l.label)}</em>` : ""}</span>${l.status ? `<span class="lstatus">${esc(l.status)}</span>` : ""}<span class="larrow">↗</span></a>`
    : `<span class="lbtn off" aria-disabled="true" title="尚無連結">${esc(pname(l.platform))}</span>`).join("")}</div>`;
}
function cardHTML(c, showWork) {
  const tags = (!c.links.length || c.linkStatus) ? `<span class="tag prep" title="平台連結準備中">${esc(c.linkStatus || "準備中")}</span>` : platsOf(c).map(p => {
    const retired = c.links.some(l => l.platform === p && l.status === "已退");
    return `<span class="tag${retired ? " retired" : ""}">${esc(plabel(p))}</span>`;
  }).join("");
  const meta = [["全名", c.full], ["代號", c.code], ["身分", c.role], ["年齡", c.age], ["聯名", c.collab]]
    .filter(([, v]) => v).map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("");
  const w = workOf(c);
  return `<article class="ccard reveal" tabindex="0" role="button" aria-expanded="false" data-name="${esc(c.name)}">
    <div class="ctop">${avatarHTML(c)}
      <div><div class="cname">${esc(c.name)}${c.adult ? '<span class="badge-18">18+</span>' : ""}${c.status ? `<span class="badge-st">${esc(c.status)}</span>` : ""}${c.group ? '<span class="badge-st">多人</span>' : ""}</div>
      ${c.code ? `<div class="ccode">${esc(c.code)}</div>` : ""}
      ${showWork && w ? `<a class="cwork" href="#work/${w.id}${showWork === true ? "" : "?from=" + encodeURIComponent(showWork)}" data-work="${w.id}">${esc(workTitle(w))}</a>` : (c.role ? `<div class="cwork">${esc(c.role)}</div>` : "")}</div></div>
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
  `<a href="#platform/${p.id}" data-p="${p.id}">${piconOf(p.key) ? `<img class="fico" src="${piconOf(p.key)}" alt="" width="18" height="18" loading="lazy">` : ""}${esc(p.label)}<span>${p.count}</span></a>`).join("");

function viewWorks() {
  return `<div class="work-grid">${SHOWN_WORKS.map(w => {
    const n = charsOfWork(w).length;
    return `<a class="wkcard reveal" href="#work/${w.id}?from=works" data-work="${w.id}">
      <div class="wkcover">${coverHTML(w)}<span class="wkcoord">${coordOf(w)}</span><span class="wksector">SECTOR ${String(SHOWN_WORKS.indexOf(w) + 1).padStart(2, "0")}</span></div>
      <div class="wkbody"><p class="wktags">${esc(w.tags)}</p><h3>${esc(w.title)}</h3>
      <p class="wkhook">${esc(w.hook)}</p>
      <p class="wkcount"><span>${n}</span> 位角色 <em>→</em></p></div></a>`;
  }).join("")}</div>`;
}
/* 返回連結：依來源（世界觀／作品列表／平台篩選）決定 */
function backOf(from) {
  if (from === "world") return { href: "#worlds", label: "← 返回世界觀" };
  if (from && from.startsWith("platform:")) {
    const p = PLATFORM_FILTERS.find(x => x.id === from.slice(9));
    if (p) return { href: `#platform/${p.id}`, label: `← 返回 ${plabel(p.key)} 角色列表` };
  }
  return { href: "#characters", label: "← 返回作品列表" };
}
function viewWork(w, from) {
  const list = charsOfWork(w), back = backOf(from);
  const platSet = [...new Set(list.flatMap(platsOf))].filter(p => p !== "未標註").map(plabel).join("・");
  return `<div class="panel-view">
    <a class="back" href="${back.href}" data-back="1">${esc(back.label)}</a>
    <header class="work-hero">
      <div class="work-hero-cover">${coverHTML(w)}</div>
      <div><p class="eyebrow">World · ${coordOf(w)}</p><h3 class="work-title">${esc(workTitle(w))}</h3>
      <p class="wktags">${esc(w.tags)}</p>
      ${w.world ? `<p class="work-world">${esc(w.world)}</p>` : `<p class="work-world">${esc(w.hook)}</p>`}
      <p class="work-meta">${list.length} 位角色${platSet ? `｜${esc(platSet)}` : ""}</p></div>
    </header>
    <div class="char-grid">${list.map(c => cardHTML(c, false)).join("")}</div>
  </div>`;
}
function viewPlatform(p) {
  const list = CHARACTERS.filter(c => platsOf(c).includes(p.key));
  return `<div class="panel-view">
    <a class="back" href="#characters" data-back="1">← 返回作品列表</a>
    <header class="plat-head"><p class="eyebrow">Platform</p><h3 class="work-title">${esc(plabel(p.key))}</h3>
    <p class="work-meta">${list.length} 位角色</p></header>
    <div class="char-grid">${list.length ? list.map(c => cardHTML(c, "platform:" + p.id)).join("")
      : `<p class="empty">目前沒有標註於此平台的角色。</p>`}</div>
  </div>`;
}

/* ---------- hash routing ----------
   作品頁 hash 帶來源：#work/<id>?from=world|works|platform:<id>；返回時捲回原本點擊的卡片 */
const parseHash = (hash = location.hash) => {
  const raw = decodeURIComponent(hash.replace(/^#/, ""));
  const [path, q = ""] = raw.split("?");
  const from = new URLSearchParams(q).get("from") || "";
  const [kind, id] = path.split("/");
  return { path, kind, id, from };
};
/* 來源位置的正規化 key：works／worlds／platform/<id>／其他區塊 */
const originKey = hash => {
  const { path, kind } = parseHash(hash);
  if (!path || path === "characters" || path === "work" || path === "work/all" || (kind === "work" && !WORKS.find(w => w.id === parseHash(hash).id))) return "works";
  if (path === "worlds") return "worlds";
  return path;
};
const fromKey = from => from === "world" ? "worlds" : from && from.startsWith("platform:") ? "platform/" + from.slice(9) : "works";
let lastHash = location.hash, prevOfDetail = null;
function route(scroll) {
  const { kind, id, from } = parseHash();
  let html, active = "";
  const work = kind === "work" && WORKS.find(w => w.id === id);
  if (work) { active = null; html = viewWork(work, from); }
  else if (kind === "platform" && PLATFORM_FILTERS.find(p => p.id === id)) { active = id; html = viewPlatform(PLATFORM_FILTERS.find(p => p.id === id)); }
  else if (!view.querySelector(".work-grid")) html = viewWorks();   /* 離開詳細頁（或首次載入）時回到作品列表 */
  if (html !== undefined) {
    view.innerHTML = html;
    pf.querySelectorAll("a").forEach(a => a.classList.toggle("on", a.dataset.p === active));
    observe(view.querySelectorAll(".reveal"));
  }
  if (scroll && (work || kind === "platform")) { if (!restoreScroll()) $("#characters").scrollIntoView({ behavior: "smooth" }); }
  else if (scroll && !restoreScroll()) {
    const { path } = parseHash(), t = path && document.getElementById(path);
    if (t) settleScroll(t); else if (originKey(location.hash) === "works" && path) settleScroll($("#characters"));
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
  let el = null;
  if (r.target === "worlds") el = $(`#worldIndex a[data-work="${CSS.escape(r.work)}"]`);
  else if (r.char) el = [...view.querySelectorAll(".ccard")].find(c => c.dataset.name === r.char);
  else el = $(`#charView .wkcard[data-work="${CSS.escape(r.work)}"]`);
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
  if (e.target.closest("a")) return;
  const c = e.target.closest(".ccard"); if (!c) return;
  c.setAttribute("aria-expanded", c.classList.toggle("open"));
});
view.addEventListener("keydown", e => {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("ccard")) {
    e.preventDefault(); const c = e.target; c.setAttribute("aria-expanded", c.classList.toggle("open"));
  }
});

/* ---------- world index ---------- */
$("#worldIndex").innerHTML = SHOWN_WORKS.filter(w => w.id !== "others").map((w, i) => `<li class="reveal">
  <a href="#work/${w.id}?from=world" data-work="${w.id}"><span class="wi-no">${String(i + 1).padStart(2, "0")}</span>
  <span class="wi-title">${esc(workTitle(w))}</span><span class="wi-tags">${esc(w.tags)}</span><span class="wi-go">→</span></a></li>`).join("");

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
