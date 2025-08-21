/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;

    // Move first ahead by n+1 steps
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both until first reaches end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // Remove target node
    second.next = second.next.next;

    return dummy.next;
};