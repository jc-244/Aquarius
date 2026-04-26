const targetUrl = 'https://google.serper.dev/search';
const payload = JSON.stringify({ q: 'Linear transformations and matrices' });
const headers = {
  'X-API-KEY': 'f2b8ffdb2fdb7f4f59e167810c87f8af49bc01b6',
  'Content-Type': 'application/json'
};

fetch(targetUrl, { method: 'POST', headers, body: payload })
  .then(res => res.json())
  .then(json => {
     if (json.organic) {
         console.log('✅ 搜索成功！');
         json.organic.slice(0, 3).forEach((item, i) => {
             console.log(`\n[${i+1}] 标题: ${item.title}`);
             console.log(`🔗 链接: ${item.link}`);
             console.log(`📝 摘要: ${item.snippet}`);
         });
     } else {
         console.log('❌ 搜索失败，API 返回:', json);
     }
  })
  .catch(err => console.error('请求出错:', err));