const pptxgen = require("pptxgenjs");
const fs = require('fs');
const path = require('path');
const os = require('os');

let pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5

// 高级极简配色方案 - Midnight Executive + Gold
const colors = {
  bg: "12141D",         // 深邃黑/深蓝
  primary: "1E2761",    // 海军蓝
  accent: "D4AF37",     // 奢华金
  textLight: "FFFFFF",  // 纯白
  textMute: "A0AAB2",   // 高级灰
  card: "1A1D29",       // 卡片底色
  cardBorder: "2A2F42",
};

// 预设背景图片 (使用高质量 Unsplash 摄影替代 AI 绘图)
const imgColumbia = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80"; 
const imgNYC = "https://images.unsplash.com/photo-1496442226666-8d4d0e57fe0c?w=1600&q=80";

// 定义 Master Slide
pres.defineSlideMaster({
  title: "BASE_MASTER",
  background: { color: colors.bg },
  objects: [
    { line: { x: 0.5, y: 7.0, w: 12.33, h: 0, line: { color: colors.cardBorder, width: 1 } } },
    { text: { text: "纽约双雄：Columbia vs NYU", options: { x: 0.5, y: 7.1, w: 4, h: 0.3, color: colors.textMute, fontSize: 10, fontFace: "Arial" } } },
    { text: { text: "© 2026 Presentation", options: { x: 9.33, y: 7.1, w: 3.5, h: 0.3, color: colors.textMute, fontSize: 10, align: "right", fontFace: "Arial" } } }
  ]
});

pres.defineSlideMaster({
  title: "IMAGE_RIGHT",
  background: { color: colors.bg },
  objects: [
    // 暗色渐变装饰
    { rect: { x: 0, y: 0, w: 0.1, h: 7.5, fill: { color: colors.accent } } },
    { line: { x: 0.5, y: 7.0, w: 5, h: 0, line: { color: colors.cardBorder, width: 1 } } },
    { text: { text: "Columbia vs NYU", options: { x: 0.5, y: 7.1, w: 4, h: 0.3, color: colors.textMute, fontSize: 10, fontFace: "Arial" } } }
  ]
});

// 20页演讲幻灯片数据
const slidesData = [
  { title: "双城记\n哥伦比亚大学 vs 纽约大学", sub: "一场关乎学术、城市与梦想的巅峰演讲", type: "title" },
  { title: "序言：曼哈顿的双子星", sub: "在世界之都，两所顶尖学府代表着两种截然不同的生活与教育哲学。", type: "quote" },
  { title: "演讲目录", sub: "01. 哥伦比亚大学：古典与底蕴\n\n02. 纽约大学：精神与先锋\n\n03. 核心维度对比\n\n04. 决策与指引", type: "list" },
  
  // Part 1: Columbia
  { title: "PART 01", sub: "Columbia University\n晨边高地的古典王冠", type: "section", img: imgColumbia },
  { title: "常春藤的百年积淀", sub: "成立于1754年，纽约历史最悠久的高等学府。\n庄重、严谨、精英主义的代名词，培养了无数政界与学术界领袖。", type: "content" },
  { title: "古典校园美学", sub: "拥有纽约市区罕见的传统封闭式校园。\n以洛氏图书馆为中心的新古典主义建筑群，在喧嚣中保留静谧。", type: "content" },
  { title: "核心课程的灵魂所在", sub: "Core Curriculum 是博雅教育的灵魂。\n每位本科生必读《荷马史诗》、苏格拉底，探讨最深刻的西方哲学。", type: "content" },
  { title: "无可争议的王者学科", sub: "新闻学（普利策奖诞生地）\n法学与商学（华尔街的黄埔军校）\n国际关系（联合国的智库后花园）", type: "list" },
  { title: "哥大人物画像", sub: "老派学者、政界先锋、学术极客。\n向内探索，深挖经典，气质沉稳。是象牙塔里最骄傲的学者。", type: "content" },
  
  // Part 2: NYU
  { title: "PART 02", sub: "New York University\n格林威治村的无界先锋", type: "section", img: imgNYC },
  { title: "以城市为名的大学", sub: "成立于1831年，全美最大的私立大学之一。\n务实、包容、充满颠覆性的创新精神。拥抱时代浪潮。", type: "content" },
  { title: "没有围墙的无界校园", sub: "“整个纽约就是我们的校园”\n没有大门，没有边界，教室隐于街道，与曼哈顿的脉搏同频共振。", type: "content" },
  { title: "多元活力的格林威治", sub: "以华盛顿广场公园为绝对核心。\n这里聚集着艺术家、创业者、街头艺人，生机勃勃地野蛮生长。", type: "content" },
  { title: "行业的极致跳板", sub: "帝势艺术学院 (Tisch)：奥斯卡导演与艺术大咖的摇篮\n斯特恩商学院 (Stern)：直通华尔街顶尖投行的金融快车", type: "list" },
  { title: "纽大人物画像", sub: "实干家、梦想家、艺术先锋。\n不甘于纸上谈兵，向外破局，在节奏最快的城市中敏锐捕捉一切机遇。", type: "content" },
  
  // Part 3: Compare
  { title: "PART 03", sub: "终极碰撞：我们该如何抉择？", type: "section" },
  { title: "地理与生活方式的对峙", sub: "哥大（上西区）：静谧、学术、安全、传统、阶级感。\n纽大（下城）：喧嚣、繁华、前卫、不夜城、烟火气。", type: "compare" },
  { title: "教育哲学与路径的殊途", sub: "哥大：向内探索，传承历史与理论，培养具有厚重历史观的思想领袖。\n纽大：向外破局，拥抱前沿与实践，培养解决现实问题的行动派。", type: "compare" },
  { title: "哪所学校真正适合你？", sub: "如果你有一颗老灵魂，向往常春藤的古典光环，选哥大。\n如果你充满野心，想第一时间握住时代的脉搏，选纽大。", type: "content" },
  
  // Part 4: Conclusion
  { title: "结语", sub: "纽约，总能容纳你所有的野心与梦想。\n选择不同的学校，就是选择在纽约体验生活的一万种方式中，\n最适合你的那一种。", type: "quote" }
];

// 生成Slide
slidesData.forEach((data, index) => {
  let slide;
  
  if (data.type === "title") {
    slide = pres.addSlide({ masterName: "BASE_MASTER" });
    slide.addText(data.title, { x: 1.5, y: 2.5, w: 10.33, h: 2, color: colors.textLight, fontSize: 52, bold: true, align: "center", fontFace: "Georgia" });
    slide.addText(data.sub, { x: 1.5, y: 4.8, w: 10.33, h: 1, color: colors.accent, fontSize: 24, align: "center", fontFace: "Arial", italic: true });
  } 
  else if (data.type === "section") {
    slide = pres.addSlide({ masterName: "IMAGE_RIGHT" });
    // 左侧文字
    slide.addText(data.title, { x: 1, y: 2, w: 5, h: 1, color: colors.accent, fontSize: 32, bold: true, fontFace: "Georgia" });
    slide.addText(data.sub, { x: 1, y: 3.5, w: 5, h: 2, color: colors.textLight, fontSize: 44, bold: true, fontFace: "Arial Black", breakLine: true });
    // 右侧大图占位(如果提供了img，否则填色块模拟)
    if(data.img) {
      slide.addImage({ path: data.img, x: 6.66, y: 0, w: 6.67, h: 7.5, sizing: { type: 'cover', w: 6.67, h: 7.5 } });
    } else {
      slide.addShape(pres.shapes.RECTANGLE, { x: 6.66, y: 0, w: 6.67, h: 7.5, fill: { color: "1A1D29" } });
      slide.addText("视觉影像区", { x: 6.66, y: 3.5, w: 6.67, h: 1, color: "333333", align: "center", fontSize: 24 });
    }
  }
  else if (data.type === "quote") {
    slide = pres.addSlide({ masterName: "BASE_MASTER" });
    slide.addText('"', { x: 1, y: 1.5, w: 2, h: 2, color: colors.accent, fontSize: 120, bold: true, fontFace: "Georgia" });
    slide.addText(data.sub, { x: 2, y: 2.5, w: 9.33, h: 3, color: colors.textLight, fontSize: 36, fontFace: "Georgia", italic: true, breakLine: true });
    slide.addText("— " + data.title, { x: 2, y: 5.5, w: 9.33, h: 1, color: colors.textMute, fontSize: 20, fontFace: "Arial" });
  }
  else {
    // Content / List / Compare
    slide = pres.addSlide({ masterName: "BASE_MASTER" });
    slide.addText("0" + (index + 1), { x: 0.8, y: 0.5, w: 1.5, h: 1, color: colors.accent, fontSize: 24, bold: true, fontFace: "Arial Black" });
    slide.addText(data.title, { x: 0.8, y: 1.5, w: 10, h: 1, color: colors.textLight, fontSize: 40, bold: true, fontFace: "Georgia" });
    
    // 内容背景卡片
    slide.addShape(pres.shapes.RECTANGLE, { 
      x: 0.8, y: 3.0, w: 11.5, h: 3.2, 
      fill: { color: colors.card }, 
      line: { color: colors.cardBorder, width: 1 } 
    });
    
    if (data.type === "list") {
      let bullets = data.sub.split('\n').filter(l => l.trim().length > 0)
        .map(text => ({ text: text, options: { bullet: { color: colors.accent }, breakLine: true } }));
      slide.addText(bullets, { x: 1.2, y: 3.2, w: 10.5, h: 2.8, color: colors.textLight, fontSize: 26, valign: "middle", paraSpaceAfter: 20 });
    } else {
      slide.addText(data.sub.replace(/\n/g, '\n\n'), { x: 1.2, y: 3.2, w: 10.5, h: 2.8, color: colors.textLight, fontSize: 26, valign: "middle", breakLine: true });
    }
  }
});

const fileName = "哥大与纽大_20页高定演讲版.pptx";
pres.writeFile({ fileName: fileName }).then(file => {
    const desktopPath = path.join(os.homedir(), 'Desktop', fileName);
    fs.copyFileSync(file, desktopPath);
    console.log(`PPT Created at: ${desktopPath}`);
});
