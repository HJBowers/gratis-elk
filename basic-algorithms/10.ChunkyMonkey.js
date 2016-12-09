function chunkArrayInGroups(arr, size) {
var papaArray = [];
  for (i=0; i<arr.length; i += size) {
    papaArray.push(arr.slice(i,i+size));
  }
  return papaArray;
}




//ALTERNATIVE METHOD:
// function chunkArrayInGroups(arr, size) {
// var papaArray = [];

//   while (arr.length >0){
//   var  babyArray = [];
//     for (i=0; i<size; i++){
//       if (arr == 0) {
//         break;
//       }
//         babyArray.push(arr[0]);
//         arr.splice(0,1);
//     }
//     papaArray.push(babyArray);
//   }
//   return papaArray;
// }



chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
