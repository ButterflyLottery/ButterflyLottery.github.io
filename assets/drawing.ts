import {
    Connection,
    Keypair,
    PublicKey,
    TransactionMessage,
    TransactionInstruction, 
    VersionedTransaction
  } from "@solana/web3.js";

  import {deserialize} from 'borsh';

    
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

  const connection = new Connection("https://api.mainnet-beta.solana.com","confirmed");
  
  
  const privkey1 = 
  [];
  
  const payer = Keypair.fromSecretKey(Uint8Array.from(privkey1));

  const get_idle_maincounter = async()=>{

    const record = new PublicKey("3HY8Tu7UYMqSnnhXEHe9mmrUds5wEZWs4q6YAubyPPFE");
    const account_info = await connection.getAccountInfo(record);
    const account_data = deserialize(RecordSchema,Record,account_info!.data);

    let idle_mc = 0;

    if(account_data.mcofweek == 1){
        idle_mc = 1;

    }else{
        idle_mc = 2;
    }

    return idle_mc;
  }
  
  const draw = async()=>{

    const programID =  new PublicKey("6UA8U5SHkuUWGeqc9mnFeby6TTCACvTSACwQo4fuhDH");
    const rentterms = new PublicKey("BXK4x5kmoAWb6VidHZQ8JvnDfgXeZpDzCmRt62t5SgzZ");
    const distterms = new PublicKey("5BRQLrPg8mdbyiVKB2pVtzUUo6ciS1vYTSeCsnN37P3W");
    const playterms = new PublicKey("74ZF8ZgwKWrftdQNjR9YAtFrY9hP54kNVoF7sPqW6sec");
    const record = new PublicKey("3HY8Tu7UYMqSnnhXEHe9mmrUds5wEZWs4q6YAubyPPFE");
    const lottofund = new PublicKey("E1uCSe6dfh39ChJH1cPbngNqDwXEvpupamMXBGtFqcn5");
    const lottery = new PublicKey("AXLkCCNKxB6Cvc44HnmLfAh6tMQVz9wnw9tDdoPQErtT");

    let player_record= await PublicKey.createWithSeed(payer.publicKey,"playerrecord",programID);

    let idle_mc = get_idle_maincounter();

    const maincounter = PublicKey.findProgramAddressSync([Buffer.from("maincounter"),Buffer.from([idle_mc])],programID);
    const midcounter = PublicKey.findProgramAddressSync([Buffer.from("midc"),Buffer.from([idle_mc]),Buffer.from("m"),Buffer.from([1]),Buffer.from("n")],programID);
  
    const ix = new TransactionInstruction({
     programId:programID,
     keys:[
      {isSigner:false,isWritable:true,pubkey:record},
      {isSigner:false,isWritable:true,pubkey:maincounter[0]},
      {isSigner:false,isWritable:false,pubkey:midcounter[0]},
      {isSigner:false,isWritable:true,pubkey:payer.publicKey},
      {isSigner:false,isWritable:true,pubkey:player_record},
      {isSigner:false,isWritable:true,pubkey:lottofund},
      {isSigner:false,isWritable:true,pubkey:lottery},
      {isSigner:false,isWritable:false,pubkey:playterms},
      {isSigner:false,isWritable:false,pubkey:rentterms},
      {isSigner:false,isWritable:false,pubkey:distterms},
    ],
     data:Buffer.from([200])
    });
  

    const message = new TransactionMessage({
      instructions:[ix],
      payerKey:payer.publicKey,
      recentBlockhash: (await connection.getLatestBlockhash()).blockhash
    }).compileToV0Message();

    const tx = new VersionedTransaction(message);
    tx.sign([payer]);
  
    connection.sendTransaction(tx);
  
  }


  draw();
  
  