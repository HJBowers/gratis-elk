function destroyer(arr) {
  var destroyers;
  function destroy(val){
    return destroyers != val;
  }

  for(i=1;i<arguments.length;i++){
    destroyers = arguments[i];
    arr = arr.filter(destroy);
  }

  return arr;
}
