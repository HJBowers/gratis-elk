function diffArray(arr1, arr2) {
  //Array.prototype.push.apply(arr1,arr2);
  arr1 = arr1.concat(arr2);
  return arr1.filter(function(val){
    return arr1.indexOf(val) === arr1.lastIndexOf(val);
  });
}
