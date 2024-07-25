"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decorator2 = exports.Decorator1 = void 0;
const class_transformer_1 = require("class-transformer");
const decorator_1 = require("../utils/decorator");
const todo_1 = __importDefault(require("../utils/todo"));
const todos_1 = __importDefault(require("../utils/todos"));
class Decorator1 {
    add2(title, body) {
        const todo = todos_1.default.addNewTodo(new todo_1.default(title, body));
        todo.prittyPrint();
    }
}
exports.Decorator1 = Decorator1;
__decorate([
    (0, decorator_1.Command)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], Decorator1.prototype, "add2", null);
let Decorator2 = class Decorator2 {
    all2() {
        todos_1.default.readAllTodos().map((singleTodo) => {
            (0, class_transformer_1.plainToInstance)(todo_1.default, singleTodo).prittyPrint();
        });
        console.log(`\ndone`);
    }
};
exports.Decorator2 = Decorator2;
exports.Decorator2 = Decorator2 = __decorate([
    (0, decorator_1.Commands)({
        command: 'all2',
    })
], Decorator2);
//# sourceMappingURL=decorator.command.js.map