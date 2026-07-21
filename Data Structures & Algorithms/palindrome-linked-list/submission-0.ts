/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    isPalindrome(head: ListNode | null): boolean {
        const arr = []
        let curr = head

        while(curr) {
            arr.push(curr.val)
            curr = curr.next
        }

        let start = 0
        let end = arr.length - 1

        while(start < end) {
            if(arr[start] !== arr[end]) {
                return false
            }
            start++
            end--
        }
        return true
    }
}
