function solution(inputString) {
let str = inputString.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        str[i] == 'z' ? charcode = 'a'.charCodeAt() : charcode = (str[i].charCodeAt()) + 1;
        result += String.fromCharCode(charcode);
        
    }
    return result;

}