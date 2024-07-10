const TodoController = require("./../controller/TodoController")

const router = require("express").Router()


router
    .get("/", TodoController.getAllTodos)
    .post("/", TodoController.addTodo)
    .put("/:id", TodoController.updateTodo)
    .delete("/:id", TodoController.deleteTodo)

module.exports = router