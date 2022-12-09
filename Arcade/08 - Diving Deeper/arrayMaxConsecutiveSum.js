function solution(inputArray, k) {
    //Step 1: set maxSum = 0
    let maxSum = 0;

    //Step 2: Loop through array while i is less than arr.length - k + 1
    for (let i = 0; i < inputArray.length - k + 1; i++) {
        //Step 3: set tempSum = 0
        let tempSum = 0;

        //Step 4: Loop through consecutive elements starting at arri
        for (let j = i; j < i + k; j++) {
            //Step 5: tempSum += inputArray[j]
            tempSum += inputArray[j];
        }

        //Step 6: check if tempSum is greater than maxSum
        if (tempSum > maxSum)
                maxSum = tempSum; //Step 7: set maxSum = tempSum
    }
    
    return maxSum;
}
