function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/*
* @param {ListNode} head
* @return {boolean}
*/


const isPalindrome = function(head) {
    let cur = head
    let stack = []
    while(cur){
        stack.push(cur.val)
        cur = cur.next
    }
    return stack.every((val, i) => val === stack[stack.length - 1 - i]);
};

function createList1(){
    let listed = new ListNode(1, null)
    let head = listed
    listed.next = new ListNode(3, null)
    listed = listed.next
    listed.next = new ListNode(3, null)
    listed = listed.next
    listed.next = new ListNode(1, null)
    listed = listed.next
    /*listed.next = new ListNode(5, null)
    listed = listed.next
    listed.next = new ListNode(7, null)
    listed = listed.next */
    return head
}

function createList2(){
    let listed = new ListNode(1, null)
    let head = listed
    listed.next = new ListNode(3, null)
    listed = listed.next
    listed.next = new ListNode(3, null)
    listed = listed.next
    listed.next = new ListNode(1, null)
    listed = listed.next
    listed.next = new ListNode(5, null)
    listed = listed.next
    listed.next = new ListNode(7, null)
    listed = listed.next
    return head
}

console.log(isPalindrome(createList1()))