function titleCase(str) {
  var arrWords = str.split(" ");

  for(i=0; i<arrWords.length; i++){
    arrWords[i] = arrWords[i].charAt(0).toUpperCase() + arrWords[i].substr(1).toLowerCase();
  }

  return arrWords.join(" ");
}






//ALTERNATIVE METHOD:
// function titleCase(str) {
//   var words = str.split(" ");
//
//   for(i=0;i<words.length;i++){
//     var letters = words[i].split('');
//     letters[0] = letters[0].toUpperCase();
//     for(j=1;j<letters.length;j++){
//       letters[j] = letters[j].toLowerCase();
//     }
//     words[i] = letters.join('');
//   }
//   str = words.join(' ');
//
//   return str;
// }

titleCase("I'm a little tea pot");
