
function truncateString(str, num) {

  if (str.length>num && num>3){
    return str = str.slice(0,num-3) + "...";
  }
  else if (str.length>num) {
    return str = str.slice(0,num) + "...";
  }
  else {
    return  str = str.slice(0,num);
  }
}


truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
