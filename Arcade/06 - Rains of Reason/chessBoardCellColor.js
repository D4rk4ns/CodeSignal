function solution(cell1, cell2) {
   
    // Simple to read answer //           
    let sum_1 = cell1.charCodeAt(0) - 64+ parseInt(cell1.charAt(1));
    let sum_2 = cell2.charCodeAt(0) - 64+ parseInt(cell2.charAt(1));
    
    return (sum_1 % 2 === 0 && sum_2 % 2 === 0) || (sum_1 % 2 === 1 && sum_2 % 2 === 1)

}

/* // Efficient but hard to read answer //
    return  cell1.split('')
                .reduce((a,b)=> Math.abs(a.charCodeAt(0) - 'A'.charCodeAt(0) + 1 - b) %2)  
    ===
            cell2.split('')
                .reduce((a,b)=> Math.abs(a.charCodeAt(0) - 'A'.charCodeAt(0) + 1 - b) %2)*/