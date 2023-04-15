function numberChecker(arr){
    return function(num){
        return arr.includes(num);
    }
}

const nums=[1,2,3,4,5];
const checkNum=numberChecker(nums);

console.log(checkNum(3));
console.log(checkNum(6));