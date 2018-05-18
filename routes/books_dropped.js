var express = require('express');
var router = express.Router();
var books_dropped_dal = require('../dal/books_dropped_dal');

/* GET users listing. */
router.get('/all', function(req, res, next) {
    books_dropped_dal.getAll(function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('books_dropped/books_dropped_view_all', {books_dropped: result[0]});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('books_dropped/books_dropped_add');
});

router.get('/insert', function(req, res) {
    books_dropped_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/books-dropped/all');
        }
    });
});


module.exports = router;
