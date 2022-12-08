function solution(inputArray) {
    let maxDiff = -99999999;
    for(let i = 0; i < inputArray.length-1; i++){
        if(maxDiff < Math.abs(inputArray[i] - inputArray[i+1])){
            maxDiff = Math.abs(inputArray[i] - inputArray[i+1]);
        }
    }
    
    return maxDiff;
}
