  import { Connection, PublicKey } from "@solana/web3.js";
  import {  deserialize } from 'borsh';
  
  const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
  
  const recordKey = new PublicKey("3HY8Tu7UYMqSnnhXEHe9mmrUds5wEZWs4q6YAubyPPFE");


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

  
  const get_countdown = async()=>{

    const record_acc = await connection.getAccountInfo(recordKey);
    const rec_data = deserialize(RecordSchema,Record,record_acc!.data);
    
    const time_left =  rec_data.timetolotto - Math.round(Date.now()/1000);

    console.log("time left for drawing = "+time_left.toString());
    
  }

  get_countdown();
  