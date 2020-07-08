// express
const express = require("express");
const app = express();

// para que tome la carpeta public, no se necesita poner la ruta completa sino siguiente de public
app.use(express.static("public"));

// esto es para que ande el app.post y al mandar el formulario no lo envia nada asiqu PONER
app.use(express.urlencoded({extended: false}))

// para que la pagina no tire el cant get /
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

// para que ande el post 
app.post("/", (req, res) => {
    // para que haga el JSON dejar este solamente
    // res.send(req.body);
    // para que mande directamente a la pagina principal dejar solo este
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/register", (req, res) => {
    res.send(req.body);
});

app.post("/login", (req, res) => {
    res.send(req.body);
});

// para abrir el listen en el puerto determinado
app.listen(4001, () => { console.log("Código funcionando y escuchando en el puerto 4001;  igual recorda de colocar -npm run startcode- y despues coloca -localhost/4001- en el navegador por favor.")})