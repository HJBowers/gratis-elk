function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){
    return a - b;
  });
  return arr.indexOf(num);
}



//ALTERNATIVE METHOD:
// function getIndexToIns(arr, num) {
//   arr = arr.sort(compareNumbers);
//   var index = 0;
//     function compareNumbers(a, b) {
//       return a - b;
//     }
//     while (num>arr[index]){
//       index++;
//     }
//   return index;
// }


getIndexToIns([5, 3, 20, 3], 5);
