var express = require('express');
var router = express.Router();
var books_completed_dal = require('../dal/books_completed_dal');

/* GET books_completed listing. */
router.get('/all', function(req, res, next) {
    books_completed_dal.getAll(function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('books_completed/books_completed_view_all', {books_completed: result[0]});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('books_completed/books_completed_add');
});

router.get('/insert', function(req, res) {
    books_completed_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/books-completed/all');
        }
    });
});

module.exports = router;
