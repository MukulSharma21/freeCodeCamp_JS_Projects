function convertToRoman(num) {
  let numberArray = [];
  let roman = [];
  let romanNumber = [];
  const romanCode = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };

  breakToSum(num, numberArray);
  numberArray.forEach( n => {
    splitNumber(n,roman);
  })

  roman.forEach( n => {
    romanNumber.push(romanCode[n]);
  });
  console.log(romanNumber.join(''));
}

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


convertToRoman(3660);