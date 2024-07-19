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
exports.atualizarLivro = exports.deletarLivro = exports.consultarLivroId = exports.consultarLivro = exports.criarLivro = void 0;
const bookservice_1 = require("../service/bookservice");
const bookService = new bookservice_1.BookService();
function criarLivro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoLivro = yield bookService.criarLivro(req.body);
            res.status(201).json({
                mensagem: "Livro criado com sucesso!",
                book: novoLivro
            });
        }
        catch (error) {
            res.status(400).json({ message: error.mensage });
        }
    });
}
exports.criarLivro = criarLivro;
;
function consultarLivro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield bookService.consultarLivro();
            res.status(200).json({
                mensagem: "Livro encontrado com sucesso!",
                books: books
            });
        }
        catch (error) {
            res.status(400).json({ menssage: error.message });
        }
    });
}
exports.consultarLivro = consultarLivro;
;
function consultarLivroId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield bookService.consultarLivroId(req.query.id);
            res.status(200).json({
                mensagem: "Livro encontrado com sucesso!",
                book: book
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.consultarLivroId = consultarLivroId;
;
function deletarLivro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield bookService.deletarLivro(req.body);
            res.status(200).json({
                mensagem: "Livro deletado com sucesso!",
                book: book
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.deletarLivro = deletarLivro;
;
function atualizarLivro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoLivro = bookService.atualizarLivro(req.body);
            res.status(201).json({
                mensagem: "Livro atualizado com sucesso!",
                book: novoLivro
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
exports.atualizarLivro = atualizarLivro;
;
