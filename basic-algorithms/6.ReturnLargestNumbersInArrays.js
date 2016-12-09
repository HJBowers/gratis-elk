// First Solution

function largestOfFour(arr) {
  var biggest = [];
  for(i=0;i<arr.length;i++){
    biggest.push(arr[i][0]);
    for(j=0;j<arr[i].length;j++){
      if(biggest[i] < arr[i][j]){
        biggest[i] = arr[i][j];
      }
    }
  }
  return biggest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
