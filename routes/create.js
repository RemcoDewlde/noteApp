const express = require('express');
const router = express.Router();
const ns = require('../bin/notes');

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('create', {title: 'note app'});
});
router.post('/submit', function (req, res) {
    let notes = ns.fetchNotes();
    let note = {
        title: req.body.title,
        body: req.body.note
    };
    // error handeling double record
    let doubleNotAllowed = notes.filter(
        (note) => note.title === req.body.title
    );
    if (doubleNotAllowed.length === 0) {
        notes.push(note);
        ns.saveNotes(notes);
    } else {
        res.redirect('/create');
    }
    res.redirect('/');

});
module.exports = router;


router.post('/submit', function (req, res) {
    let notes = ns.fetchNotes();
    let note = {
        title: req.body.title,
        body: req.body.note
    };
    ns.saveNotes(notes);

    res.redirect('/');

});
