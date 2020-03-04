const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let charArray = [];
    let str = expr.slice();
    let symbolsArray = [];
    let resultArray = [];

    for (let i = expr.length; i !== 0; i-=10){
        charArray.push(str.slice(i-10, i));
    }

    symbolsArray = charArray.map((item) => {
      return item.replace(/00/g,"").replace(/10/g,".").replace(/11/g,"-");
    });

    symbolsArray.forEach((item)=>{
        resultArray.push((item === '**********') ? ' ' : MORSE_TABLE[item]);
    });

    return resultArray.reverse().join('');

}

module.exports = {
    decode
}

