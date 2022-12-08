function solution(inputString) {
    let regex = /\d/g;
    return inputString.match(regex)[0];
}
