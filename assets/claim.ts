import { AccountInfo, Connection, Keypair, PublicKey, TransactionInstruction, TransactionMessage, VersionedTransaction } from '@solana/web3.js';
import { deserialize } from 'borsh';
import bs58 from 'bs58';


const programID = new PublicKey("6UA8U5SHkuUWGeqc9mnFeby6TTCACvTSACwQo4fuhDH");
const privatekey: number[] = []; // Insert your private key here
const couponCode = 'SQqGs51XgMi3BJxdwszY4TN1dpAS8oGA8x08DyI3hEtzprLIwD'; // Insert your coupon code here
const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
const claimer = Keypair.fromSecretKey(Uint8Array.from(privatekey));

claimReward()

class Coupon {
    weekNumber: number;
    number1: number;
    number2: number;
    number3: number;
    number4: number;
    number5: number;
    number6: number;
    player: string;
    pl43: number;
    wins: number;
    bump: number;
    scno: number;
    serialno: number;
    midcno: number;
    mc: number;
    gameno: number;
    alreadyparticipated: number;
    winno: string;

    constructor(obj) {
        this.weekNumber = obj?.weekNumber ?? 0;
        this.number1 = obj?.number1 ?? 0;
        this.number2 = obj?.number2 ?? 0;
        this.number3 = obj?.number3 ?? 0;
        this.number4 = obj?.number4 ?? 0;
        this.number5 = obj?.number5 ?? 0;
        this.number6 = obj?.number6 ?? 0;
        this.player = obj?.player ?? 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
        this.pl43 = obj?.pl43 ?? 0;
        this.bump = obj?.bump ?? 0;
        this.wins = obj?.wins ?? 0;
        this.scno = obj?.scno ?? 0;
        this.serialno = obj?.serialno ?? 0;
        this.midcno = obj?.midcno ?? 0;
        this.mc = obj?.mc ?? 0;
        this.gameno = obj?.gameno ?? 0;
        this.alreadyparticipated = obj?.alreadyparticipated ?? 0;
        this.winno = obj?.winno ?? 'wwwwmmmmssssrrrraaaaa';
    }

    static getSchema() {
        return new Map([
            [
                Coupon,
                {
                    kind: "struct",
                    fields: [
                        ["weekNumber", "u16"],
                        ["number1", "u8"],
                        ["number2", "u8"],
                        ["number3", "u8"],
                        ["number4", "u8"],
                        ["number5", "u8"],
                        ["number6", "u8"],
                        ["player", "String"],
                        ["pl43", "u8"],
                        ["wins", "u8"],
                        ["bump", "u8"],
                        ["scno", "u8"],
                        ["serialno", "u8"],
                        ["midcno", "u8"],
                        ["mc", "u8"],
                        ["gameno", "u16"],
                        ["alreadyparticipated", "u8"],
                        ["winno", "String"],
                    ],
                },
            ],
        ]);
    }
}

export class NumberOfDistributorsModel {
    currentLevelThreeNumber: number;
    remainingLevelTwo: number;
    remainingLevelOne: number;
    forDistribution: number;
    week: number;

    constructor(obj) {
        this.currentLevelThreeNumber = obj.currentLevelThreeNumber;
        this.remainingLevelTwo = obj.remainingLevelTwo;
        this.remainingLevelOne = obj.remainingLevelOne;
        this.forDistribution = obj.forDistribution;
        this.week = obj.week;
    }

    static getSchema() {
        return new Map([
            [
                NumberOfDistributorsModel,
                {
                    kind: "struct",
                    fields: [
                        ["currentLevelThreeNumber", "u16"],
                        ["remainingLevelTwo", "u8"],
                        ["remainingLevelOne", "u8"],
                        ["forDistribution", "u8"],
                        ["week", "u16"],
                    ],
                },
            ],
        ]);
    }
}

async function claimReward(): Promise<void> {


    const seed = bs58.decode(couponCode);
    const couponAddress = PublicKey.findProgramAddressSync([Buffer.from("L"), Buffer.from(seed)], programID);
    const couponInfo = await connection.getAccountInfo(couponAddress[0]);
    const coupon = deserialize(Coupon.getSchema(), Coupon, couponInfo!.data);


    const distributionAddress = PublicKey.findProgramAddressSync(
        [Buffer.from("dist"), Buffer.from(coupon.weekNumber.toString())],
        programID,
    );

    let distributorPublicKey: PublicKey;

    if (coupon.wins === 3 || coupon.wins === 4 || coupon.wins === 5) {
        distributorPublicKey = await getDistributorPublicKey(coupon.weekNumber, coupon.wins)
    } else if (coupon.wins === 6) {
        distributorPublicKey = PublicKey.findProgramAddressSync([
            Buffer.from(coupon.weekNumber.toString()),
            Buffer.from("sd"),
            Buffer.from('1'),
            Buffer.from("f"),
            Buffer.from(coupon.wins.toString()),
        ], programID)[0];
    } else {
        return;
    }

    const ix = new TransactionInstruction({
        programId: programID,
        keys: [
            { isSigner: false, isWritable: false, pubkey: distributionAddress[0] },
            { isSigner: false, isWritable: true, pubkey: distributorPublicKey },
            { isSigner: false, isWritable: true, pubkey: claimer.publicKey },
            { isSigner: false, isWritable: true, pubkey: couponAddress[0] },
        ],
        data: Buffer.from([90])
    });

    const message = new TransactionMessage({
        instructions: [ix],
        payerKey: claimer.publicKey,
        recentBlockhash: (await connection.getLatestBlockhash()).blockhash
    }).compileToV0Message();

    const tx = new VersionedTransaction(message);
    tx.sign([claimer]);

    connection.sendTransaction(tx);
}

async function getDistributorPublicKey(weekToClaim: number, numberOfMatches: number): Promise<PublicKey> {
    const usedNumberThreeDistributors: { [distributorNumber: number]: true } = {};

    const distributorCount = PublicKey.findProgramAddressSync([
        Buffer.from("nodist"),
        Buffer.from(weekToClaim.toString()),
        Buffer.from("f"),
        Buffer.from(numberOfMatches.toString()),
    ], programID);

    const info = await connection.getAccountInfo(distributorCount[0]);
    const data = deserialize(NumberOfDistributorsModel.getSchema(), NumberOfDistributorsModel, info!.data);

    let levelThreeDistributorNumber: number | null = getLevelThreeDistributorNumber(usedNumberThreeDistributors, data.currentLevelThreeNumber)!;
    let levelTwoDistributorNumber = Math.floor(Math.random() * (levelThreeDistributorNumber !== 1 ? data.remainingLevelTwo : 255)) + 1; //number of level 2 accounts in the first level 3
    let levelOneDistributorNumber = Math.floor(Math.random() * (levelTwoDistributorNumber !== 1 ? data.remainingLevelOne : 255)) + 1; //number of level 1 accounts in the first level 2

    const s1 = "u".toString();
    const s2 = numberOfMatches.toString();

    const weekSeed = weekToClaim.toString().padEnd(6, 'w');
    let levelThreeSeed = levelThreeDistributorNumber.toString().padEnd(4, 'l');
    let levelTwoSeed = levelTwoDistributorNumber.toString().padEnd(4, 'v');
    let levelOneSeed = levelOneDistributorNumber.toString().padEnd(4, 'c');

    let seed = s1 + s2 + weekSeed + levelThreeSeed + levelTwoSeed + levelOneSeed;
    let accounts = await getDistributorAccounts(seed)

    while (accounts.length === 0) {
        if (levelOneSeed.length > 0) {
            const numberOfLettersToRemove = levelOneSeed.length === 4 ? 2 : 1;
            levelOneSeed = levelOneSeed.slice(0, levelOneSeed.length - numberOfLettersToRemove)
        } else if (levelTwoSeed.length > 0) {
            const numberOfLettersToRemove = levelTwoSeed.length === 4 ? 2 : 1;
            levelTwoSeed = levelTwoSeed.slice(0, levelTwoSeed.length - numberOfLettersToRemove)
        } else {
            levelThreeDistributorNumber = getLevelThreeDistributorNumber(usedNumberThreeDistributors, data.currentLevelThreeNumber)
            if (levelThreeDistributorNumber == null) {
                throw new Error('All distributors are used.')
            }

            levelThreeSeed = levelThreeDistributorNumber.toString().padEnd(4, 'l');
        }

        seed = s1 + s2 + weekSeed + levelThreeSeed + levelTwoSeed + levelOneSeed;
        accounts = await getDistributorAccounts(seed)
    }

    return accounts[0].pubkey;
}

function getDistributorAccounts(seed: string): Promise<Array<{ pubkey: PublicKey; account: AccountInfo<Buffer> }>> {
    const base = bs58.encode(Buffer.from(seed));

    return connection.getProgramAccounts(
        programID,
        {
            filters: [
                { dataSize: 39 },
                { memcmp: { offset: 4, bytes: base } },
            ],
        }
    );
}

function getLevelThreeDistributorNumber(usedNumberThreeDistributors: { [distributorNumber: number]: true }, currentLevelThreeNumber: number): number | null {
    const numberOfUsedThreeDistributors = Object.keys(usedNumberThreeDistributors).length;
    if (numberOfUsedThreeDistributors >= currentLevelThreeNumber) {
        return null;
    }

    const numberThreeDistributor = Math.floor(Math.random() * currentLevelThreeNumber) + 1;
    if (usedNumberThreeDistributors[numberThreeDistributor]) {
        return getLevelThreeDistributorNumber(usedNumberThreeDistributors, currentLevelThreeNumber);
    }

    usedNumberThreeDistributors[numberThreeDistributor] = true;
    return numberThreeDistributor;
}
