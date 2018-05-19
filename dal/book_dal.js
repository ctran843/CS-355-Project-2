var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'CALL book_getall();';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'CALL book_add(?, ?, ?, ?);';

    var queryData = [params.title, params.author, params.genre, params.date_published];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(book_id, callback) {
    var query = 'SELECT * FROM book WHERE book_id = ?;';
    var queryData = [book_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE book SET title = ?, author = ?, genre = ?, date_published = ? WHERE book_id = ?';

    var queryData = [params.title, params.author, params.genre, params.date_published, params.book_id];

    connection.query(query, queryData, function(err, result) {
            callback(err, result);
    });
};

exports.delete = function(book_id, callback) {
    var query = 'DELETE FROM book WHERE book_id = ?;';
    var queryData = [book_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};