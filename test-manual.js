const WebSocket = require('ws');
const client = new WebSocket('ws://127.0.0.1:18789');
client.on('open', () => {
    client.send(JSON.stringify({ 
        jsonrpc: '2.0', id: 1, method: 'connect', params: { auth: { token: 'e30911d1da921982f8917ce533eaa011216a01a7737979c4' } } 
    }));
});
client.on('message', data => {
    const msg = JSON.parse(data.toString());
    console.log('RECV:', msg);
    if (msg.event === 'connect.challenge') {
        client.send(JSON.stringify({
            jsonrpc: '2.0', id: 2, method: 'call', 
            params: { name: 'agents.message', args: { sessionKey: 'agent:main:main', message: 'hello from local' } }
        }));
    }
});
