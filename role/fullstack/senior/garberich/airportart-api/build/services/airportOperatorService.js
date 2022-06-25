"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = void 0;
const mysql_conector_1 = require("../config/mysql_conector");
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const airportOperator = {
        Id: 0,
        Name: ''
    };
    const sql = `Select * from AirportOperator where Id = ${id}`;
    return new Promise((resolve, reject) => {
        mysql_conector_1.conector.query(sql, function (err, result) {
            if (err)
                reject(err);
            if (result.length) {
                airportOperator.Id = result[0].Id;
                airportOperator.Name = result[0].Name;
                console.log(airportOperator);
                resolve(airportOperator);
            }
            else
                resolve(undefined);
        });
    });
});
exports.findById = findById;
