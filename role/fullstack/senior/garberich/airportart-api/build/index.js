"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const airports_1 = __importDefault(require("./routes/airports"));
const app = (0, express_1.default)(); // Se inicia Express
app.use(express_1.default.json()); // Middleware que transforma la req.body a json
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log("Alguien pingeo");
    res.send('pong');
});
app.get('/', (_req, res) => {
    res.send("Hola");
});
// Se inicia la aplicacion
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
app.use('/api/airtport/', airports_1.default);
