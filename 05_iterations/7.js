let nums=[1,2,3,4,5];
//console.log(nums.map((num)=>num+10))

let n=nums
      .map((nums)=>nums*10)
      .map((nums)=> nums+1)
      .filter((num)=>num>=21)

      console.log(n);