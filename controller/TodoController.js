const Todo = require("../model/Todo")

exports.getAllTodos = async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "todo fetch seccsess" })
}
exports.addTodo = async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "todo create success" })
}
exports.updateTodo = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "todo upadate success" })
}
exports.deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "todo delete success" })
}