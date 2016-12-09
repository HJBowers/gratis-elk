// function filtered(value) {
//   return value;
// }


// function bouncer(arr) {
//   return arr.filter(filtered);
// }



function bouncer(arr) {
  return arr.filter(function(value){
    return value;
  });
}


bouncer([1, 2, undefined]);
