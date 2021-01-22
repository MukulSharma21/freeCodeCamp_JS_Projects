function rot13(str) {
  let arr = str.split('');
  let char = [];

  arr.forEach(element => {
    char.push(element.charCodeAt());
  });

  return char.map( e=> {
    if( e >= 65 && e <= 90) {
      if( e <= 77) {
        return String.fromCharCode(e+13);
      } 
      if( e > 77 && e <=90) {
        return String.fromCharCode(e-13);
      }
    } else {
      return String.fromCharCode(e);
    }
  }).join('');

}

rot13("SERR PBQR PNZC");