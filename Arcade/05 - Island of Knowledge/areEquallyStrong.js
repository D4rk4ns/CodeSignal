function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    
    if(yourLeft === friendsLeft && yourRight === friendsRight) {
        return true;
    } 
    if(yourLeft === friendsRight && yourRight === friendsLeft) {
        return true;
    }
    else {
        return false;
        }
}
