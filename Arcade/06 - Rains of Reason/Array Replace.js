function solution(inputArray, elemToReplace, substitutionElem) {
    
    let final  = inputArray.map(function(elem) {
        return elem === elemToReplace ? substitutionElem : elem;
    });

    return final;
}
