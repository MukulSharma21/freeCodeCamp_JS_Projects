function telephoneCheck(str) {

  //It took me aroud 1.5 hours to create this regular expression.
  let phone = /(^1{0,1}\s{0,1})((\d{10})|(\d{3}\s{0,1}\d{3}\s{0,1}\d{4})|(\(\d{3}\)\s{0,1}\d{3}-{0,1}\d{4})|(\d{3}-\d{3}-\d{4}))/g;

  // Here I check replaced valid numbers with empty space;
  let extraCharacter = str.replace(phone,'');

  // if it has some extra character tha it will return false otherwise it return an empty string which mean the number is valid.
  return extraCharacter.length == 0;
}

telephoneCheck("555-555-5555");