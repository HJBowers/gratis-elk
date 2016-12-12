function sumAll(arr) {
  var sum = 0;
  for(i=Math.min.apply(0,arr);i<=Math.max.apply(0,arr);i++){
    sum += i;
  }
  return sum;
}
