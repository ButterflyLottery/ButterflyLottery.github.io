  import {
    Connection,
    Keypair,
    PublicKey,
  } from "@solana/web3.js";

  import bs58 from 'bs58';

  import {deserialize,serialize} from 'borsh';

    
  
  const privatekey = [];
  
  const player = Keypair.fromSecretKey(Uint8Array.from(privatekey));

  const connection= new Connection("insert your private node api*","confirmed");



  
  const list_coupons = async()=>{

    const programID =  new PublicKey("6UA8U5SHkuUWGeqc9mnFeby6TTCACvTSACwQo4fuhDH");


    const base = bs58.encode( Buffer.from(player.publicKey.toString()));

    return connection.getProgramAccounts(
        programID,
        {
            filters: [
                { dataSize: 93 },
                { memcmp: { offset: 12, bytes: base } },
            ],
        }
    );



  }


  list_coupons();