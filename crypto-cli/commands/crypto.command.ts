import * as yargs from 'yargs'
import Cryptos from '../utils/cryptos'
import Crypto from '../utils/crypto'
import { plainToInstance } from 'class-transformer'
export const cryptoCommand = async (argv: yargs.Argv) => {
    // We will take advantage of typings and intellsence.
    const cryptoLimitOption: yargs.Options = {
        describe: 'limit of crypto currency',
        demand: true,
        alias: 'l',
        default: 10,
        type: 'number',
    }
    const cryptoVisibleOption: yargs.Options = {
        describe: 'visible stats',
        demand: false,
        alias: 'v',
    }
    const cryptoIdOption: yargs.Options = {
        describe: 'currency id',
        demand: true,
        alias: 'i',
        type: 'string',
    }
    const command = argv
        .command('list', 'list all currency from  database', {
            limit: cryptoLimitOption,
        })
        .command('show', 'show details about currency', {
            id: cryptoIdOption,
        })

    const params = await command.parseAsync()
    if (params._[0] === 'list') {
        const cryptos = Cryptos.readAllCryptos(params.limit as number)
        cryptos.map((e) => {
            plainToInstance(Crypto, e).prettyPrint()
        })
    } else if (params._[0] === 'show') {
        const crypto = Cryptos.getCryptoById(params.id as string)
        crypto.prettyPrint()
    }

    return command
}
