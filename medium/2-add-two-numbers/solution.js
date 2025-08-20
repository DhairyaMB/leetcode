/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
     // Create a dummy head to simplify handling of the result list
     let dummy = new ListNode(0);
     let current = dummy;
     let carry = 0;

     // Traverse both lists until both are exhausted
     while (l1 !== null || l2 !== null || carry > 0) {
          let sum = carry;

          if (l1 !== null) {
               sum += l1.val;
               l1 = l1.next;
          }

          if (l2 !== null) {
               sum += l2.val;
               l2 = l2.next;
          }

          // Update carry for next iteration
          carry = Math.floor(sum / 10);

          // Carry a new mode with the digit value
          current.next = new ListNode(sum % 10);
          current = current.next;
     }

     // Return the next of dummy (head of actual result)
     return dummy.next;
}