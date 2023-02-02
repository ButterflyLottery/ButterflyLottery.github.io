
import {
    Connection,
    PublicKey,
  } from "@solana/web3.js";

import {deserialize} from 'borsh';


  const connection= new Connection("https://api.mainnet-beta.solana.com","confirmed");


  const programID =  new PublicKey("6UA8U5SHkuUWGeqc9mnFeby6TTCACvTSACwQo4fuhDH");


class Winningnumbers{
  is_init:number = 0;
  number1:number = 0;
  number2:number = 0;
  number3:number = 0;
  number4:number = 0;
  number5:number = 0;
  number6:number = 0;
  weekno:number = 0;
  numberofsubcounters:number = 0;
  subcounterscalculated:number = 0;
  constructor(fields: {
    is_init:number;
    number1:number;
    number2:number;
    number3:number;
    number4:number;
    number5:number;
    number6:number;
    weekno:number;
   } | undefined = undefined)
    {if (fields) {
      this.is_init=fields.is_init; 
      this.number1=fields.number1; 
      this.number2=fields.number2; 
      this.number3=fields.number3; 
      this.number4=fields.number4; 
      this.number5=fields.number5; 
      this.number6=fields.number6; 
      this.weekno=fields.weekno;
    }
  }
}
const WinningnumbersSchema=new Map([
  [
    Winningnumbers,
    {
      kind: "struct",
      fields: [
        ["is_init","u8"],
        ["number1", "u8"],
        ["number2", "u8"],
        ["number3", "u8"],
        ["number4", "u8"],
        ["number5", "u8"],
        ["number6", "u8"],
        ["weekno","u16"],
      ],
    },
  ],
]);
class Numberofwinners{
  numberofthreewinners:number = 0;
  numberoffourwinners:number = 0;
  numberoffivewinners:number = 0;
  numberofsixwinners:number = 0;
  weekno:number = 0;
  constructor(fields: {
    numberofthreewinners:number;
    numberoffourwinners:number;
    numberoffivewinners:number;
    numberofsixwinners:number;
    weekno:number;
   } | undefined = undefined)
    {if (fields) {
      this.numberofthreewinners=fields.numberofthreewinners; 
      this.numberoffourwinners=fields.numberoffourwinners; 
      this.numberoffivewinners=fields.numberoffivewinners; 
      this.numberofsixwinners=fields.numberofsixwinners; 
      this.weekno=fields.weekno;
    }
  }
}
const NumberofwinnersSchema=new Map([
  [
    Numberofwinners,
    {
      kind: "struct",
      fields: [
        ["numberofthreewinners","u64"],
        ["numberoffourwinners","u64"],
        ["numberoffivewinners","u64"],
        ["numberofsixwinners","u16"],
        ["weekno","u16"],
      ],
    },
  ],
]);
class Distribution{
  threewinnersget:number = 0;
  fourwinnersget:number = 0;
  fivewinnersget:number = 0;
  sixwinnersget:number = 0;
  weekno:number = 0;
  constructor(fields: {
    threewinnersget:number;
    fourwinnersget:number;
    fivewinnersget:number;
    sixwinnersget:number;
    weekno:number;
   } | undefined = undefined)
    {if (fields) {
      this.threewinnersget=fields.threewinnersget; 
      this.fourwinnersget=fields.fourwinnersget; 
      this.fivewinnersget=fields.fivewinnersget; 
      this.sixwinnersget=fields.sixwinnersget; 
      this.weekno=fields.weekno;
    }
  }
}
const DistributionSchema=new Map([
  [
    Distribution,
    {
      kind: "struct",
      fields: [
        ["threewinnersget","u64"],
        ["fourwinnersget","u64"],
        ["fivewinnersget","u64"],
        ["sixwinnersget","u64"],
        ["weekno","u16"],
      ],
    },
  ],
]);
class CarryOver{
    is_init:number = 0;
    carryover:number = 0;
    weekno:number = 0;
  
    constructor(fields: {
    is_init:number;
    carryover:number;
    weekno:number;
  
    } | undefined = undefined)
      {if (fields) {
        this.is_init=fields.is_init; 
        this.carryover=fields.carryover; 
        this.weekno=fields.weekno; 
  
      }
    }
}
const CarryoverSchema=new Map([
    [
      CarryOver,
      {
        kind: "struct",
        fields: [
          ["is_init","u8"],
          ["carryover","u64"],
          ["weekno","u16"],
        ],
      },
    ],
]);


//transfer lamports to rentfund first
const draw_no = 3;

  const get_archive = async()=>{

    const carry_over =PublicKey.findProgramAddressSync[Buffer.from("lastweek"),Buffer.from(draw_no.toString())],programID);
    const wining_numbers =PublicKey.findProgramAddressSync[Buffer.from("winnumbers"),Buffer.from(draw_no.toString())],programID);
    const distribution =PublicKey.findProgramAddressSync[Buffer.from("dist"),Buffer.from(draw_no.toString())],programID);
    const number_of_winners =PublicKey.findProgramAddressSync[Buffer.from("numberof"),Buffer.from(draw_no.toString())],programID);
    
    const carry_over_acc = await connection.getAccountInfo(carry_over[0]);
    const carry_over_data = deserialize(CarryoverSchema,CarryOver,carry_over_acc!.data);
    
    const wining_numbers_acc = await connection.getAccountInfo(wining_numbers[0]);
    const wining_numbers_data = deserialize(CarryoverSchema,CarryOver,wining_numbers_acc!.data);

    const distribution_acc = await connection.getAccountInfo(distribution[0]);
    const distribution_data = deserialize(CarryoverSchema,CarryOver,distribution_acc!.data);

    const number_of_winners_acc = await connection.getAccountInfo(number_of_winners[0]);
    const number_of_winners_data = deserialize(CarryoverSchema,CarryOver,number_of_winners_acc!.data);

    console.log("first lucky number = "+wining_numbers_data.number1);
    console.log("second lucky number = "+wining_numbers_data.number2);
    console.log("third lucky number = "+wining_numbers_data.number3);
    console.log("fourth lucky number = "+wining_numbers_data.number4);
    console.log("fifth lucky number = "+wining_numbers_data.number5);
    console.log("sixth lucky number = "+wining_numbers_data.number6);

    console.log("number of 3 matchers = "+number_of_winners_data.numberofthreewinners);
    console.log("number of 4 matchers = "+number_of_winners_data.numberoffourwinners);
    console.log("number of 5 matchers = "+number_of_winners_data.numberoffivewinners);
    console.log("number of 6 matchers = "+number_of_winners_data.numberofsixwinners);

    console.log("3 matchers get = "+distribution_data.threewinnersget);
    console.log("4 matchers get = "+distribution_data.fourwinnersget);
    console.log("5 matchers get = "+distribution_data.fivewinnersget);
    console.log("6 matchers get = "+distribution_data.sixwinnersget);

    console.log("carry over to next week = "+carry_over_data.lastweek +" lamports");
    
  }
  
