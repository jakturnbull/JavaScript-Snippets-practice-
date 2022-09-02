function twoSum(nums, target) {
var number=[];
  for(var i = 0; i <=nums.length-1; i++){
    for(var j = i ; j <=nums.length-1; j++){
      if ( nums[i]+nums[j+1] == target){
        number.push(i, j+1);
      }
    }

  }
  return number;
};
twoSum([2,7,11,15],9);
