function solution(picture) {
    let arr = [];
    let tempArr = [];
    let tempString = "";
    
    for(let i =0; i < picture[0].length+2; i++){
        tempString += "*"; 
    }
    
    arr.push(tempString);
    
    for(let j = 0; j < picture.length; j++){
        
        arr.push("*"+picture[j]+"*");
    }
    
    arr.push(tempString);
    
    return arr;
}
