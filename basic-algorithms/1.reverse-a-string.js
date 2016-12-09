function reverseString(str) {
  var arr = [];
  var newStr = "";

  for(i=0;i<str.length;i++){
   arr.push(str[i]);
  }

  //arr = str.split("");
  //newStr = arr.reverse();
  //newStr = newStr.join("");

  for(i=0;i<arr.length;i++){
    newStr = arr[i] + newStr;
  }

  //return arr;
  //return str;
  return newStr;
}

reverseString("hello");
