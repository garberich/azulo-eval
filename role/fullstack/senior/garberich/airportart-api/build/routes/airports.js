"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const airportOperatorService = __importStar(require("../services/airportOperatorService"));
const airportService = __importStar(require("../services/airportService"));
const router = express_1.default.Router();
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const airport = yield airportService.findById(Number(req.params.id));
    return (airport != null) ? res.send(airport) : res.status(404).send("Aeropuerto no existe");
}));
router.post('/move/:idairport/:idoperator', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const airportOperator = yield airportOperatorService.findById(Number(req.params.idoperator));
    const airport = yield airportService.findById(Number(req.params.idairport));
    if (airportOperator == null)
        return res.status(404).send("Operador no existe");
    if (airport == null)
        return res.status(404).send("Aeropuerto no existe");
    try {
        airportService.updateAirportOperator(Number(req.params.idairport), Number(req.params.idoperator));
        return res.status(200).send("Registro actualizado");
    }
    catch (e) {
        return res.status(404).send(e.message);
    }
}));
exports.default = router;
