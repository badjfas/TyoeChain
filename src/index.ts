import * as CryptoJS from "crypto-js";
class Block {
    public index: number;
    public hash: string;
    public preHash: string;
    public data: string;
    public timestamp: number;

    static caculateBlockHash = (index: number, prevHash: string, timestamp: number, data: string): string => {
        return CryptoJS.SHA256(index + prevHash + timestamp + data).toString();
    };

    constructor(index: number, hash: string, preHash: string, data: string, timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.preHash = preHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock: Block = new Block(0, "123123412341324", "", "hello", 123456);

let blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);
console.log(blockChain);

export {};
