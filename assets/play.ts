import {
    Connection,
    Keypair,
    PublicKey,
    SignatureResult,
    SystemProgram,
    RpcResponseAndContext,
    Transaction,
    TransactionInstruction,
} from "@solana/web3.js";
import { serialize, deserialize } from 'borsh';

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

const privkey: number[] = []; // Insert your private key here
//choose six numbers between 1 and 49 (1 and 49 included)
const number1 = 1;
const number2 = 2;
const number3 = 3;
const number4 = 4;
const number5 = 5;
const number6 = 49;

const player = Keypair.fromSecretKey(Uint8Array.from(privkey));
const hostKey = new PublicKey("J5LEQRmXDZbY8Q3cxvZWZJJn9wYJKeaPwfRZHnz79YYE");
const programID = new PublicKey("6UA8U5SHkuUWGeqc9mnFeby6TTCACvTSACwQo4fuhDH");
const termKey = new PublicKey("4LmheLVizuRFpw64F1TXnjML8wevLzvvTyKYTbSZsA5b");
const recordKey = new PublicKey("3HY8Tu7UYMqSnnhXEHe9mmrUds5wEZWs4q6YAubyPPFE");

class SubRegister {
    numberofthreewinners: number = 0;
    numberoffourwinners: number = 0;
    numberoffivewinners: number = 0;
    numberofsixwinners: number = 0;
    numberofcounters: number = 0;
    counterno: number = 0;
    belongtomcno: number = 0;
    belongtomidno: number = 0;
    icollecteddata: number = 0;
    randomness: string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    r43: number = 0;    // 4YbLBRXwseG1NuyJbteSD5u81Q2QjFqJBp6JmxwYBKYm
    constructor(fields: {
        numberofthreewinners: number;
        numberoffourwinners: number;
        numberoffivewinners: number;
        numberofsixwinners: number;
        numberofcounters: number;
        counterno: number;
        belongtomcno: number;
        belongtomidno: number;
        icollecteddata: number;
        randomness: string;
        r43: number;
    } | undefined = undefined) {
        if (fields) {
            this.numberofthreewinners = fields.numberofthreewinners;
            this.numberoffourwinners = fields.numberoffourwinners;
            this.numberoffivewinners = fields.numberoffivewinners;
            this.numberofsixwinners = fields.numberofsixwinners;
            this.numberofcounters = fields.numberofcounters;
            this.counterno = fields.counterno;
            this.belongtomcno = fields.belongtomcno;
            this.belongtomidno = fields.belongtomidno;
            this.icollecteddata = fields.icollecteddata;
            this.randomness = fields.randomness;
            this.r43 = fields.r43;
        }
    }
}

const SubRegisterSchema = new Map([
    [
        SubRegister,
        {
            kind: "struct",
            fields: [
                ["numberofthreewinners", "u64"],
                ["numberoffourwinners", "u64"],
                ["numberoffivewinners", "u64"],
                ["numberofsixwinners", "u16"],
                ["numberofcounters", "u8"],
                ["counterno", "u8"],
                ["belongtomcno", "u8"],
                ["belongtomidno", "u8"],
                ["icollecteddata", "u8"],
                ["randomness", "String"],
                ["r43", "u8"],
            ],
        },
    ],
]);

class Coupon {
    week: number = 0;
    number1: number = 0;
    number2: number = 0;
    number3: number = 0;
    number4: number = 0;
    number5: number = 0;
    number6: number = 0;
    player: string = "4YbLBRXwseG1NuyJbteSD5u81Q2QjFqJBp6JmxwYBKYm";
    pl43: number = 0;
    wins: number = 0;
    bump: number = 0;
    scno: number = 0;
    serialno: number = 0;
    midcno: number = 0;
    mc: number = 0;
    gameno: number = 0;
    alreadyparticipated: number = 0;
    winno: string = "wwwwmmmmssssrrrraaaaaaa";

    constructor(fields: {
        week: number;
        number1: number;
        number2: number;
        number3: number;
        number4: number;
        number5: number;
        number6: number;
        player: string;
        pl43: number;
        bump: number;
        wins: number;
        scno: number,
        serialno: number;
        midcno: number;
        mc: number,
        gameno: number,
        alreadyparticipated: number;
        winno: string,
    } | undefined = undefined) {
        if (fields) {
            this.week = fields.week;
            this.number1 = fields.number1;
            this.number2 = fields.number2;
            this.number3 = fields.number3;
            this.number4 = fields.number4;
            this.number5 = fields.number5;
            this.number6 = fields.number6;
            this.player = fields.player;
            this.pl43 = fields.pl43;
            this.bump = fields.bump;
            this.wins = fields.wins;
            this.scno = fields.scno;
            this.serialno = fields.serialno;
            this.midcno = fields.midcno;
            this.mc = fields.mc;
            this.gameno = fields.gameno;
            this.alreadyparticipated = fields.alreadyparticipated;
            this.winno = fields.winno;
        }
    }
}

const CouponSchema = new Map([
    [
        Coupon,
        {
            kind: "struct",
            fields: [
                ["week", "u16"],
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

class Term {
    is_init: number = 0;
    new_demand: number = 0;
    old_demand: number = 0;
    apply_after_t: number = 0;
    new_hostfee: number = 0;
    old_hostfee: number = 0;
    apply_after_h: number = 0;
    new_minersfee: number = 0;
    old_minersfee: number = 0;
    apply_after: number = 0;
    draw_ticket_amount: number = 0;
    rent: number = 0;
    airdrop_tokens_per_game: number = 0;

    constructor(fields: {
        is_init: number;
        new_demand: number;
        old_demand: number;
        apply_after_t: number;
        new_hostfee: number;
        old_hostfee: number;
        apply_after_h: number;
        new_minersfee: number,
        old_minersfee: number,
        apply_after: number,
        draw_ticket_amount: number;
        rent: number;
        airdrop_tokens_per_game: number;

    } | undefined = undefined) {
        if (fields) {
            this.is_init = fields.is_init;
            this.new_demand = fields.new_demand;
            this.old_demand = fields.old_demand;
            this.apply_after_t = fields.apply_after_t;
            this.new_hostfee = fields.new_hostfee;
            this.old_hostfee = fields.old_hostfee;
            this.apply_after_h = fields.apply_after_h;
            this.new_minersfee = fields.new_minersfee;
            this.old_minersfee = fields.old_minersfee;
            this.apply_after = fields.apply_after;
            this.draw_ticket_amount = fields.draw_ticket_amount;
            this.rent = fields.rent;
            this.airdrop_tokens_per_game = fields.airdrop_tokens_per_game;
        }
    }
}

const TermSchema = new Map([
    [
        Term,
        {
            kind: "struct",
            fields: [
                ["is_init", "u8"],
                ["new_demand", "u64"],
                ["old_demand", "u64"],
                ["apply_after_t", "u16"],
                ["new_hostfee", "u64"],
                ["old_hostfee", "u64"],
                ["apply_after_h", "u16"],
                ["new_minersfee", "u64"],
                ["old_minersfee", "u64"],
                ["apply_after", "u16"],
                ["draw_ticket_amount", "u64"],
                ["rent", "u64"],
                ["airdrop_tokens_per_game", "u64"]
            ],
        },
    ],
]);

class Record {
    is_init: number = 0;
    week: number = 0;
    mainCount: number = 0;
    midCount: number = 0;
    subCount: number = 0;
    timetolotto: number = 0;

    constructor(obj) {
        if (obj) {
            this.is_init = obj.is_init;
            this.week = obj.week;
            this.mainCount = obj.mainCount;
            this.midCount = obj.midCount;
            this.subCount = obj.subCount;
            this.timetolotto = obj.timetolotto;
        }
    }
}

const RecordSchema = new Map([
    [
        Record,
        {
            kind: "struct",
            fields: [
                ["is_init", "u8"],
                ["week", "u16"],
                ["mainCount", "u8"],
                ["midCount", "u8"],
                ["subCount", "u8"],
                ["timetolotto", "u64"],
            ],
        },
    ],
]);

class SubCounter {
    numberofthreewinners: number = 0;
    numberoffourwinners: number = 0;
    numberoffivewinners: number = 0;
    numberofsixwinners: number = 0;
    counter: number = 0;
    serialno: number = 0;
    belongtoctrller: number = 0;
    belongtomcno: number = 0;
    belongtomidno: number = 0;
    icollecteddata: number = 0;

    constructor(fields: {
        numberofthreewinners: number;
        numberoffourwinners: number;
        numberoffivewinners: number;
        numberofsixwinners: number;
        counter: number;
        serialno: number;
        belongtoctrller: number;
        belongtomcno: number;
        belongtomidno: number;
        icollecteddata: number;
    } | undefined = undefined) {
        if (fields) {
            this.numberofthreewinners = fields.numberofthreewinners;
            this.numberoffourwinners = fields.numberoffourwinners;
            this.numberoffivewinners = fields.numberoffivewinners;
            this.numberofsixwinners = fields.numberofsixwinners;
            this.counter = fields.counter;
            this.serialno = fields.serialno;
            this.belongtoctrller = fields.belongtoctrller;
            this.belongtomcno = fields.belongtomcno;
            this.belongtomidno = fields.belongtomidno;
            this.icollecteddata = fields.icollecteddata;
        }
    }
}

const SubCounterSchema = new Map([
    [
        SubCounter,
        {
            kind: "struct",
            fields: [
                ["numberofthreewinners", "u64"],
                ["numberoffourwinners", "u64"],
                ["numberoffivewinners", "u64"],
                ["numberofsixwinners", "u16"],
                ["counter", "u16"],
                ["serialno", "u8"],
                ["belongtoctrller", "u8"],
                ["belongtomcno", "u8"],
                ["belongtomidno", "u8"],
                ["icollecteddata", "u8"],
            ],
        },
    ],
]);

async function onConfirm(): Promise<void> {
    const recordBuffer = await connection.getAccountInfo(recordKey);
    const record = deserialize(RecordSchema, Record, recordBuffer!.data);

    const mainCounterAddress = PublicKey.findProgramAddressSync([Buffer.from("maincounter"), Buffer.from([record.mainCount])], programID);

    const midCountNumber = Math.floor(Math.random() * record.midCount) + 1;
    const midCountAddress = PublicKey.findProgramAddressSync(
        [
            Buffer.from("midc"), Buffer.from([record.mainCount]),
            Buffer.from("m"), Buffer.from([midCountNumber]),
            Buffer.from("n"),
        ],
        programID,
    );

    const controllerNumber = Math.floor(Math.random() * record.subCount) + 1;
    const controllerAddress = PublicKey.findProgramAddressSync(
        [
            Buffer.from("sreg"), Buffer.from([record.mainCount]),
            Buffer.from("m"), Buffer.from([midCountNumber]),
            Buffer.from("md"), Buffer.from([controllerNumber]),
        ],
        programID,
    );

    const controllerBuffer = await connection.getAccountInfo(controllerAddress[0]);
    const controllerData = deserialize(SubCounterSchema, SubCounter, controllerBuffer!.data);

    const controllerNumberOfSeries = controllerData.serialno;
    const programAddress = PublicKey.findProgramAddressSync([
            Buffer.from("sc"), Buffer.from([record.mainCount]),
            Buffer.from("m"), Buffer.from([midCountNumber]),
            Buffer.from("md"), Buffer.from([controllerNumber]),
            Buffer.from("n"), Buffer.from([controllerNumberOfSeries]),
            Buffer.from("s")
        ],
        programID
    );

    await play(
        player.publicKey,
        mainCounterAddress[0],
        midCountAddress[0],
        controllerAddress[0],
        programAddress[0],
        record.mainCount,
        midCountNumber,
        controllerNumber,
        controllerNumberOfSeries,
        record.week,
    );
}

async function play(
    publicKey: PublicKey,
    mainCountKey: PublicKey,
    midCountKey: PublicKey,
    controllerKey: PublicKey,
    subCountKey: PublicKey,
    mainCount: number,
    midCount: number,
    controllerNumber: number,
    controllerNumberOfSeries: number,
    weekNumber: number,
): Promise<void> {
    let numberOfSeries: number;
    let counter: number | undefined;
    let bumpGameWins: boolean = false;

    if (controllerNumberOfSeries === 0) {
        numberOfSeries = 1;
        bumpGameWins = true;
    } else {
        const subCounterBuffer = await connection.getAccountInfo(subCountKey);
        const subCounter = deserialize(SubCounterSchema, SubCounter, subCounterBuffer!.data);
        numberOfSeries = subCounter.serialno;
        counter = subCounter.counter;

        if (counter >= 1000) {
            bumpGameWins = true;
            numberOfSeries++;
        }
    }

    const seed = getSeed(
        weekNumber,
        controllerNumberOfSeries,
        numberOfSeries,
        mainCount,
        midCount,
        controllerNumber,
        counter,
    );

    const programAddress = PublicKey.findProgramAddressSync([Buffer.from("L"), Buffer.from(seed)], programID);

    const temp1 = Keypair.generate();
    const temp2 = Keypair.generate();

    const subCountNew = PublicKey.findProgramAddressSync([
            Buffer.from("sc"), Buffer.from([mainCount]),
            Buffer.from("m"), Buffer.from([midCount]),
            Buffer.from("md"), Buffer.from([controllerNumber]),
            Buffer.from("n"), Buffer.from([numberOfSeries]),
            Buffer.from("s"),
        ],
        programID
    );

    const game = new Coupon();
    game.number1 = number1;
    game.number2 = number2;
    game.number3 = number3;
    game.number4 = number4;
    game.number5 = number5;
    game.number6 = number6;
    game.player = publicKey.toString();
    game.bump = programAddress[1];
    game.wins = bumpGameWins ? subCountNew[1] : 0;

    const lottoGameEncoded = serialize(CouponSchema, game);
    const playerRecordKey = await PublicKey.createWithSeed(player.publicKey, "playerrecord", programID);

    let account2ProgramId = SystemProgram.programId;
    let lottoGameBuffer: Uint8Array;
    let keys = [
        { isSigner: false, isWritable: false, pubkey: recordKey },
        { isSigner: false, isWritable: true, pubkey: publicKey },
        { isSigner: false, isWritable: true, pubkey: programAddress[0] },
        { isSigner: false, isWritable: true, pubkey: temp1.publicKey },
        { isSigner: false, isWritable: true, pubkey: temp2.publicKey },
        { isSigner: false, isWritable: true, pubkey: subCountKey },
        { isSigner: false, isWritable: true, pubkey: controllerKey },
        { isSigner: false, isWritable: false, pubkey: mainCountKey },
        { isSigner: false, isWritable: false, pubkey: midCountKey },
        { isSigner: false, isWritable: false, pubkey: termKey },
        { isSigner: false, isWritable: true, pubkey: playerRecordKey },
        { isSigner: false, isWritable: true, pubkey: SystemProgram.programId },
    ];

    if (counter !== undefined && counter < 1000) {
        account2ProgramId = programID;
        lottoGameBuffer = Uint8Array.of(0, ...lottoGameEncoded);
        keys.splice(5, 0, { isSigner: false, isWritable: true, pubkey: hostKey });
    } else {
        lottoGameBuffer = Uint8Array.of(1, ...lottoGameEncoded);
        keys.splice(6, 0, { isSigner: false, isWritable: true, pubkey: subCountNew[0] });
    }

    const termAccount = await connection.getAccountInfo(termKey);
    const term = deserialize(TermSchema, Term, termAccount!.data);

    const { rent, total } = await getFees(weekNumber, term);
    const transactionInstruction = new TransactionInstruction({
        programId: programID,
        keys,
        data: Buffer.from(lottoGameBuffer)
    });


    await createAndConfirmTransaction(
        account2ProgramId,
        transactionInstruction,
        publicKey,
        playerRecordKey,
        rent,
        temp1,
        temp2,
        total,
        term,
    );
}

function getSeed(
    weekNumber: number,
    controllerNumberOfSeries: number,
    numberOfSeries: number,
    mainCount: number,
    midCount: number,
    controllerNumber: number,
    counter?: number,
): string {
    let s6: string;

    if (controllerNumberOfSeries === 0) {
        s6 = (1).toString();
    } else {
        if (counter! < 1000) {
            s6 = (counter! + 1).toString();
        } else {
            s6 = (1).toString();
        }
    }

    const sp1 = 'w';
    const s1 = weekNumber.toString();
    const sp2 = "m";
    const s2 = mainCount.toString();
    const sp3 = "md";
    const s3 = midCount.toString();
    const sp4 = "sc";
    const s4 = controllerNumber.toString();
    const sp5 = "sr";
    const s5 = numberOfSeries.toString();
    const sp6 = "x";

    return sp1 + s1 + sp2 + s2 + sp3 + s3 + sp4 + s4 + sp5 + s5 + sp6 + s6;
}

async function getFees(weekNumber: number, term: Term): Promise<{ rent: number, total: number }> {
    const rentAsString = String(term.rent);
    let demandAsString = String(term.new_demand);
    let hostFeesAsString = String(term.new_hostfee);
    let minerFeesAsString = String(term.new_minersfee);

    if (weekNumber <= term.apply_after) {
        minerFeesAsString = String(term.old_minersfee);
    }

    if (weekNumber <= term.apply_after_t) {
        demandAsString = String(term.old_demand);
    }

    if (weekNumber <= term.apply_after_h) {
        hostFeesAsString = String(term.old_hostfee);
    }

    const rent = parseInt(rentAsString, 10);
    const demand = parseInt(demandAsString, 10);
    const hostFee = parseInt(hostFeesAsString, 10);
    const minerFee = parseInt(minerFeesAsString, 10);

    const total = demand + hostFee + minerFee;

    return { rent, total };
}

async function createAndConfirmTransaction(
    account2ProgramId: PublicKey,
    transactionInstruction: TransactionInstruction,
    publicKey: PublicKey,
    playerRecordKey: PublicKey,
    rent: number,
    temp1: Keypair,
    temp2: Keypair,
    total: number,
    term: Term,
): Promise<RpcResponseAndContext<SignatureResult>> {
    const account1 = SystemProgram.createAccount({
        fromPubkey: publicKey,
        newAccountPubkey: temp1.publicKey,
        lamports: rent,
        space: 0,
        programId: SystemProgram.programId
    });

    const account2 = SystemProgram.createAccount({
        fromPubkey: publicKey!,
        newAccountPubkey: temp2.publicKey,
        lamports: total,
        space: 0,
        programId: account2ProgramId
    });

    const transaction = new Transaction();

    if (term.draw_ticket_amount !== 0) {
        const playerRecordBuffer = await connection.getAccountInfo(playerRecordKey);
        if ((playerRecordBuffer === null || playerRecordBuffer.lamports === null)) {
            const createdPlayerRecord = SystemProgram.createAccountWithSeed({
                fromPubkey: player.publicKey,
                newAccountPubkey: playerRecordKey,
                basePubkey: player.publicKey,
                seed: "playerrecord",
                lamports: 20000000,
                space: 10,
                programId: programID,
            });

            transaction.add(createdPlayerRecord);
        }
    }

    transaction.add(account1, account2, transactionInstruction);
    transaction.feePayer = publicKey;

    const hash = await this._blockChainService.connection.getLatestBlockhash();
    transaction.recentBlockhash = hash.blockhash;
    transaction.lastValidBlockHeight = hash.lastValidBlockHeight;

    transaction.sign(temp1, temp2);

    // ------------------------------------
    // Need to check how to sign the transaction
    // ------------------------------------
    const signedTrans = await firstValueFrom(this._blockChainService.signTransaction(transaction));
    const signature = await connection.sendRawTransaction(transaction.serialize());
    return await connection.confirmTransaction(
        { signature, blockhash: hash.blockhash, lastValidBlockHeight: hash.lastValidBlockHeight },
        'singleGossip',
    );
}
