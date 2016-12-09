
function mutation(arr) {
var strOne = arr[0].toLowerCase();
var strTwo = arr[1].toLowerCase();

  for (i=0; i<strTwo.length; i++) {
    if((strOne.indexOf(strTwo.charAt(i))) <0) {
      return false;
    }
  }
    return true;
}


mutation(["hello", "Hey"]);
