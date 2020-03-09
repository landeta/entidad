"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_mysql_1 = __importDefault(require("promise-mysql"));
//const { mysql } = require('mysql');
var keys_1 = __importDefault(require("./keys"));
// const { promisify } = require('util');
var pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.getConnection()
    .then(function (connection) {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});
//   pool.query = promisify(pool.query);
exports.default = pool;
