function solution(inputString) {
    //Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g;
  var lowRegStr = inputString.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
