function solution(arr) {
    const res = [];
   arr.forEach(num => {
      const sum = arr.reduce((accum, next) => {
         return accum + Math.abs(next - num);
      }, 0);
      res.push(sum);
   });
   const lowest = Math.min(...res);
   return arr[res.indexOf(lowest)];

}
