import { Request, Response } from "express";
import { BookService } from "../service/BookService";


const bookService = new BookService();


export async function criarLivro (req: Request, res: Response) {
    try {
        const novoLivro =  await bookService.criarLivro(req.body);
        res.status(201).json(
            {
                mensagem: "Livro criado com sucesso!",
                book:novoLivro
            }
        );
  } catch (error: any) {
        res.status(400).json({ message: error.mensage});
  }
};

export async function consultarLivro (req: Request, res: Response){
    try {
        const books = await bookService.consultarLivro();
        res.status(200).json(
                {
                    mensagem: "Livro encontrado com sucesso!",
                    books: books
                }
            );
    } catch (error: any) {
          res.status(400).json({ menssage: error.message});
    }
};

export async function consultarLivroId(req: Request, res: Response){
    try {
        const book = await bookService.consultarLivroId(req.query.id);
        res.status(200).json(
                {
                    mensagem: "Livro encontrado com sucesso!",
                    book: book
                }
            );
        } catch (error: any) {
            res.status(400).json({ message: error.message});
        }
};


export async function deletarLivro(req: Request, res: Response){
    try{
        const book = await bookService.deletarLivro(req.body);
        res.status(200).json(
            {
                mensagem: "Livro deletado com sucesso!",
                book: book

            }
         );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function atualizarLivro (req: Request, res: Response){
    try {
        const novoLivro= bookService.atualizarLivro(req.body);
        res.status(201).json(
            {
                mensagem:"Livro atualizado com sucesso!",
                book:novoLivro
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};



    



