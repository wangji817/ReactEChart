const child_process = require('child_process');

async function start() {
    if (typeof start !== 'string') {
        console.log('开始程序 pm2 start service.js && npm run start');
    }

    var proc = child_process.exec('pm2 start service.js', (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
    });

    var proc = child_process.exec('yarn start', (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
    });
}

start();