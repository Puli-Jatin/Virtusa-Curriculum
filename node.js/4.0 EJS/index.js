import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const__dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

function Day(req, res, next) {
    console.log(req.body);
    next();
}
app.Day();

app.get("/", (req, res) => {
    Date.getDay()

}
)

app.listen(port, () => {
    console.log(`listing on port ${port}.`);
});

