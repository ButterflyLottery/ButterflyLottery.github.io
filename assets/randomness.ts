

import keccak256 from 'keccak256';
import bs58 from 'bs58';
    


  const generate_hash = async()=>{

    // choose different numbers to see how randomness changes
    let number1 = 1; 
    let number2 = 2; 
    let number3 = 3; 
    let number4 = 4; 
    let number5 = 5; 
    let number6 = 6; 

    let numbers = number1.toString()+number2.toString()+number3.toString()+number4.toString()+number5.toString()+number6.toString();

    let randomness = "type a different text to see how randomness changes";

    let str_hash = numbers.concat(randomness);

    const hex = keccak256(str_hash).toString('hex');
    

    const key = '0123456789abcdef'
    let bytes:number[] = []
    let currentChar = 0
    let currentByte = 0
    for (let i=0; i<hex.length; i++) {   // Go over two 4-bit hex chars to convert into one 8-bit byte
      currentChar = key.indexOf(hex[i])
      if (i%2===0) { // First hex char
        currentByte = (currentChar << 4) // Get 4-bits from first hex char
      }
      if (i%2===1) { // Second hex char
        currentByte += (currentChar)     // Concat 4-bits from second hex char
        bytes.push(currentByte)       // Add byte
      }
    }

    const bytes_array = Uint8Array.from(bytes);
    let new_randomness = bs58.encode(bytes_array);
    console.log(new_randomness);
  }

  generate_hash()