var express = require('express');
var router = express.Router();
var rating_dal = require('../dal/rating_dal');

/* GET ratings listing. */
router.get('/all', function(req, res, next) {
    rating_dal.getAll(function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('rating/rating_view_all', {ratings: result[0]});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('rating/rating_add');
});

router.get('/insert', function(req, res) {
    rating_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/rating/all');
        }
    });
});

router.get('/edit', function(req, res) {
    rating_dal.getinfo(req.query.user_id, req.query.book_id, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('rating/rating_update', {rating: result[0]}
            );
        }
    });
});

router.get('/update', function(req, res) {
    rating_dal.update(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/rating/all');
        }
    });
});

module.exports = router;
