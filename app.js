console.log('[app.js] Started');
const fs = require('fs');
const os = require('os');
const lo = require('lodash');
const notes = require('./notes.js');

console.log(notes);

let user = os.userInfo();
try {
    fs.appendFileSync('statements.txt', 'hello '+ user.username );
    console.log('[app.js] file was appended');
}
catch (e) {
    console.log('[ERROR]:', e);
}


