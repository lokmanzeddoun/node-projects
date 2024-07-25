"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicCommand = void 0;
const todos_1 = __importDefault(require("../utils/todos"));
const todo_1 = __importDefault(require("../utils/todo"));
const class_transformer_1 = require("class-transformer");
const basicCommand = (argv) => __awaiter(void 0, void 0, void 0, function* () {
    // We will take advantage of typings and intellsence.
    const todoTitleOptions = {
        describe: "Title of TODO",
        demand: true,
        alias: "t",
    };
    const todoBodyOptions = {
        describe: "Body of TODO",
        demand: false,
        alias: "b",
    };
    const command = argv
        .command("add", "Add TODO to database", {
        title: todoTitleOptions,
        body: todoBodyOptions,
    })
        .command("remove", "Remove an existing TODO", {
        title: todoTitleOptions,
    })
        .command("view", "View a single TODO", {
        title: todoTitleOptions,
    })
        .command("all", "List add TODOS");
    const params = yield command.parseAsync();
    if (params._[0] === "add") {
        const todo = todos_1.default.addNewTodo(new todo_1.default(params.title, params.body));
        todo.prittyPrint();
    }
    else if (params._[0] === "remove") {
        todos_1.default.removeTodoByTitle(params.title);
        console.log("Todo has been deleted");
    }
    else if (params._[0] === "view") {
        const todo = todos_1.default.getTodoByTitle(params.title);
        todo.prittyPrint();
    }
    else if (params._[0] === "all") {
        const todos = todos_1.default.readAllTodos();
        todos.forEach((singleTodo) => {
            (0, class_transformer_1.plainToInstance)(todo_1.default, singleTodo).prittyPrint();
        });
    }
    return command;
});
exports.basicCommand = basicCommand;
//# sourceMappingURL=basic.command.js.map