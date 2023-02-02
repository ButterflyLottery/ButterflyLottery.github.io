
import {
    Connection,
    Keypair,
    PublicKey,
    TransactionInstruction,
    TransactionMessage,
    VersionedTransaction,
  } from "@solana/web3.js";

  import {deserialize} from 'borsh';

  import bs58 from 'bs58';

  class SubCounter{
    numberofthreewinners:number = 0;
    numberoffourwinners:number = 0;
    numberoffivewinners:number = 0;
    numberofsixwinners:number = 0;
    numberofcounters:number = 0;
    counterno:number = 0;
    belongtomcno:number = 0;
    belongtomidno:number = 0;
    icollecteddata:number = 0;
    randomness:string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    r43:number = 0;
    constructor(fields: {
      numberofthreewinners:number;
      numberoffourwinners:number;
      numberoffivewinners:number;
      numberofsixwinners:number;
      numberofcounters:number;
      counterno:number;
      belongtomcno:number;
      belongtomidno:number;
      icollecteddata:number;
      randomness:string;
      r43:number;
  } | undefined = undefined)
      {if (fields) {
        this.numberofthreewinners=fields.numberofthreewinners; 
        this.numberoffourwinners=fields.numberoffourwinners; 
        this.numberoffivewinners=fields.numberoffivewinners;
        this.numberofsixwinners=fields.numberofsixwinners;
        this.numberofcounters=fields.numberofcounters;
        this.counterno=fields.counterno;
        this.belongtomcno=fields.belongtomcno;
        this.belongtomidno=fields.belongtomidno;
        this.icollecteddata=fields.icollecteddata;
        this.randomness=fields.randomness;
        this.r43=fields.r43;
      }
    }
  }
  const SubCounterSchema=new Map([
    [
      SubCounter,
      {
        kind: "struct",
        fields: [
          ["numberofthreewinners","u64"],
          ["numberoffourwinners","u64"],
          ["numberoffivewinners","u64"],
          ["numberofsixwinners","u16"],
          ["numberofcounters","u8"],
          ["counterno","u8"],
          ["belongtomcno","u8"],
          ["belongtomidno","u8"],
          ["icollecteddata","u8"],
          ["randomness","String"], 
          ["r43","u8"], 
        ],
      },
    ],
  ]);
  class MidCounter{
    numberofthreewinners:number = 0;
    numberoffourwinners:number = 0;
    numberoffivewinners:number = 0;
    numberofsixwinners:number = 0;
    counter:number = 0;
    counterno:number = 0;
    belongtomcno:number = 0;
    icollecteddata:number = 0;
    numberofsubcounters:number = 0;
    subcounterscalculated:number = 0;
    randomness:string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    r43:number = 0;
    constructor(fields: {
      numberofthreewinners:number;
      numberoffourwinners:number;
      numberoffivewinners:number;
      numberofsixwinners:number;
      counter:number;
      counterno:number;
      belongtomcno:number;
      icollecteddata:number;
      numberofsubcounters:number;
      subcounterscalculated:number;
      randomness:string;
      r43:number;
  } | undefined = undefined)
      {if (fields) {
        this.numberofthreewinners=fields.numberofthreewinners; 
        this.numberoffourwinners=fields.numberoffourwinners; 
        this.numberoffivewinners=fields.numberoffivewinners;
        this.numberofsixwinners=fields.numberofsixwinners;
        this.counter=fields.counter;
        this.counterno=fields.counterno;
        this.belongtomcno=fields.belongtomcno;
        this.icollecteddata=fields.icollecteddata;
        this.numberofsubcounters=fields.numberofsubcounters;
        this.subcounterscalculated=fields.subcounterscalculated;
        this.randomness=fields.randomness;
        this.r43=fields.r43;
      }
    }
  }
  const MidCounterSchema=new Map([
    [
      MidCounter,
      {
        kind: "struct",
        fields: [
          ["numberofthreewinners","u64"],
          ["numberoffourwinners","u64"],
          ["numberoffivewinners","u64"],
          ["numberofsixwinners","u16"],
          ["counter","u64"],
          ["counterno","u8"],
          ["belongtomcno","u8"],
          ["icollecteddata","u8"],
          ["numberofsubcounters","u8"],
          ["subcounterscalculated","u8"],
          ["randomness","String"], 
          ["r43","u8"], 
        ],
      },
    ],
  ]);
  class MainCounter{
    counterno:number = 0;
    week:number = 0;
    numberofmidcounters:number = 0;
    midcounterscalculated:number = 0;
    constructor(fields: {
      counterno:number;
      week:number;
      numberofmidcounters:number;
      midcounterscalculated:number;
  
     } | undefined = undefined)
      {if (fields) {
        this.counterno = fields.counterno;
        this.week = fields.week;
        this.numberofmidcounters = fields.numberofmidcounters;
        this.midcounterscalculated = fields.midcounterscalculated;
      }
    }
  }
  const MainCounterSchema=new Map([
    [
      MainCounter,
      {
        kind: "struct",
        fields: [
         ["counterno","u8"],
         ["week","u16"],
         ["numberofmidcounters","u8"],
         ["midcounterscalculated","u8"],
        ],
      },
    ],
  ]);

  class Record{
    is_init:number = 0;
    week:number = 0;
    mcofweek:number = 0;
    midcnumber:number = 0;
    subcnumber:number = 0;
    timetolotto:number = 0;
    constructor(fields: {
      is_init:number;
      week:number;
      mcofweek:number;
      midcnumber:number;
      subcnumber:number;
      timetolotto:number;
  
     } | undefined = undefined)
      {if (fields) {
        this.is_init = fields.is_init; 
        this.week = fields.week; 
        this.mcofweek = fields.mcofweek; 
        this.midcnumber = fields.midcnumber; 
        this.subcnumber = fields.subcnumber; 
        this.timetolotto = fields.timetolotto; 
      }
    }
  }
  const RecordSchema=new Map([
    [
      Record,
      {
        kind: "struct",
        fields: [
          ["is_init","u8"],
          ["week","u16"],
          ["mcofweek","u8"],
          ["midcnumber","u8"],
          ["subcnumber","u8"],
          ["timetolotto","u64"],
        ],
      },
    ],
  ]);

  const connection= new Connection("your private node api","confirmed");
  
  const privkey1 = [];
  
  const miner = Keypair.fromSecretKey(Uint8Array.from(privkey1));
  
  
  const programID =  new PublicKey("6UA8U5SHkuUWGeqc9mnFeby6TTCACvTSACwQo4fuhDH");
  const minerterms = new PublicKey("Ahtn39Z2ygELUewQ2ySJfS5HToaKG8gqEoU1EAfDrD8B");
  const record = new PublicKey("3HY8Tu7UYMqSnnhXEHe9mmrUds5wEZWs4q6YAubyPPFE");


  //get counter info
  //write a counterno btween 1 and the number of related counters
  //control will fail if coupon in the counter is already checked
  //control_week should be less than current week
  let control_week = 3;
  const maincounterno = 2;
  const midcounterno = 2;
  const subcounterno = 2;
  const counterno = 2;

  const get_counters_info = async()=>{

    const record_acc = await connection.getAccountInfo(record);
    const rec_data = deserialize(RecordSchema,Record,record_acc!.data);
    console.log("current week = "+rec_data.week);

    const maincounter = PublicKey.findProgramAddressSync([
      Buffer.from("maincounter"),Buffer.from([maincounterno])],programID);

      const maincounter_account = await connection.getAccountInfo(maincounter[0]);
      const maincounter_data = deserialize(MainCounterSchema,MainCounter,maincounter_account!.data);

    const midcounter =PublicKey.findProgramAddressSync([//
      Buffer.from("midc"),Buffer.from([maincounterno]),
      Buffer.from("m"),Buffer.from([midcounterno]),
      Buffer.from("n")],programID);

    const midcounter_account = await connection.getAccountInfo(midcounter[0]);
    const midcounter_data = deserialize(MidCounterSchema,MidCounter,midcounter_account!.data);

    const subcounter =PublicKey.findProgramAddressSync([
      Buffer.from("sreg"),Buffer.from([maincounterno]),
      Buffer.from("m"),Buffer.from([midcounterno]),
      Buffer.from("md"),Buffer.from([subcounterno]),
      ],programID);

    const subcounter_account = await connection.getAccountInfo(subcounter[0]);
    const subcounter_data = deserialize(SubCounterSchema,SubCounter,subcounter_account!.data);

    console.log("maincounter no = "+maincounter_data.counterno);
    console.log("number of midcounters = "+maincounter_data.numberofmidcounters);
    console.log("midcounterno = "+midcounter_data.counterno);
    console.log("number of subcounters = "+midcounter_data.numberofsubcounters);
    console.log("subcounter no = "+subcounter_data.counterno);
    console.log("number of counters = "+subcounter_data.numberofcounters);
    
  }
  
  const sleep = (ms:number) => {
   return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  
  const control_stage_one_a = async(
    win_numbers:PublicKey,
    maincounter:PublicKey,
    counter:PublicKey,
    director:PublicKey,
    game:PublicKey
  )=>{


    const ix = new TransactionInstruction({
      programId:programID,
      keys:[
        {isSigner:false,isWritable:true,pubkey:game[0]},
        {isSigner:false,isWritable:false,pubkey:win_numbers},
        {isSigner:false,isWritable:true,pubkey:miner.publicKey},//miner
        {isSigner:false,isWritable:false,pubkey:minerterms},
        {isSigner:false,isWritable:false,pubkey:maincounter},
        {isSigner:false,isWritable:true,pubkey:counter},
        {isSigner:false,isWritable:false,pubkey:director},
        //{isSigner:false,isWritable:true,pubkey:miner_acc[0]},

      ],
      data:Buffer.from([70])
    });



    const message = new TransactionMessage({
      instructions:[ix],
      payerKey:miner.publicKey,
      recentBlockhash: (await connection.getLatestBlockhash()).blockhash
    }).compileToV0Message();

    const tx = new VersionedTransaction(message);
    tx.sign([miner]);
  
    connection.sendTransaction(tx);
  
    return sleep(6000);
  
  }

  const start_control = async()=>{

    
    const win_numbers = PublicKey.findProgramAddressSync([
      Buffer.from("winnumbers"),
      Buffer.from(control_week.toString())],programID);


    const director = PublicKey.findProgramAddressSync([
      Buffer.from("director"),
      Buffer.from(control_week.toString())],programID);

    const maincounter = PublicKey.findProgramAddressSync([
      Buffer.from("maincounter"),Buffer.from([maincounterno])],programID);
  

    const counter =PublicKey.findProgramAddressSync([
        Buffer.from("sc"),Buffer.from([maincounterno]),
        Buffer.from("m"),Buffer.from([midcounterno]),
        Buffer.from("md"),Buffer.from([subcounterno]),
        Buffer.from("n"),Buffer.from([counterno]),
        Buffer.from("s")],programID);


        const seed = Buffer.from("");
        

        const encoded = bs58.encode(seed);

        const accounts = await connection.getProgramAccounts(
          programID,
          {
            filters: [
              {
                dataSize: 93, // number of bytes
              },
              {
                memcmp: {
                  offset: 70,
                  bytes: encoded,
                }
              }

            ],
          }
        );

        for (let i = 0; i < accounts.length; i++) {
          try {
          control_stage_one_a(win_numbers[0],maincounter[0],counter[0],director[0],accounts[i].pubkey);
            
          } catch (error) {
            console.log(error);
          }
          
        }


  }

