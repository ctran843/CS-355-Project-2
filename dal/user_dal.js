var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'CALL user_getall();';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'CALL user_add(?, ?, ?);';

    var queryData = [params.username, params.password, params.email];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(user_id, callback) {
    var query = 'SELECT * FROM user WHERE user_id = ?;';
    var queryData = [user_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE user SET username = ?, email = ?, password = ? WHERE user_id = ?';

    var queryData = [params.username, params.email, params.password, params.user_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.delete = function(user_id, callback) {
    var query = 'DELETE FROM user WHERE user_id = ?;';
    var queryData = [user_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};