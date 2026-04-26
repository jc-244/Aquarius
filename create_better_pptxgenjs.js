const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5

// Helper for shadow
const makeShadow = () => ({ type: "outer", color: "000000", blur: 6, offset: 2, angle: 90, opacity: 0.15 });

// Palette: Midnight Executive modified
const colors = {
  bg: "FFFFFF",
  primary: "1E2761",   // Navy
  accent: "C2185B",    // Magenta/Pink accent
  textDark: "212121",
  textLight: "666666",
  textMute: "999999",
  card: "F8F9FA",
  cardBorder: "E0E0E0"
};

pres.defineSlideMaster({
  title: "SLIDE_MASTER",
  background: { color: colors.bg },
  objects: [
    { rect: { x: 0, y: 0, w: '100%', h: 0.1, fill: { color: colors.primary } } }, // Top bar
    { rect: { x: 0, y: 7.2, w: '100%', h: 0.3, fill: { color: colors.primary } } }, // Footer bar
    { text: { text: "哥伦比亚大学 vs 纽约大学", options: { x: 0.5, y: 7.25, w: 4, h: 0.2, color: "FFFFFF", fontSize: 10, fontFace: "Helvetica" } } }
  ]
});

// Slide 1: Title
let slide1 = pres.addSlide({ masterName: "SLIDE_MASTER" });
slide1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 4.5, h: 7.5, fill: { color: colors.primary } });
slide1.addText("极简美学版学术研究", { x: 0.5, y: 2.5, w: 3.5, h: 0.5, color: colors.accent, fontSize: 16, bold: true, fontFace: "Georgia", italic: true });
slide1.addText("双城记\n哥伦比亚大学 vs 纽约大学", { x: 0.5, y: 3.0, w: 8, h: 2, color: "FFFFFF", fontSize: 44, bold: true, fontFace: "Arial Black", breakLine: true });
slide1.addText("在世界的中心，曼哈顿孕育了两所顶尖的高等学府。", { x: 5.5, y: 3.5, w: 7, h: 1, color: colors.textDark, fontSize: 24, fontFace: "Helvetica" });

// Slide 2: Columbia
let slide2 = pres.addSlide({ masterName: "SLIDE_MASTER" });
slide2.addText("Columbia University", { x: 0.5, y: 0.6, w: 10, h: 0.8, color: colors.primary, fontSize: 36, bold: true, fontFace: "Arial Black" });
slide2.addText("晨边高地的古典王冠", { x: 0.5, y: 1.4, w: 10, h: 0.4, color: colors.accent, fontSize: 18, fontFace: "Georgia", italic: true });

slide2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.2, w: 5.8, h: 4.2, fill: { color: colors.card }, line: { color: colors.cardBorder, width: 1 }, shadow: makeShadow() });
slide2.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.2, w: 0.1, h: 4.2, fill: { color: colors.primary } });
slide2.addText("校园与氛围", { x: 0.8, y: 2.4, w: 5, h: 0.5, color: colors.textDark, fontSize: 20, bold: true });
slide2.addText([
  { text: "标志性的封闭式传统校园 (Campus-based)", options: { bullet: true, breakLine: true } },
  { text: "壮丽的新古典主义建筑，保留一块静谧之地", options: { bullet: true, breakLine: true } },
  { text: "严谨庄重的常春藤学术圣地", options: { bullet: true } }
], { x: 0.8, y: 3.0, w: 5.2, h: 3, color: colors.textLight, fontSize: 16, valign: "top", paraSpaceAfter: 10 });

slide2.addShape(pres.shapes.RECTANGLE, { x: 6.8, y: 2.2, w: 5.8, h: 4.2, fill: { color: colors.card }, line: { color: colors.cardBorder, width: 1 }, shadow: makeShadow() });
slide2.addShape(pres.shapes.RECTANGLE, { x: 6.8, y: 2.2, w: 0.1, h: 4.2, fill: { color: colors.primary } });
slide2.addText("学术与核心", { x: 7.1, y: 2.4, w: 5, h: 0.5, color: colors.textDark, fontSize: 20, bold: true });
slide2.addText([
  { text: "招牌 Core Curriculum，必读西方经典", options: { bullet: true, breakLine: true } },
  { text: "强势领域：新闻学、法学、商科", options: { bullet: true, breakLine: true } },
  { text: "适合人群：喜欢严谨学究氛围的精英", options: { bullet: true } }
], { x: 7.1, y: 3.0, w: 5.2, h: 3, color: colors.textLight, fontSize: 16, valign: "top", paraSpaceAfter: 10 });

// Slide 3: NYU
let slide3 = pres.addSlide({ masterName: "SLIDE_MASTER" });
slide3.addText("New York University", { x: 0.5, y: 0.6, w: 10, h: 0.8, color: "57068C", fontSize: 36, bold: true, fontFace: "Arial Black" }); // NYU Purple
slide3.addText("格林威治村的无界先锋", { x: 0.5, y: 1.4, w: 10, h: 0.4, color: colors.accent, fontSize: 18, fontFace: "Georgia", italic: true });

slide3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.2, w: 5.8, h: 4.2, fill: { color: colors.card }, line: { color: colors.cardBorder, width: 1 }, shadow: makeShadow() });
slide3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.2, w: 0.1, h: 4.2, fill: { color: "57068C" } });
slide3.addText("校园与精神", { x: 0.8, y: 2.4, w: 5, h: 0.5, color: colors.textDark, fontSize: 20, bold: true });
slide3.addText([
  { text: "完全的开放式校园 (City-based university)", options: { bullet: true, breakLine: true } },
  { text: "以华盛顿广场为中心，融入曼哈顿繁忙街区", options: { bullet: true, breakLine: true } },
  { text: "自由、多元、极具创造力的街头氛围", options: { bullet: true } }
], { x: 0.8, y: 3.0, w: 5.2, h: 3, color: colors.textLight, fontSize: 16, valign: "top", paraSpaceAfter: 10 });

slide3.addShape(pres.shapes.RECTANGLE, { x: 6.8, y: 2.2, w: 5.8, h: 4.2, fill: { color: colors.card }, line: { color: colors.cardBorder, width: 1 }, shadow: makeShadow() });
slide3.addShape(pres.shapes.RECTANGLE, { x: 6.8, y: 2.2, w: 0.1, h: 4.2, fill: { color: "57068C" } });
slide3.addText("学术与态度", { x: 7.1, y: 2.4, w: 5, h: 0.5, color: colors.textDark, fontSize: 20, bold: true });
slide3.addText([
  { text: "极强职业导向，毗邻华尔街与百老汇", options: { bullet: true, breakLine: true } },
  { text: "强势领域：帝势艺术学院、斯特恩商学院", options: { bullet: true, breakLine: true } },
  { text: "适合人群：崇尚实用的都市弄潮儿", options: { bullet: true } }
], { x: 7.1, y: 3.0, w: 5.2, h: 3, color: colors.textLight, fontSize: 16, valign: "top", paraSpaceAfter: 10 });


// Slide 4: Conclusion
let slide4 = pres.addSlide({ masterName: "SLIDE_MASTER" });
slide4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 13.33, h: 7.5, fill: { color: colors.primary } });
slide4.addText("纽约，总能容纳你所有的野心与梦想。", { x: 1, y: 2.5, w: 11.33, h: 1, color: "FFFFFF", fontSize: 36, bold: true, align: "center", fontFace: "Arial Black" });
slide4.addText("选择不同的学校，就是选择在纽约体验生活的一万种方式中，最适合你的那一种。", { x: 1, y: 3.8, w: 11.33, h: 1, color: "CADCFC", fontSize: 20, align: "center", fontFace: "Georgia", italic: true });


pres.writeFile({ fileName: "哥大与纽大_高级重制版.pptx" }).then(fileName => {
    console.log(`Created file: ${fileName}`);
    const os = require('os');
    const path = require('path');
    const fs = require('fs');
    const desktopPath = path.join(os.homedir(), 'Desktop', '哥大与纽大_高级重制版.pptx');
    fs.copyFileSync(fileName, desktopPath);
    console.log(`Copied to Desktop: ${desktopPath}`);
});
