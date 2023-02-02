import {
    Connection,
    PublicKey,
  } from "@solana/web3.js";

  import {deserialize} from 'borsh';

  const connection= new Connection("your private node api");

  const programID =  new PublicKey("6UA8U5SHkuUWGeqc9mnFeby6TTCACvTSACwQo4fuhDH");
  const lottery = new PublicKey("AXLkCCNKxB6Cvc44HnmLfAh6tMQVz9wnw9tDdoPQErtT");
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
          ["highestnumberofthreewinners","u64"],
          ["highestnumberoffourwinners","u64"],
          ["highestnumberoffivewinners","u64"],
          ["highestnumberofsixwinners","u16"],
          ["number_of_highestseries","u8"],
          ["initialdata","u8"],
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
  class MainRegister{
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
  const MainRegisterSchema=new Map([
    [
      MainRegister,
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
  class Lottery{
    is_init:number = 0;
    call:number = 0;
    randomness:string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    r43:number = 0;
    scall:number = 0;
  
    constructor(fields: {
      is_init:number,
      call:number,
      randomness:string
      r43:number,
      scall:number,
  
     } | undefined = undefined)
      {if (fields) {
        this.is_init = fields.is_init; 
        this.call = fields.call; 
        this.randomness = fields.randomness; 
        this.r43 = fields.r43; 
        this.scall = fields.scall; 
      }
    }
  }
  const LottoSchema=new Map([
    [
      Lottery,
      {
        kind: "struct",
        fields: [
          ["is_init","u8"],
          ["call","u16"],
          ["randomness","String"],
          ["r43","u8"],
          ["scall","u16"],
  
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

  const get_randomness_of_a_mainregister_and_a_subregister = async() => {

    const record_acc = await connection.getAccountInfo(record);
    const rec_data = deserialize(RecordSchema,Record,record_acc!.data);
    const setofRegisters = rec_data.mcofweek;


    
    //console messages that gives number of mainregisters and subreister
    console.log("Number of main registers"+rec_data.midcnumber);
    console.log("Number of subregisters"+rec_data.subcnumber);
    //Enter a number to get randomness of a mainregister and its subregister
    //Number should be between 1 and number of registers.
    const mainregister_no = 1;
    const subregister_no = 1;
  
    const subregister =PublicKey.findProgramAddressSync([
        Buffer.from("sreg"),Buffer.from([setofRegisters]),
        Buffer.from("m"),Buffer.from([mainregister_no]),
        Buffer.from("md"),Buffer.from([subregister_no]),
        ],programID);
  
    const subregister_account = await connection.getAccountInfo(subregister[0]);
    const subregister_data = deserialize(SubRegisterSchema,SubRegister,subregister_account!.data);
  
    const mainregister =PublicKey.findProgramAddressSync([//
        Buffer.from("midc"),Buffer.from([setofRegisters]),
        Buffer.from("m"),Buffer.from([mainregister_no]),
        Buffer.from("n")],programID);

    const mainregister_account = await connection.getAccountInfo(subregister[0]);
    const mainregister_data = deserialize(SubRegisterSchema,SubRegister,mainregister_account!.data);


  }

  const get_final_randomness_and_lucky_numbers = async() => {

    const final_randomness_account = await connection.getAccountInfo(lottery);
    const final_randomness = deserialize(LottoSchema,Lottery,final_randomness_account!.data);

    console.log(final_randomness.randomness);

    let lotto_array = Buffer.from(final_randomness);

    let x1 = 0;
    let x2 = 0;
    let x3 = 0;
    let x4 = 0;
    let x5 = 0;
    let x6 = 0;

    let index = 0;

    for (let i = 0; i < lotto_array.length; i++){
      if(lotto_array[index] > 64){
        x1 = lotto_array[index];
        break
      }
      index = i;
    }

    for (let i = index; i < lotto_array.length; i++){
      if(lotto_array[index] > 64 
        && x1 != lotto_array[index]){
        x2 = lotto_array[index];
        break
      }
      index = i;
    }

    for (let i = index; i < lotto_array.length; i++){
      if(lotto_array[index] > 64 
        && x1 != lotto_array[index]
        && x2 != lotto_array[index]){
        x3 = lotto_array[index];
        break
      }
      index = i;
    }
    for (let i = index; i < lotto_array.length; i++){
      if(lotto_array[index] > 64 
        && x1 != lotto_array[index]
        && x2 != lotto_array[index]
        && x3 != lotto_array[index]){
        x4 = lotto_array[index];
        break
      }
      index = i;
    }

    for (let i = index; i < lotto_array.length; i++){
      if(lotto_array[index] > 64 
        && x1 != lotto_array[index]
        && x2 != lotto_array[index]
        && x3 != lotto_array[index]
        && x4 != lotto_array[index]){
        x5 = lotto_array[index];
        break
      }
      index = i;
    }

    for (let i = index; i < lotto_array.length; i++){
      if(lotto_array[index] > 64 
        && x1 != lotto_array[index]
        && x2 != lotto_array[index]
        && x3 != lotto_array[index]
        && x4 != lotto_array[index]
        && x5 != lotto_array[index]){
        x6 = lotto_array[index];
        break
      }
      index = i;
    }

    

      let number_pool = [1,2,3,4,5,6,7,8,0,9,10,11,12,13,0,14,15,16,17,18,19,20,21,22,23,24,0,
      0,0,0,0,0,25,26,27,28,29,30,31,32,33,34,35,0,36,37,38,39,40,41,42,43,44,45,46,47,48,49];
  
      let index1 = x1 - 65;
      let index2 = x2 - 65;
      let index3 = x3 - 65;
      let index4 = x4 - 65;
      let index5 = x5 - 65;
      let index6 = x6 - 65;

      let number1 = number_pool[index1];
      let number2 = number_pool[index2];
      let number3 = number_pool[index3];
      let number4 = number_pool[index4];
      let number5 = number_pool[index5];
      let number6 = number_pool[index6];

      console.log(number1, number2, number3, number4, number5, number6);
  

  }

  //gets randomness of all subregisters including first set and second set
  const get_randomness_of_all_subregister = async() => {

    const accounts = await connection.getProgramAccounts(
        programID,
        {
          filters: [
            {
              dataSize: 80, // number of bytes
            },
          ],
        }
      );

    accounts.forEach(account => {
        
        const subregister_data = deserialize(SubRegisterSchema,SubRegister,account.account.data);
        console.log("subregister of set:"+subregister_data.belongtomcno);
        console.log("subregister of mainregister no: "+subregister_data.belongtomidno);
        console.log("subregister no"+subregister_data.counterno);
        console.log("randomness"+subregister_data.randomness);
    });
  
  }

  //gets randomness of all mainregisters including first set and second set
  const get_randomness_of_all_mainregister = async() => {

    const accounts = await connection.getProgramAccounts(
        programID,
        {
          filters: [
            {
              dataSize: 88, // number of bytes
            },
          ],
        }
      );

    accounts.forEach(account => {
        
        const mainegister_data = deserialize(MainRegisterSchema,MainRegister,account.account.data);
        console.log("mainregister of set:"+mainegister_data.belongtomcno);
        console.log("mainregister no:"+mainegister_data.counterno);
        console.log(mainegister_data.randomness);
    });
  
  }
  
