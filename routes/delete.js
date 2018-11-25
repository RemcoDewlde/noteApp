const express = require('express');
const router = express.Router();
const notes = require('../bin/notes');

/* GET users listing. */
router.post('/note', function (req, res, next) {
    notes.delNote(req.body.title);
    res.redirect('/')
});

module.exports = router;
