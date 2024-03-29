import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

const port = 8000;

app.get("/", (req, res) => {
    console.log(_dirname);
    res.sendFile(_dirname + "/index.html");
});

app.get("/get_started", (req, res) => {
    res.render("get_started.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/resources", (req, res) => {
    console.log(_dirname);
    res.sendFile(_dirname + "/index.html");
});

app.post("/login", (req, res) => {
    console.log(req.body);
    res.render("welcome.ejs");
});
app.post("/get_started", (req, res) => {
    console.log(req.body);
    
    res.render("login.ejs",);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
