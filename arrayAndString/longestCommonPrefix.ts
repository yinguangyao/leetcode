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