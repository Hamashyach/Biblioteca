import { Book } from "../model/bookmodel";
import { executarComandoSQL } from "../database/mysql";

export class BookRepository{
   
    constructor() {
        this.createTable();
    }

    private async createTable() {
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
            const resultado = await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao criar tabela');
        }
    }

    async criarLivro(title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string): Promise<Book> {
        const query = "INSERT INTO books (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?, ?)" ;
        
        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
            const book = new Book(resultado.insertId, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Book>((resolve)=>{
                resolve(book);
            })
        } catch (err) {
            console.error('Erro ao inserir o livro:', err);
            throw err;
        }
    }

    async filtrarLivroPorId(id:number):Promise<Book>{
        const query = "SELECT * FROM books where id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Livro encontrado com sucesso Id: ', resultado);
            return new Promise<Book>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao localizar livro de ID ${id} gerando o erro ${err}`);
            throw err;
        }
        
    }


    async filtrarTodosLivros(): Promise<Book[]>{
        const query = "SELECT * FROM books";

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Book[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os livros, gerando o erro ${err}`);
            throw err;
        }
        
    }

    async deletarLivro(id: number, title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string): Promise<Book>{
        const query = "DELETE FROM books where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Livro deletado com sucesso ID: ', resultado);
            const book = new Book(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Book>((resolve)=>{
                resolve(book);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }


    async atualizarLivro(id: number, title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string): Promise<Book> {
        const query = "UPDATE books set title = ?, author = ?, publishedDate = ?, isbn = ?, pages = ?, language = ?, publisher = ?, where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher, id]);
            console.log('Livro atualizado com sucesso, ID: ', resultado);
            const book = new Book(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Book>((resolve)=>{
                resolve(book);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    }