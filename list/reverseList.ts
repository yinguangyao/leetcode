
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
type ListNode = {
    val: any,
    next: ListNode | null
}
const reverseList = function(head: ListNode) {
    let prev = null,
          cur = head;
    while(cur && cur.next) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    cur && (cur.next = prev);
    return cur
};
