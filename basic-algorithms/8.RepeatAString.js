function repeatStringNumTimes(str, num) {
  var strB = "";
  for(i=0;i<num;i++){
    strB += str;
  }
  return strB;
}

repeatStringNumTimes("abc", 3);
