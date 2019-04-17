/* 
  最长公共前缀
    编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1:

        输入: ["flower","flow","flight"]
        输出: "fl"
        示例 2:

        输入: ["dog","racecar","car"]
        输出: ""
        解释: 输入不存在公共前缀。
        说明:

        所有输入只包含小写字母 a-z 。
*/
/* 
    解题思路：
        求所有项（假设有S项）的公共前缀可以简化为求a和S-a项的公共前缀，这是一种典型的分治思想。
        我们最后简化通过遍历，求前两项的公共前缀，再求公共前缀和第三项的公共前缀，依次类推。
        求公共前缀可以用两根指针来做，判断指针当前指向的两个字符是否相等。
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs: string[]): string {
    let len = strs.length, longestTwoPrefix = strs[0] || '';
    for (let i = 1; i < len; i++) {
        longestTwoPrefix = getLongestCommonPrefix(longestTwoPrefix, strs[i])
    }
    return longestTwoPrefix;
};
const getLongestCommonPrefix = function(str1: string, str2: string): string {
    let arr = [], point1 = 0, point2 = 0;
    while(str1[point1] && str2[point2] && str1[point1] === str2[point2]) {
        arr.push(str1[point1]);
        point1++;
        point2++;
    }
    return arr.join('');
}