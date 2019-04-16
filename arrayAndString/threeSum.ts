/* 
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

    例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

    满足要求的三元组集合为：
    [
        [-1, 0, 1],
        [-1, -1, 2]
    ]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums: number[]): number[][] {
    if (nums.length < 3) {
        return [];
    }
    nums = nums.sort();
    let len = nums.length, 
        left = 0, 
        right = 0,
        arr = [];
    for (let i = 0; i < len; i++) {
        left = i + 1;
        right = len - 1;
        if (nums[i] > 0) {
            return arr;
        }
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                arr.push([nums[i], nums[left], nums[right]])
            } else if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            }
        }
    }
    return arr;
};

