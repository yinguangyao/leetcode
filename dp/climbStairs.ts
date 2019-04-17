/* 
爬楼梯
    假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

    注意：给定 n 是一个正整数。

        示例 1：

            输入： 2
            输出： 2
            解释： 有两种方法可以爬到楼顶。
            1.  1 阶 + 1 阶
            2.  2 阶
        示例 2：

            输入： 3
            输出： 3
            解释： 有三种方法可以爬到楼顶。
            1.  1 阶 + 1 阶 + 1 阶
            2.  1 阶 + 2 阶
            3.  2 阶 + 1 阶
*/
/* 
    解题思路：
        如果以函数表示到第n阶的方法数，那么就是f(n)
        每次可以上1阶或者2阶，那么f(n) = f(n-1) + f(n-2)
        因此此题可以用递归来解决，但是递归超时了
        于是我就优化了递归的冗余，避免每次计算重复的值，用memo数组保存计算过的值
*/
/**
 * @param {number} n
 * @return {number}
 */
const memo: number[] = [];
const climbStairs = function(n: number): number {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (memo[n]) {
        return memo[n];
    }
    memo[n] = climbStairs(n-1) + climbStairs(n-2);
    return memo[n]
};