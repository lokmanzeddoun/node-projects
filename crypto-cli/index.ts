#!/usr/bin/env node
import { cryptoCommand } from './commands/crypto.command';
import * as yargs from 'yargs'
// const argv = yargs(process.argv.slice(2))
//     .usage('Usage: $0 <command> [options]')
//     .help('h')
//     .alias('h', 'help')
//     .alias('v', 'version')
//     .parseSync()

// console.log('(%d,%d)', argv.x, argv.y)

// .options({
//     a: { type: 'boolean', default: false },
//     b: { type: 'string', demandOption: true },
//     c: { type: 'number', alias: 'chill' },
//     d: { type: 'array' },
//     e: { type: 'count' },
//     f: { choices: ['1', '2', '3'] },
// })
import { TestCommand } from './commands/test.command'
import { Scanner } from './scanner'

let command: yargs.Argv = yargs.help()

// yargs command module
command = command.command(new TestCommand())

// decorators
Scanner.scan().map((c: yargs.CommandModule) => {
    command = command.command(c)
})

// basic command
// basicCommand(command)
cryptoCommand(command)