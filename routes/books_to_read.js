var express = require('express');
var router = express.Router();
var books_to_read_dal = require('../dal/books_to_read_dal');

/* GET users listing. */
router.get('/all', function(req, res, next) {
    books_to_read_dal.getAll(function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('books_to_read/books_to_read_view_all', {books_to_read: result[0]});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('books_to_read/books_to_read_add');
});

router.get('/insert', function(req, res) {
    books_to_read_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/books-to-read/all');
        }
    });
});

module.exports = router;
