import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Hello world</h1>");
});

app.get("/about", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h2>my name is JATIN im working on HTTP request</h2>");
});

app.listen(port, () =>{
console.log(`Server is running on port ${port}.`);
})
