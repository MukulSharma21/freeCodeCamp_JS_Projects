function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}

/****************************
 the code below is not returning anything, I'm not able to figure this out.
*****************************/

/*
function checkPalindrome(arr) {
  if (arr.length % 2 !== 0) {
    arr.splice(Math.floor(arr.length / 2), 1);
  }
  for (let i = 0; i <= arr.length; i++) {
    if (arr.first() !== arr.last()) {
      console.log("Not Palindrome")
      return false;
    } else {
      console.log(arr.first(), arr.last())
      arr.pop()
      arr.shift()
      if (arr.length === 0) {
        console.log("Palindrome")
        return true;
      } 
    }
  }
}
*/
palindrome("ra545cecar");