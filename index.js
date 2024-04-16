import express from "express";
const app = express();
const porta = 3000;

app.get("/", (req, res)=>{
    res.send("Página inicial");
})

app.get("/sobre", (req, res)=>{
    res.send("Página sobre");
})

app.get("/contato", (req, res)=>{
    res.send("Página contato");
})

app.listen(porta, () => {
console.log(`Server rodando na porta ${porta}.`)
})