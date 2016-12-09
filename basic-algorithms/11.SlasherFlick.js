
// function slasher(arr, howMany) {

//   arr.splice(0,howMany);

//   return arr;
// }


//^SAME

function slasher(arr, howMany) {
  return arr.splice(howMany);
}

slasher([1, 2, 3], 2);
