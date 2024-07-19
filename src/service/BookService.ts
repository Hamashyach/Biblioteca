import { Book } from "../model/bookmodel";
import { BookRepository } from "../repository/BookRepository"; 

export class BookService{
    

    bookRepository: BookRepository = new BookRepository();

    async criarLivro(bookData: any): Promise<Book>{
        const {title, author, publishedDate, isbn, pages, language, publisher} = bookData;
        if(!title || !author || publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error ("Infomações incompletas!");
        }

        const novoLivro = await this.bookRepository.criarLivro(title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Insert ", novoLivro);
        return novoLivro;
    }

    async consultarLivroId(bookData: any): Promise<Book> {
        if(!bookData){
            throw new Error("Informações incompletas");
        }
        const id = parseInt(bookData, 10);

        const book = await this.bookRepository.filtrarLivroPorId(id);
        console.log("Service - this.filtrarLivros", book);
        return book;
    }

    async consultarLivro(): Promise<Book[]> {
        const book = await this.bookRepository.filtrarTodosLivros();
        console.log("Service - Filtrar todos", book);
        return book;
    }

    async atualizarLivro(bookData: any): Promise<Book> {
        const {id, title, author, publishedDate, isbn, pages, language, publisher} = bookData;
        if(!title || !author || !publishedDate || !isbn || !pages || !language || !publisher || !id){
            throw new Error ("Informações incompletas");
        }

        const book = await this.bookRepository.atualizarLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Update", book);
        return book;
    }
    
    async deletarLivro(bookData: any): Promise<Book> {
        const {id, title, author, publishedDate, isbn, pages, language, publisher} = bookData;
        if(!title || !author || !publishedDate || !isbn || !pages || !language || !publisher || !id){
            throw new Error ("Informações incompletas");
        }

        const book = await this.bookRepository.deletarLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Update", book);
        return book;
    }
}




