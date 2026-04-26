const { JSDOM } = require('jsdom');
const dom = new JSDOM('<html><body><div id="learnFocusModal"><button id="startTestBtn">Test</button></div></body></html>');
const document = dom.window.document;
const btn = document.getElementById('startTestBtn');
console.log('Button found:', !!btn);
