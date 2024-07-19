import express from "express";
import { criarLivro, consultarLivro, consultarLivroId, atualizarLivro, deletarLivro } from "./controller/bookcontroller";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

function logInfo(){
    console.log(`API em execução no URL: http: localhost${ PORT}`);
}
app.post("/api/books", criarLivro);
app.get("/api/books", consultarLivro);
app.get("/app/books/:id", consultarLivroId);
app.put("/app/books/:id", atualizarLivro);
app.delete("app/books/:id", deletarLivro);