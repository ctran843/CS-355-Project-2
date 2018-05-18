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