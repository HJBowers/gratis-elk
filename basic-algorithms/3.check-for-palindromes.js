
function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}


// ALTERNATIVE METHOD:
// function palindrome(str) {
//   str = str.toLowerCase();
//   str = str.replace(/[^a-z0-9]/g, "");
//
//     if(str === str.split("").reverse().join("")){
//       return true;
//     }
//     else{
//       return false;
//     }
// }



// ALTERNATIVE METHOD:
// function palindrome(str) {
//   str = str.toLowerCase();
//   str = str.replace(/[^a-z0-9]/g, "");
//   arrChars = str.split("");
//   arrReverse = arrChars.concat();
//   arrReverse.reverse();
//   var strR = arrReverse.join();
//   var strO = arrChars.join();
//   if (strR == strO){
//     return true;
//   }
//   else{
//     return false;
//  }
// }


palindrome("eye");
