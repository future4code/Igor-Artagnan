
const sumOfTwo = (nums, target) => {
    let firstNum
    let resultArray = []

    for (let i = 0; i < nums.length; i++) {
        firstNum = nums[i]

        for (let j = 0; j < nums.length; j++) {
            if (firstNum + nums[j] === target) {

                resultArray.push(nums.indexOf(firstNum), nums.indexOf(nums[j]))

                return resultArray
            }
        }

    }
}

console.log(sumOfTwo([2, 7, 11, 15], 9));

