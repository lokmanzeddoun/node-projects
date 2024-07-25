"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCommand = void 0;
const todos_1 = __importDefault(require("../utils/todos"));
class TestCommand {
    constructor() {
        this.command = 'get <title>';
        this.describe = 'get todo info';
    }
    builder(args) {
        return args
            .positional('title', {
            alias: 't',
            type: 'string',
        })
            .option('done', {
            alias: 'd',
            describe: 'output done',
            type: 'boolean',
        });
    }
    handler(args) {
        const todo = todos_1.default.getTodoByTitle(args.title);
        todo.prittyPrint();
        args.done && console.log(`\ndone!`);
        process.exit(0);
    }
}
exports.TestCommand = TestCommand;
//# sourceMappingURL=test.command.js.map