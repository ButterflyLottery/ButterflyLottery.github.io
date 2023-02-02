import { Connection, Keypair, PublicKey, TransactionInstruction, TransactionMessage,
     VersionedTransaction } from '@solana/web3.js';

import bs58 from 'bs58';


const programID = new PublicKey("6UA8U5SHkuUWGeqc9mnFeby6TTCACvTSACwQo4fuhDH");

const privatekey: number[] = []; // Insert your private key here
const couponCode = 'SQqGs51XgMi3BJxdwszY4TN1dpAS8oGA8x08DyI3hEtzprLIwD'; // Insert your coupon code here

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
const claimer = Keypair.fromSecretKey(Uint8Array.from(privatekey));


  
  const return_deposit = async()=>{


    const seed = bs58.decode(couponCode);
    const couponAddress = PublicKey.findProgramAddressSync([Buffer.from("L"), Buffer.from(seed)], programID);


    const ix = new TransactionInstruction({
        programId: programID,
        keys: [
            { isSigner: false, isWritable: true, pubkey: claimer.publicKey },
            { isSigner: false, isWritable: true, pubkey: couponAddress[0] },
        ],
        data: Buffer.from([17])
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

  return_deposit()