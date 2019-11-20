const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [e];
    }
};

let getAll = () => {
    return fetchNotes();
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let delNote = (title) => {
    let notes = fetchNotes();
    let filter = notes.find(function (note, i) {
        if (note.title === title) {
            index = i;
            return i
        }
    });
    if (typeof index === undefined) {
        console.log('no index')
    } else {
        notes.splice(index, 1);
    }
    saveNotes(notes);
    return '';
};

module.exports = {
    getAll,
    saveNotes,
    fetchNotes,
    delNote
};
