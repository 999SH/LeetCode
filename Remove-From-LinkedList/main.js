function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/*
* @param {ListNode} head
* @param {number} val
* @return {ListNode}
*/
const removeElements = function(head, val) {
    while (head?.val === val) {
        head = head.next || null
    }
    let cur = head;
    while (cur) {
        let temp = cur
        while(temp.next ?.val === val){
            temp = temp.next || null
        }
        cur.next = temp.next
        cur = cur.next
    }
    return head
};

function createList1(){
    let listed = new ListNode(1, null)
    const head = listed
    listed.next = new ListNode(3, null)
    listed = listed.next
    listed.next = new ListNode(3, null)
    listed = listed.next
    listed.next = new ListNode(3, null)
    listed = listed.next
    /*listed.next = new ListNode(5, null)
    listed = listed.next
    listed.next = new ListNode(7, null)
    listed = listed.next */
    return head
}
console.log(removeElements(createList1(),3))
