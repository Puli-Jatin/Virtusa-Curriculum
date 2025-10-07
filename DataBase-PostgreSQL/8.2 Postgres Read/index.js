import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// Required info for the database
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "World",
  password: "vani2006jatin",
  port: 5432,                            // defalut port for postgreSQL is 5432  //
});

//hosting the web page//
const app = express();
const port = 3000;

//connecting to the database
db.connect();

//Query for sql 
let quiz = [];                                               // using quiz as array"[]"
db.query("SELECT * FROM flags", (err, res) => {
  if(err) {
    console.log("Error excuting the Query", err.message);
  } else {
    quiz = res.rows;
  }

  db.end();  

});

let totalCorrect = 0;

//Middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

let currentQuestion = {};

// GET Homepage
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

db.end();  

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
