var express = require('express');
var router = express.Router();
var book_dal = require('../dal/book_dal');

/* GET books listing. */
router.get('/all', function(req, res, next) {
    book_dal.getAll(function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('book/book_view_all', {books: result[0]});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('book/book_add');
});

router.get('/insert', function(req, res) {
    book_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/book/all');
        }
    });
});

router.get('/edit', function(req, res) {
    book_dal.getinfo(req.query.book_id, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('book/book_update', {book: result[0]}
            );
        }
    });
});

router.get('/update', function(req, res) {
    book_dal.update(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/book/all');
        }
    });
});

router.get('/delete', function(req, res) {
    book_dal.delete(req.query.book_id, function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/book/all');
        }
    });
});

module.exports = router;
