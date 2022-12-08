function solution(n) {
    let nums = String(n).split('').map(num => {return parseInt(num)});
    
    for(let i =0; i < nums.length; i++){
        if(nums[i] % 2 !== 0) {
            return false;
        }
    };
    
    return true;
    
}
