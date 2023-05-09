function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
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

const reverseList = function(head) {
    let stack = []
    while(head){
        stack.push(head.val)
        head=head.next
    }
    if(!stack.length){
        return head
    }
    head = new ListNode(stack.pop())
    let cur = head
    while(stack.length){
        cur.next = new ListNode(stack.pop(), null)
        cur = cur.next
    }
    return head
};

console.log(reverseList(createList2()))