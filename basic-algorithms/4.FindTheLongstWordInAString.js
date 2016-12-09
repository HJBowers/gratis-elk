function findLongestWord(str) {
  var strSplit = str.split(" ");
  var LongestWord=0;
  for(var i=0; i < strSplit.length; i++ ) {
    if(strSplit[i].length > LongestWord)
      LongestWord = strSplit[i].length;
    }
      return LongestWord;
}


// Steps
// 1. Split into array of words.
// 2. Set the longest word to the first word in the array
//     for when the length of the element in the array is more than the longest word,
//      make the longest word become that element.
// 3. After it goes through all the words to compare length, return the longest word.


findLongestWord("The quick brown fox jumped over the lazy dog");
