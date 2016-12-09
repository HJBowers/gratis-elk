function reverseString(str) {
  var arr = [];
  var newStr = "";

  for(i=0;i<str.length;i++){
    arr.push(str[i]);
  }
  for(i=0;i<arr.length;i++){
    newStr = arr[i] + newStr;
  }
  return newStr;
}


// ALTERNATIVE METHOD:
// function reverseString(str) {
//    return str.split("").reverse().join("");
// }


reverseString("hello");
