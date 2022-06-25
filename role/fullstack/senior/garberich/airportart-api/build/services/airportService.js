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
exports.findById = exports.updateAirportOperator = void 0;
const mysql_conector_1 = require("../config/mysql_conector");
const updateAirportOperator = (idAirport, idAirportOperator) => {
    const sql = `update Airport SET AirportOperatorId = ${idAirportOperator} Where Id = ${idAirport}`;
    mysql_conector_1.conector.query(sql, function (err, result) {
        if (err)
            throw err;
        // console.log(result)
        return (result);
    });
};
exports.updateAirportOperator = updateAirportOperator;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const airport = {
        Id: 0,
        Name: '',
        AirportOperatorId: 0,
        AirportCode: '',
        LocationId: 0,
        PriorityOrder: 0,
    };
    const sql = `Select * from Airport where Id = ${id}`;
    return new Promise((resolve, reject) => {
        mysql_conector_1.conector.query(sql, function (err, result) {
            if (err)
                reject(err);
            if (result.length) {
                airport.Id = result[0].Id;
                airport.Name = result[0].Name;
                airport.AirportOperatorId = result[0].AirportOperatorId;
                airport.AirportCode = result[0].AirportCode;
                airport.LocationId = result[0].LocationId;
                airport.PriorityOrder = Number(result[0].PriorityOrder);
                // console.log(airport)
                resolve(airport);
            }
            else
                resolve(undefined);
        });
    });
});
exports.findById = findById;
