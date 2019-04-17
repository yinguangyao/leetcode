/* 
有效的括号
    给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

    有效字符串需满足：

        左括号必须用相同类型的右括号闭合。
        左括号必须以正确的顺序闭合。
        注意空字符串可被认为是有效字符串。

        示例 1:

        输入: "()"
        输出: true
        示例 2:

        输入: "()[]{}"
        输出: true
        示例 3:

        输入: "(]"
        输出: false
        示例 4:

        输入: "([)]"
        输出: false
        示例 5:

        输入: "{[]}"
        输出: true
*/
/* 
    解题思路：
        利用栈先进后出的特性来匹配括号
*/
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s: string): boolean {
    if (!s) {
        return true;
    }
    const map = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3
    }
    const stack = [s[0]];
    let isValid = true;
    for(let i = 1; i < s.length; i++) {
        const lastItem = stack[stack.length - 1];
        if (map[lastItem] + map[s[i]] === 0) {
            stack.pop();
            continue;
        } else {
            stack.push(s[i])
        }
    }
    if (stack.length > 0) {
        isValid = false;
    }
    return isValid;
};