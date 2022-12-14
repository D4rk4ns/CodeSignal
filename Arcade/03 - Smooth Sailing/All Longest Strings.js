function solution(inputArray) {
    let arr = inputArray;
    let longest = 0;
    let longestArr = [];

    // Iterate through array to find longest length string(s)
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length >= longest) {
            longest = arr[i].length;
        }
    }

    // Compare each element in arr to see if it's equal to longest
    // Push the longest words into longestArr array
    for(let j = 0; j < arr.length; j++) {
        if(arr[j].length === longest) {
            longestArr.push(arr[j]);
        }
    }

    return longestArr;
}
