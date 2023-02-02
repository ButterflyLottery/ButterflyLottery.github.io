import {
    Connection,
    PublicKey,
  } from "@solana/web3.js";

  import {deserialize} from 'borsh';

  const connection= new Connection("your private node api");

  const programID =  new PublicKey("6UA8U5SHkuUWGeqc9mnFeby6TTCACvTSACwQo4fuhDH");



  class MainScreen{
    weekno:number = 0;
    number1:number = 0;
    number2:number = 0;
    number3:number = 0;
    number4:number = 0;
    number5:number = 0;
    number6:number = 0;
    numberofthreewinners:number = 0;
    numberoffourwinners:number = 0;
    numberoffivewinners:number = 0;
    numberofsixwinners:number = 0;
    threewinnersget:number = 0;
    fourwinnersget:number = 0;
    fivewinnersget:number = 0;
    sixwinnersget:number = 0;
    timetolotto:number = 0;
    draw_reward:number = 0;
    draw_reward_divided_to:number = 0;
    carryover:number = 0;
    directorstage:number = 0;
    directorready:number = 0;
    distnumberthree:number = 0;
    distnumberfour:number = 0;
    distnumberfive:number = 0;
    constructor(fields: {
      weekno:number;
      number1:number;
      number2:number;
      number3:number;
      number4:number;
      number5:number;
      number6:number;
      numberofthreewinners:number;
      numberoffourwinners:number;
      numberoffivewinners:number;
      numberofsixwinners:number;
      threewinnersget:number;
      fourwinnersget:number;
      fivewinnersget:number;
      sixwinnersget:number;
      timetolotto:number;
      draw_reward:number;
      draw_reward_divided_to:number;
      carryover:number;
      directorstage:number;
      directorready:number;
      distnumberthree:number;
      distnumberfour:number;
      distnumberfive:number;
  
     } | undefined = undefined)
      {if (fields) {
        this.weekno = fields.weekno;
        this.number1 = fields.number1;
        this.number2 = fields.number2;
        this.number3 = fields.number3;
        this.number4 = fields.number4;
        this.number5 = fields.number5;
        this.number6 = fields.number6;
        this.numberofthreewinners = fields.numberofthreewinners;
        this.numberoffourwinners = fields.numberoffourwinners;
        this.numberoffivewinners = fields.numberoffivewinners;
        this.numberofsixwinners = fields.numberofsixwinners;
        this.threewinnersget = fields.threewinnersget;
        this.fourwinnersget = fields.fourwinnersget;
        this.fivewinnersget = fields.fivewinnersget;
        this.sixwinnersget = fields.sixwinnersget;
        this.timetolotto = fields.timetolotto;
        this.draw_reward = fields.draw_reward;
        this.draw_reward_divided_to = fields.draw_reward_divided_to;
        this.carryover = fields.carryover;
        this.directorstage = fields.directorstage;
        this.directorready = fields.directorready;
        this.distnumberthree = fields.distnumberthree;
        this.distnumberfour = fields.distnumberfour;
        this.distnumberfive = fields.distnumberfive;
      }
    }
  }
  const MainScreenSchema=new Map([
    [
      MainScreen,
      {
        kind: "struct",
        fields: [
          ["weekno","u16"],
          ["number1"," u8"],
          ["number2"," u8"],
          ["number3"," u8"],
          ["number4"," u8"],
          ["number5"," u8"],
          ["number6"," u8"],
          ["numberofthreewinners","u64"],
          ["numberoffourwinners","u64"],
          ["numberoffivewinners","u64"],
          ["numberofsixwinners","u16"],
          ["threewinnersget","u64"],
          ["fourwinnersget","u64"],
          ["fivewinnersget","u64"],
          ["sixwinnersget","u64"],
          ["timetolotto","u64"],
          ["draw_reward","u64"],
          ["draw_reward_divided_to","u16"],
          ["carryover","u64"],
          ["directorstage","u8"],
          ["directorready","u8"],
          ["distnumberthree","u16"],
          ["distnumberfour","u16"],
          ["distnumberfive","u16"],
        ],
      },
    ],
  ]);

  const weekno = 2;


  const get_main_screen = async() => {

    const main_screen = PublicKey.findProgramAddressSync([Buffer.from("interface"),Buffer.from(weekno.toString())], programID);
    const main_screen_acc = await connection.getAccountInfo(main_screen[0]);
    const main_screen_data = deserialize(MainScreenSchema,MainScreen,main_screen_acc!.data);

  }

