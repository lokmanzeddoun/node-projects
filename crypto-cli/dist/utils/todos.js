"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const todo_1 = __importDefault(require("./todo"));
const fs = __importStar(require("fs"));
class Todos {
    constructor(todos) {
        this.todos = todos;
    }
    static writeAllTodos(todos) {
        fs.writeFileSync("data.json", JSON.stringify(todos));
    }
    static readAllTodos() {
        // Define an empty object
        let todos = [];
        try {
            // try to read the todos
            todos = JSON.parse(fs.readFileSync("data.json", "utf8"));
        }
        catch (e) {
            // If failed create a write an empty object
            this.writeAllTodos([]);
        }
        return todos;
    }
    static getTodoByTitle(title) {
        const todos = this.readAllTodos();
        const todo = todos.filter((singleTodo) => singleTodo.title === title);
        return (0, class_transformer_1.plainToInstance)(todo_1.default, todo[0]);
    }
    static removeTodoByTitle(title) {
        let todos = this.readAllTodos();
        todos = todos.filter((singleTodo) => singleTodo.title === title);
        this.writeAllTodos(todos);
    }
    static addNewTodo(todo) {
        const todos = this.readAllTodos();
        todos.push(todo);
        this.writeAllTodos(todos);
        return todo;
    }
}
exports.default = Todos;
//# sourceMappingURL=todos.js.map