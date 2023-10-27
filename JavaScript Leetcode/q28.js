// 1365. How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function(nums) {
    const dupArr = nums.slice();
    const result = [];
    for(let i=0; i<dupArr.length; i++){
        let count = 0;
        for(let j=0; j<dupArr.length; j++){
            if(dupArr[j] < dupArr[i]){
                count++;
            }
        }
        result.push(count);
    }
    
    return result;
};