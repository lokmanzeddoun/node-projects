"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commands = exports.COMMANDS_HANDLER_METADATA = exports.COMMAND_HANDLER_METADATA = void 0;
exports.Command = Command;
require("reflect-metadata");
const lodash_1 = require("lodash");
exports.COMMAND_HANDLER_METADATA = '__command-handler-metadata__';
exports.COMMANDS_HANDLER_METADATA = '__commands-handler-metadata__';
function Command(option) {
    return (target, key, descriptor) => {
        if ((0, lodash_1.isNil)(option)) {
            option = {
                command: key,
                describe: `${key}(auto generated)`,
            };
        }
        // 根据design:paramtypes自动补充默认的参数
        if ((0, lodash_1.isNil)(option.params)) {
            option.params = [];
            const params = Reflect.getMetadata('design:paramtypes', target, key) || [];
            let i = 1;
            params.map((p) => {
                const type = p.name.toLowerCase();
                if (!['string', 'number', 'boolean'].includes(type)) {
                    return;
                }
                option.params.push({
                    type: 'positional',
                    name: `${type}${i}`,
                    value: {
                        type,
                    },
                });
                option.command += ` <${type}${i}>`;
                i = i + 1;
            });
        }
        Reflect.defineMetadata(exports.COMMAND_HANDLER_METADATA, option, target, key);
    };
}
const Commands = (options) => (target) => Reflect.defineMetadata(exports.COMMANDS_HANDLER_METADATA, options, target);
exports.Commands = Commands;
// export const OriginYargsCommand =
//   (): ClassDecorator =>
//   (target: any): void => {
//     Reflect.defineMetadata(ORIGIN_COMMAND_HANDLER_METADATA, true, target);
//   };
//# sourceMappingURL=decorator.js.map