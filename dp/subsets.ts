/* 
子集
    给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

    说明：解集不能包含重复的子集。

    示例:

        输入: nums = [1,2,3]
        输出:
        [
            [3],
            [1],
            [2],
            [1,2,3],
            [1,3],
            [2,3],
            [1,2],
            []
        ]
*/
/* 
    解题思路：
        动态规划
            求数组n的子集，可以理解为求数组n-1的子集并且算上最后一个元素n之后得到的子集。
            那么只需要递归求前一次的子集，再对其遍历后放入最后一个元素即可得到所有结果。
*/
const subsets = function(nums: number[]): number[][] {
    let len = nums.length,
        arr: number[][] = [];
    if (nums.length === 0) {
        return [[]];
    }
    const prevSubsets = subsets(nums.slice(0, len - 1));
    return prevSubsets.reduce((arr: number[][], subset: number[]) => 
        arr.concat([subset, [...subset, nums[len-1]]]), 
    [])
};