"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.updateTodos = exports.getTodos = exports.createTodo = void 0;
var Todo_1 = require("../model/Todo");
var TODOS = [];
var createTodo = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new Todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Todo fue creado...", createTodo: newTodo });
};
exports.createTodo = createTodo;
var getTodos = function (req, res, next) {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
var updateTodos = function (req, res, next) {
    var todoId = req.params.id;
    var updatedText = req.body.text;
    var index = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (index < 0) {
        throw new Error("ToDo no fue encontrado...");
    }
    TODOS[index] = new Todo_1.Todo(TODOS[index].id, updatedText);
    res.status(201).json({ message: "Actualizado", updateTodos: TODOS[index] });
};
exports.updateTodos = updateTodos;
var deleteTodos = function (req, res, next) {
    var todoId = req.params.id;
    var index = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (index < 0) {
        throw new Error("ToDo no fue encontrado...");
    }
    TODOS.splice(index, 1);
    res.status(201).json({ message: "Eliminado" });
};
exports.deleteTodos = deleteTodos;
