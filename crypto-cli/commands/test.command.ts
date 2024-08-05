import * as yargs from 'yargs'
import Cryptos from '../utils/cryptos'

export class TestCommand implements yargs.CommandModule {
    public command = 'get <title>'

    public describe = 'get crypto info'

    builder(args: yargs.Argv) {
        return args
            .positional('id', {
                alias: 't',
                type: 'string',
            })
            .option('done', {
                alias: 'd',
                describe: 'output done',
                type: 'boolean',
            })
    }

    handler(args: yargs.Arguments) {
        const crypto = Cryptos.getCryptoById(args.id as string)
        crypto.prettyPrint()
        args.done && console.log(`\ndone!`)
        process.exit(0)
    }
}
