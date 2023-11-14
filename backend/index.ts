import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/*
  In real world applications, we would use a database to store the todos.
  For this exercise, we will use the array "todosArray" to store them.
*/
var todosArray = [];


/*
  TODO 1: Implement the endpoint `GET /todos` to send all todos to the client.
*/
app.get("/todos", (req, res) => {
  res.status(500).send({message: "Not implemented"});
});

/*
  TODO 2: Implement the endpoint `POST /todos` to add new todo to todosArray.
  The request body will contain the new todo text.
  Example request body:
  
  {
    todo: "Buy milk"
  }

*/
app.post("/todos", (req, res) => {
  res.status(500).send({message: "Not implemented"});
});

/*
  TODO 3: Implement the endpoint `DELETE /todos/:text` to delete todo from todosArray.
*/
app.delete("/todos/:text", (req, res) => {
  res.status(500).send({message: "Not implemented"});
});

/*
  TODO 4: Implement the endpoint `PATCH /todos/:text` to update todo in todosArray.
  The request body will contain the new todo text.
  Example request body:
  
  {
    todo: "Don't buy milk"
  }

*/
app.patch("/todos/:text", (req, res) => {
  res.status(500).send({message: "Not implemented"});
});

// Start server
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});