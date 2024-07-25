"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
    prittyPrint() {
        console.log(`\nTitle: ${this.title}\nBody: ${this.description}`);
    }
}
exports.default = Todo;
//# sourceMappingURL=todo.js.map