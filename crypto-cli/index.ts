#!/usr/bin/env node
import yargs from 'yargs/yargs'

const argv = yargs(process.argv.slice(2))
    .options({
        a: { type: 'boolean', default: false },
        b: { type: 'string', demandOption: true },
        c: { type: 'number', alias: 'chill' },
        d: { type: 'array' },
        e: { type: 'count' },
        f: { choices: ['1', '2', '3'] },
    })
    .parse()
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
