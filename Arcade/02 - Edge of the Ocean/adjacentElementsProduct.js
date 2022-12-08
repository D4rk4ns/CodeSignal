function solution(inputArray) {
    let biggest = -9999999999999999;
    for(let i = 0; i < inputArray.length-1; i++){
        if(inputArray[i]*inputArray[i+1] > biggest){
            biggest = inputArray[i]*inputArray[i+1];
        }
    }
    return biggest;
}
