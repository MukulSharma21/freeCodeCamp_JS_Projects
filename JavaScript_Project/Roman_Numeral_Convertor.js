function convertToRoman(num) {
  const romanCode = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  };

  let roman = '';
  for (const key in romanCode) {
    while (num >= romanCode[key]) {
      roman += key;
      num -= romanCode[key];
    }
  }

  console.log(roman);
}

/*
function breakToSum(number, arr) {
  let str = number.toString();
  for (let i = 0; i < str.length; i++) {
    let n = parseInt(str[i]) * Math.pow(10, str.length - 1 - i);
    arr.push(n);
  }
}

function splitNumber(number,arr) {
  let firstNum = number.toString().split('')[0];
  for(let i = 1; i <= firstNum; i++){
    arr.push(number/firstNum);
  }
}
*/

convertToRoman(14);