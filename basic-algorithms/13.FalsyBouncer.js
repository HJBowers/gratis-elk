function bouncer(arr) {
  return arr.filter(function(value){
    return value;
  });
}

//ALTERNATIVE METHOD:
// function filtered(value) {
//   return value;
// }
// function bouncer(arr) {
//   return arr.filter(filtered);
// }
bouncer([1, 2, undefined]);
