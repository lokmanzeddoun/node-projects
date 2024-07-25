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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scanner = void 0;
const lodash_1 = require("lodash");
const decorator_command_1 = require("./commands/decorator.command");
const decorator_1 = require("./utils/decorator");
class Scanner {
    static scan() {
        const clasess = [decorator_command_1.Decorator1, decorator_command_1.Decorator2];
        const commands = (0, lodash_1.compact)((0, lodash_1.flattenDeep)(clasess.map((c) => {
            const prototype = c.prototype;
            const instance = new c();
            // multiCommands
            const commandsMeta = Reflect.getMetadata(decorator_1.COMMANDS_HANDLER_METADATA, c);
            if (commandsMeta) {
                Object.getOwnPropertyNames(prototype)
                    .filter((f) => !Reflect.hasMetadata(decorator_1.COMMAND_HANDLER_METADATA, c, f) && f !== 'constructor')
                    .map((f) => {
                    (0, decorator_1.Command)({
                        command: `${commandsMeta.command}:${f}`,
                        describe: commandsMeta.describe
                            ? `${commandsMeta.describe}:${f}`
                            : `${f}(auto generated)`,
                    })(prototype, f, Object.getOwnPropertyDescriptor(prototype, f));
                });
            }
            // command
            return Object.getOwnPropertyNames(prototype).map((p) => {
                const commandMeta = Reflect.getMetadata(decorator_1.COMMAND_HANDLER_METADATA, instance, p);
                if (!commandMeta) {
                    return;
                }
                const builder = (yargs) => {
                    var _a;
                    (_a = commandMeta.params) === null || _a === void 0 ? void 0 : _a.map(({ name, value, type }) => {
                        switch (type) {
                            case 'positional':
                                yargs.positional(name, value);
                                break;
                            case 'option':
                                yargs.option(name, value);
                                break;
                            default:
                                break;
                        }
                    });
                    return yargs;
                };
                const handler = (args) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    const exec = instance[p].bind(instance);
                    const params = (_a = commandMeta.params) === null || _a === void 0 ? void 0 : _a.map((v) => args[v.name]);
                    const result = yield exec(...params);
                    return result;
                });
                return Object.assign(Object.assign({}, (0, lodash_1.pick)(commandMeta, [
                    'command',
                    'describe',
                    'alias',
                ])), { builder,
                    handler });
            });
        })));
        return commands;
    }
}
exports.Scanner = Scanner;
//# sourceMappingURL=scanner.js.map