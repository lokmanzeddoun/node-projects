import { plainToInstance } from 'class-transformer'
import * as fs from 'fs'
import Crypto from './crypto'
import { getAllCurrencies } from './cryptoApi'
export default class Cryptos {
    constructor(public cryptos: Crypto[]) {}

    public static async writeAllCryptos(): Promise<void> {
        const cryptos = await getAllCurrencies()
        fs.writeFileSync('data.json', JSON.stringify(cryptos.data))
    }

    public static readAllCryptos(nb: number): Crypto[] {
        // Define an empty object
        let cryptos: Crypto[] = []
        try {
            // try to read the todos
            cryptos = JSON.parse(fs.readFileSync('data.json', 'utf8'))
        } catch (e) {
            // If failed create a write an empty object
            this.writeAllCryptos()
        }
        return cryptos.slice(0, nb)
    }

    public static getCryptoById(id: string): Crypto {
        const cryptos: Crypto[] = this.readAllCryptos(10)
        const crypto = cryptos.filter(
            (singleCrypto: Crypto) => singleCrypto.id === id
        )
        return plainToInstance(Crypto, crypto[0])
    }
}
