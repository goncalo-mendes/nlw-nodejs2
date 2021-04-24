import express, { request, response } from 'express';



const app = express();

app.get("/", (request, response) => {
    return response.send("teste");
})

app.post("/", (request,response)=>
    {
        return response.json({message: "Usuario criado com sucesso"});
    })
app.listen(3333, () => console.log("server up"));
