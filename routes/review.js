var express = require('express');
var router = express.Router();
var review_dal = require('../dal/review_dal');

/* GET users listing. */
router.get('/all', function(req, res, next) {
    review_dal.getAll(function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('review/review_view_all', {reviews: result[0]});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('review/review_add');
});

router.get('/insert', function(req, res) {
    review_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/review/all');
        }
    });
});

module.exports = router;
