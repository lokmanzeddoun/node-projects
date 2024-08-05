import chalk from 'chalk'
export default class Crypto {
    constructor(
        public id: string,
        public rank: string,
        public symbol: string,
        public name: string,
        public supply: string,
        public priceUsd: string,
        public explorer: string,
        public marketCapUsd: string,
        public volumeUsd24Hr: string,
        public changePercent24Hr: string,
        public vwap24Hr: string,
        public maxSupply?: string
    ) {}

    prettyPrint() {
        console.log(
            chalk.bgGrey.bold(`\nID: `) +
                chalk.whiteBright(`${this.id}`) +
                chalk.bgGrey.bold(`\nRank: `) +
                chalk.whiteBright(`${this.rank}`) +
                chalk.bgGrey.bold(`\nSymbol: `) +
                chalk.whiteBright(`${this.symbol}`) +
                chalk.bgGrey.bold(`\nName: `) +
                chalk.whiteBright(`${this.name}`) +
                (this.maxSupply
                    ? chalk.bgGrey.bold(`\nMax Supply: `) +
                      chalk.whiteBright(`${this.maxSupply}`)
                    : '') +
                chalk.bgGrey.bold(`\nSupply: `) +
                chalk.whiteBright(`${this.supply}`) +
                chalk.bgGrey.bold(`\nPrice (USD): `) +
                chalk.whiteBright(`${this.priceUsd}`) +
                chalk.bgGrey.bold(`\nExplorer: `) +
                chalk.whiteBright(`${this.explorer}`) +
                chalk.bgGrey.bold(`\nMarket Cap (USD): `) +
                chalk.whiteBright(`${this.marketCapUsd}`) +
                chalk.bgGrey.bold(`\nVolume (USD) 24Hr: `) +
                chalk.whiteBright(`${this.volumeUsd24Hr}`) +
                chalk.bgGrey.bold(`\nChange Percent 24Hr: `) +
                chalk.whiteBright(`${this.changePercent24Hr}`) +
                chalk.bgGrey.bold(`\nVWAP 24Hr: `) +
                chalk.whiteBright(`${this.vwap24Hr} \n`)
        )
    }
}
