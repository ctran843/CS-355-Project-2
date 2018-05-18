var express = require('express');
var router = express.Router();
var books_reading_dal = require('../dal/books_reading_dal');

/* GET users listing. */
router.get('/all', function(req, res, next) {
    books_reading_dal.getAll(function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('books_reading/books_reading_view_all', {books_reading: result[0]});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('books_reading/books_reading_add');
});

router.get('/insert', function(req, res) {
    books_reading_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/books-reading/all');
        }
    });
});

module.exports = router;
