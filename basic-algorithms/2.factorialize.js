
function factorialize(num) {
  var f = 1;
  for(i=1;i<=num;i++){
    f = f * i;
  }
  return f;
}

factorialize(5);
