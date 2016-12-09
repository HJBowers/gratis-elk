// First Solution

// function largestOfFour(arr) {
//   var biggest = [];
//   for(i=0;i<arr.length;i++){
//     biggest.push(arr[i][0]);
//     for(j=0;j<arr[i].length;j++){
//       if(biggest[i] < arr[i][j]){
//         biggest[i] = arr[i][j];
//       }
//     }
//   }
//   return biggest;
// }


// Refined Solution

function largestOfFour(arr) {
  return arr.map(function(subArr){
    return Math.max.apply(0,subArr);
  });
}
