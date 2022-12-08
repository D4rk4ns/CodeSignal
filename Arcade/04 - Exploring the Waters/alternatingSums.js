function solution(a) {
   let tA=0, tB=0;
   for(let i = 0; i < a.length/2; i++){
       tA += a[i*2];
       if(i*2+1 < a.length) tB += a[i*2+1];
   }    
   return [tA,tB];
}
