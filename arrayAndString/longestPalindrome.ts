/* 
    给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

    示例 1：

        输入: "babad"
        输出: "bab"
        注意: "aba" 也是一个有效答案。
    示例 2：

        输入: "cbbd"
        输出: "bb"
*/
/* 
    解题思路：
        如果一个子串是回文，那么除去两头的字符得到的子串依然是回文。
        因此，这里我们用二维数组来保存回文信息。
        如果arr[i][j]是个回文字符串，那么arr[i+1][j-1]依然是个回文字符串，这个时候只需要判断s[i] === s[j]
*/
const longestPalindrome = function (s: string) : string {
    let len = s.length,
        arr: boolean[][] = Array(len).fill(false).map(item => Array(len).fill(false)),
        maxString = ''

    if (len === 1) {
        return s;
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (i - j <= 2) {
                arr[i][j] = s[i] === s[j];
            } else {
                arr[i][j] = arr[i-1][j+1] && s[i-1] === s[j+1]
            }
            if (arr[i][j] && maxString.length < i + 1 - j) {
                maxString = s.slice(j, i + 1);
            }
        }
    }
    return maxString;
}