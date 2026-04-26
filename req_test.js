const { spawn } = require('child_process');
const child = spawn('/usr/local/bin/python3', ['-c', 'import sys; import requests; print("Working: " + requests.__file__)'], {
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe']
});
child.stdout.on('data', d => console.log('OUT:', d.toString()));
child.stderr.on('data', d => console.error('ERR:', d.toString()));
