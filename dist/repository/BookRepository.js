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
exports.BookRepository = void 0;
const bookmodel_1 = require("../model/bookmodel");
const mysql_1 = require("../database/mysql");
class BookRepository {
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS books (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            publishedDate DATE NOT NULL,
            isbn VARCHAR(20) NOT NULL,
            pages INT NOT NULL,
            language VARCHAR(50) NOT NULL,
            publisher VARCHAR(255) NOT NULL
        )`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query executada com sucesso:', resultado);
            }
            catch (err) {
                console.error('Erro ao criar tabela');
            }
        });
    }
    criarLivro(title, author, publishedDate, isbn, pages, language, publisher) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO books (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [title, author, publishedDate, isbn, pages, language, publisher]);
                console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
                const book = new bookmodel_1.Book(resultado.insertId, title, author, publishedDate, isbn, pages, language, publisher);
                return new Promise((resolve) => {
                    resolve(book);
                });
            }
            catch (err) {
                console.error('Erro ao inserir o livro:', err);
                throw err;
            }
        });
    }
    filtrarLivroPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM books where id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Livro encontrado com sucesso Id: ', resultado);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error(`Falha ao localizar livro de ID ${id} gerando o erro ${err}`);
                throw err;
            }
        });
    }
    filtrarTodosLivros() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM books";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error(`Falha ao listar os livros, gerando o erro ${err}`);
                throw err;
            }
        });
    }
    deletarLivro(id, title, author, publishedDate, isbn, pages, language, publisher) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM books where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Livro deletado com sucesso ID: ', resultado);
                const book = new bookmodel_1.Book(id, title, author, publishedDate, isbn, pages, language, publisher);
                return new Promise((resolve) => {
                    resolve(book);
                });
            }
            catch (err) {
                console.error(`Falha ao deletar o livro de ID ${id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    atualizarLivro(id, title, author, publishedDate, isbn, pages, language, publisher) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE books set title = ?, author = ?, publishedDate = ?, isbn = ?, pages = ?, language = ?, publisher = ?, where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [title, author, publishedDate, isbn, pages, language, publisher, id]);
                console.log('Livro atualizado com sucesso, ID: ', resultado);
                const book = new bookmodel_1.Book(id, title, author, publishedDate, isbn, pages, language, publisher);
                return new Promise((resolve) => {
                    resolve(book);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar o livro de ID ${id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
}
exports.BookRepository = BookRepository;
