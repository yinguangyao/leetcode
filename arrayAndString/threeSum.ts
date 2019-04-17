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
/* 
    解题思路：
        首先应该将其按照从小到大的顺序进行排列，然后遍历数组，将当前遍历项置为A。
        再用两根指针left和right从两头往中间移动，计算三者之和。
        如果之和大于0，那么说明right应该继续前进（减小），反之left应该继续前进（增加）
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums: number[]): number[][] {
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

