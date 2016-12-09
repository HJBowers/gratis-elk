
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


//^SAME (below is pulled from online)

// function mutation(arr) {
//   return arr[1].toLowerCase().split('').every(function(letter) {
//       return arr[0].toLowerCase().indexOf(letter) !== -1; // indexOf returns the index value of "letter".
//     });
// }




mutation(["hello", "Hey"]);
