function rot13(str) {
  var words = str.split(' ');
  var newWord = [];

  for(i=0;i<words.length;i++){
     var letters = words[i].split('');
     var newLetter = [];
     for(j=0;j<letters.length;j++){
       var code = letters[j].charCodeAt();
       if(code <= 90 && code >= 65){
         if(code < 65+13){
           code += 26;
         }
         code -= 13;
       }
       newLetter[j] = String.fromCharCode(code);
     }
     newWord[i] = newLetter.join('');
   }
  var newStr = newWord.join(' ');
  return newStr;
}
