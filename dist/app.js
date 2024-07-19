"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookcontroller_1 = require("./controller/bookcontroller");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
function logInfo() {
    console.log(`API em execução no URL: http: localhost${PORT}`);
}
app.post("/api/books", bookcontroller_1.criarLivro);
app.get("/api/books", bookcontroller_1.consultarLivro);
app.get("/app/books/:id", bookcontroller_1.consultarLivroId);
app.put("/app/books/:id", bookcontroller_1.atualizarLivro);
app.delete("app/books/:id", bookcontroller_1.deletarLivro);
