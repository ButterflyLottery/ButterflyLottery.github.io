
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
  

  const connection= new Connection("your private node api","confirmed");
  
  
  const privkey1 = 
  [];
  
  const payer = Keypair.fromSecretKey(Uint8Array.from(privkey1));
  
  
  const programID =  new PublicKey("6UA8U5SHkuUWGeqc9mnFeby6TTCACvTSACwQo4fuhDH");
  const minerterms = new PublicKey("Ahtn39Z2ygELUewQ2ySJfS5HToaKG8gqEoU1EAfDrD8B");

  
  let control_week = 3;
  const maincounterno = 2;
  const midcounterno = 2;
  const subcounterno = 2;
  const counterno = 2;
  
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
        {isSigner:false,isWritable:true,pubkey:payer.publicKey},//miner
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
      payerKey:payer.publicKey,
      recentBlockhash: (await connection.getLatestBlockhash()).blockhash
    }).compileToV0Message();

    const tx = new VersionedTransaction(message);
    tx.sign([payer]);
  
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
