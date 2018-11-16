console.log('[app.js] Started');
const fs = require('fs');

try {
    fs.appendFileSync('statements.txt', 'const / let');
}
catch (e) {
    console.log('[ERROR]:', e);
}

console.log('[app.js] file was appended');