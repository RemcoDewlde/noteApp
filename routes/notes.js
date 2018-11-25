const express = require('express');
const router = express.Router();
const notes = require('../bin/notes');

/* GET users listing. */
router.get('/', function (req, res, next) {
    let allNotes = notes.getAll();
    res.render('index', {'notes': allNotes, 'title': 'note app'});

});

module.exports = router;
