import express from 'express';
const app = express();
const port = 3000;
//app.get
//app.post
//app.put
//app.patch
//app.delete
//app.listen
app.get("/", (req, res) => {
    res.send("<h1> This is My home page </h1>");
});

app.post("/J", (req, res) => {
    console.log("This is a J Page");
    res.sendStatus(200);
});

app.put("/A", (req, res) => {
    console.log("I'M here to put some data");
    res.sendStatus(200);
});

app.patch("/T", (req, res) => {
    console.log("This is a patch i dont know what to do with this");
    res.sendStatus(200);
});

app.delete("/I", (req, res) => {
    console.log("we are at the end");
    res.sendStatus(404);
});
app.listen(port, () => {
console.log(`Server started on port ${port}`);
});

// import express from "express";
// const app = express();
// const port = 3000;

// // *********************
// // Let’s practice using Postman. Make sure your server is running with nodemon.
// // Then test the 5 different routes below with Postman. Open a separate tab for each request.
// // Check that for each route you’re getting the correct status code returned to you from your server.
// // You should not get any 404s or 500 status codes.
// // *********************

// app.get("/", (req, res) => {
//   res.send("<h1>Home Page</h1>");
// });

// app.post("/register", (req, res) => {
//   //Do something with the data
//   res.sendStatus(201);
// });

// app.put("/user/angela", (req, res) => {
//   res.sendStatus(200);
// });

// app.patch("/user/angela", (req, res) => {
//   res.sendStatus(200);
// });

// app.delete("/user/angela", (req, res) => {
//   //Deleting
//   res.sendStatus(200);
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
