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

    static validateStructure = (anyBlock: Block): boolean => {
        return (
            typeof anyBlock.index === "number" &&
            typeof anyBlock.hash === "string" &&
            typeof anyBlock.index === "number" &&
            typeof anyBlock.preHash === "string" &&
            typeof anyBlock.timestamp === "number"
        );
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

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const preBlock: Block = getLatestBlock();
    const newIndex: number = preBlock.index + 1;
    const newTimestamp: number = getNewTimestamp();
    const newHash: string = Block.caculateBlockHash(newIndex, preBlock.hash, newTimestamp, data);
    const newBlock: Block = new Block(newIndex, newHash, preBlock.hash, data, newTimestamp);
    return newBlock;
};

const getHashforBlock = (anyBlock: Block): string =>
    Block.caculateBlockHash(anyBlock.index, anyBlock.preHash, anyBlock.timestamp, anyBlock.data);

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    } else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if (previousBlock.hash !== candidateBlock.hash) {
        return false;
    } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    } else {
        return true;
    }
};

const addBlock = (cadidateBlock: Block): void => {
    if (isBlockValid(cadidateBlock, getLatestBlock())) {
        blockChain.push(cadidateBlock);
    }
};
export {};
