
var revWord = (word) => word.split('').reverse().join('');

var specialReverse = (temp,x) => {
    temp = temp.split(' '); 
    temp.forEach((item,index) => {
    if(item[0] === x){
        temp[index] = revWord(item);
        }
    }); 
    temp=temp.join(' ');
    return temp;
}
