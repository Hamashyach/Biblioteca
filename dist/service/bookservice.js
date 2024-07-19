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
exports.BookService = void 0;
const BookRepository_1 = require("../repository/BookRepository");
class BookService {
    constructor() {
        this.bookRepository = new BookRepository_1.BookRepository();
    }
    criarLivro(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, publishedDate, isbn, pages, language, publisher } = bookData;
            if (!title || !author || publishedDate || !isbn || !pages || !language || !publisher) {
                throw new Error("Infomações incompletas!");
            }
            const novoLivro = yield this.bookRepository.criarLivro(title, author, publishedDate, isbn, pages, language, publisher);
            console.log("Service - Insert ", novoLivro);
            return novoLivro;
        });
    }
    consultarLivroId(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!bookData) {
                throw new Error("Informações incompletas");
            }
            const id = parseInt(bookData, 10);
            const book = yield this.bookRepository.filtrarLivroPorId(id);
            console.log("Service - this.filtrarLivros", book);
            return book;
        });
    }
    consultarLivro() {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.bookRepository.filtrarTodosLivros();
            console.log("Service - Filtrar todos", book);
            return book;
        });
    }
    atualizarLivro(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, author, publishedDate, isbn, pages, language, publisher } = bookData;
            if (!title || !author || !publishedDate || !isbn || !pages || !language || !publisher || !id) {
                throw new Error("Informações incompletas");
            }
            const book = yield this.bookRepository.atualizarLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
            console.log("Service - Update", book);
            return book;
        });
    }
    deletarLivro(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, author, publishedDate, isbn, pages, language, publisher } = bookData;
            if (!title || !author || !publishedDate || !isbn || !pages || !language || !publisher || !id) {
                throw new Error("Informações incompletas");
            }
            const book = yield this.bookRepository.deletarLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
            console.log("Service - Update", book);
            return book;
        });
    }
}
exports.BookService = BookService;
