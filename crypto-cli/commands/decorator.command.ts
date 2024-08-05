import { plainToInstance } from 'class-transformer'
import { Command, Commands } from '../utils/decorator'
import Cryptos from '../utils/cryptos'

export class Decorator2 {
    @Command({
        command: 'init',
        describe: 'init the database ',
    })
    init() {
        Cryptos.writeAllCryptos()
        console.log(`\ndone`)
    }
}
