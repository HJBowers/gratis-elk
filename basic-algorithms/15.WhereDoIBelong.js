function getIndexToIns(arr, num) {
  arr = arr.sort(sortNumber);
  var place = 0;

  function sortNumber(a,b) {
    return a - b;
  }

  while(num>arr[place]){
    place++;
  }
  return place;
}
