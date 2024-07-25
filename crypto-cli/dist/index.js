#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs/yargs"));
const argv = (0, yargs_1.default)(process.argv.slice(2))
    .options({
    a: { type: 'boolean', default: false },
    b: { type: 'string', demandOption: true },
    c: { type: 'number', alias: 'chill' },
    d: { type: 'array' },
    e: { type: 'count' },
    f: { choices: ['1', '2', '3'] },
})
    .parse();
// import { TestCommand } from './commands/test.command'
// import { basicCommand } from './commands/basic.command'
// import { Scanner } from './scanner'
// let command: yargs.Argv = yargs.help()
// // yargs command module
// command = command.command(new TestCommand())
// // decorators
// Scanner.scan().map((c: yargs.CommandModule) => {
//     command = command.command(c)
// })
// // basic command
// basicCommand(command)
//# sourceMappingURL=index.js.map