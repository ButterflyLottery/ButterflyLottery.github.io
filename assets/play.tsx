import {
  Connection,
  Keypair,
  PublicKey,
  TransactionMessage,
  TransactionInstruction, 
  VersionedTransaction
} from "@solana/web3.js";

  import {serialize, deserialize} from 'borsh';

  const connection= new Connection("https://api.mainnet-beta.solana.com","confirmed");
  
  //paste here your private key.
  const privkey = [];
  //choose six numbers between 1 and 49 (1 and 49 included)
  const number1=1;
  const number2=2;
  const number3=3;
  const number4=4;
  const number5=5;
  const number6=49;
  
  const player = Keypair.fromSecretKey(Uint8Array.from(privkey));
  const host = new PublicKey("J5LEQRmXDZbY8Q3cxvZWZJJn9wYJKeaPwfRZHnz79YYE");
  const programID =  new PublicKey("6UA8U5SHkuUWGeqc9mnFeby6TTCACvTSACwQo4fuhDH");
  const term = new PublicKey("4LmheLVizuRFpw64F1TXnjML8wevLzvvTyKYTbSZsA5b");
  const record = new PublicKey("3HY8Tu7UYMqSnnhXEHe9mmrUds5wEZWs4q6YAubyPPFE");
  
  
  class SubRegister{
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
    r43:number = 0;    // 4YbLBRXwseG1NuyJbteSD5u81Q2QjFqJBp6JmxwYBKYm
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
  const SubRegisterSchema=new Map([
    [
      SubRegister,
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
  class Coupon {
    week:number=0;
    number1:number = 0;
    number2:number = 0;
    number3:number = 0;
    number4:number = 0;
    number5:number = 0;
    number6:number = 0;
    player:string = "4YbLBRXwseG1NuyJbteSD5u81Q2QjFqJBp6JmxwYBKYm";
    pl43:number = 0;
    wins:number=0;
    bump:number=0;
    scno:number=0;
    serialno:number=0;
    midcno:number=0;  
    mc:number=0;
    gameno:number=0;
    alreadyparticipated:number=0;
    winno:string="wwwwmmmmssssrrrraaaaaaa";
    constructor(fields: {
      week:number;
      number1:number;
      number2:number;
      number3:number;
      number4:number;
      number5:number;
      number6:number;
      player:string;
      pl43:number;
      bump:number;
      wins:number;
      scno:number,
      serialno:number;
      midcno:number;
      mc:number,
      gameno:number,
      alreadyparticipated:number;
      winno:string,
    } | undefined = undefined) {
      if (fields) {
        this.week = fields.week;
        this.number1 = fields.number1;
        this.number2=fields.number2;
        this.number3=fields.number3;
        this.number4=fields.number4;
        this.number5=fields.number5;
        this.number6=fields.number6;
        this.player=fields.player;
        this.pl43=fields.pl43;
        this.bump=fields.bump;
        this.wins=fields.wins;
        this.scno=fields.scno;
        this.serialno=fields.serialno;
        this.midcno=fields.midcno;
        this.mc=fields.mc;
        this.gameno=fields.gameno;
        this.alreadyparticipated=fields.alreadyparticipated;
        this.winno=fields.winno;
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
          ["scno","u8"],
          ["serialno","u8"],
          ["midcno","u8"],
          ["mc","u8"],
          ["gameno","u16"],
          ["alreadyparticipated","u8"],
          ["winno","String"],
        ],
      },
    ],
  ]);
  class Term{
    is_init:number = 0;
    new_demand:number = 0;
    old_demand:number = 0;
    apply_after_t:number = 0;
    new_hostfee:number = 0;
    old_hostfee:number = 0;
    apply_after_h:number = 0;
    new_minersfee:number = 0;
    old_minersfee:number = 0;
    apply_after:number = 0;
    draw_ticket_amount:number = 0;
    rent:number = 0;
    airdrop_tokens_per_game:number = 0;
  
    constructor(fields: {
      is_init:number;
      new_demand:number;
      old_demand:number;
      apply_after_t:number;
      new_hostfee:number;
      old_hostfee:number;
      apply_after_h:number;
      new_minersfee:number,
      old_minersfee:number,
      apply_after:number,
      draw_ticket_amount:number;
      rent:number;
      airdrop_tokens_per_game:number;
  
     } | undefined = undefined)
      {if (fields) {
        this.is_init=fields.is_init; 
        this.new_demand=fields.new_demand; 
        this.old_demand=fields.old_demand; 
        this.apply_after_t=fields.apply_after_t; 
        this.new_hostfee=fields.new_hostfee;
        this.old_hostfee=fields.old_hostfee;
        this.apply_after_h=fields.apply_after_h;
        this.new_minersfee=fields.new_minersfee;
        this.old_minersfee=fields.old_minersfee;
        this.apply_after=fields.apply_after;
        this.draw_ticket_amount=fields.draw_ticket_amount;
        this.rent=fields.rent;
        this.airdrop_tokens_per_game=fields.airdrop_tokens_per_game;
      }
    }
  }
  const TermSchema=new Map([
    [
      Term,
      {
        kind: "struct",
        fields: [
          ["is_init","u8"],
          ["new_demand","u64"],
          ["old_demand","u64"],
          ["apply_after_t","u16"],
          ["new_hostfee","u64"],
          ["old_hostfee","u64"],
          ["apply_after_h","u16"],
          ["new_minersfee","u64"],
          ["old_minersfee","u64"],
          ["apply_after","u16"],
          ["draw_ticket_amount","u64"],
          ["rent","u64"],
          ["airdrop_tokens_per_game","u64"]
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
  class SubCounter{
    numberofthreewinners:number = 0;
    numberoffourwinners:number = 0;
    numberoffivewinners:number = 0;
    numberofsixwinners:number = 0;
    counter:number = 0;
    serialno:number = 0;
    belongtoctrller:number = 0;
    belongtomcno:number = 0;
    belongtomidno:number = 0;
    icollecteddata:number = 0;
    constructor(fields: {
      numberofthreewinners:number;
      numberoffourwinners:number;
      numberoffivewinners:number;
      numberofsixwinners:number;
      counter:number;
      serialno:number;
      belongtoctrller:number;
      belongtomcno:number;
      belongtomidno:number;
      icollecteddata:number;
  } | undefined = undefined)
      {if (fields) {
        this.numberofthreewinners=fields.numberofthreewinners; 
        this.numberoffourwinners=fields.numberoffourwinners; 
        this.numberoffivewinners=fields.numberoffivewinners;
        this.numberofsixwinners=fields.numberofsixwinners;
        this.counter=fields.counter;
        this.serialno=fields.serialno;
        this.belongtoctrller=fields.belongtoctrller;
        this.belongtomcno=fields.belongtomcno;
        this.belongtomidno=fields.belongtomidno;
        this.icollecteddata=fields.icollecteddata;
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
          ["counter","u16"],
          ["serialno","u8"],
          ["belongtoctrller","u8"],
          ["belongtomcno","u8"],
          ["belongtomidno","u8"],
          ["icollecteddata","u8"],
        ],
      },
    ],
  ]);

//our play function
  