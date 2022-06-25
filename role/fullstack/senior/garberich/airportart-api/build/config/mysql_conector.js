"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conector = void 0;
const mysql_1 = __importDefault(require("mysql"));
exports.conector = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'airportart'
});
exports.conector.connect(err => {
    if (err)
        throw err;
    console.log("Connect to BD");
});
