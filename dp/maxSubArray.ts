/* 
最大子序和
    给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

    示例:

        输入: [-2,1,-3,4,-1,2,1,-5,4],
        输出: 6
        解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
    进阶:

        如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
*/
/* 
    解题思路：
        1. 暴力破解
            通过多重遍历，算出最大和
        2. 动态规划
            考虑到最大和的这个子数组一定在数组里面，那么假设这个子数组是以第i个元素为最后一个元素，第i个元素一定是大于0的
            那么就可以得出f(i) = max(f(i-1)+arr[i], arr[i])，这个时候计算出上面所有情况的f(i)，并取最大值即可
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArraySimple = function(nums: number[]): number {
    let len = nums.length,
        max = -Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < len; i++) {
        let sum = 0;
        for (let j = i; j < len; j++) {
            sum += nums[j];
            if (sum > max) {
                max = sum
            }
        }
    }
    return max;
};

const maxSubArray = function(nums: number[]): number {
    let len = nums.length, arr = [];
    arr[0] = nums[0];
    for (let i = 1; i < len; i++) {
        arr[i] = Math.max(arr[i-1] + nums[i], nums[i]);
    }
    return Math.max.apply(arr)
};