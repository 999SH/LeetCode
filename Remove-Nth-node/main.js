
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    let cur = head
    let traversed = 0
    let prev = cur;
    n = findLen(head)-n
    if (n === 0){
        return head.next
    }
    while(cur){
        if(traversed === n-1){
            if(cur.next){
                if(cur.next.next){
                    cur.next = cur.next.next
                }
                else{
                    cur.next = null
                }
                break
            }
        }
        cur = cur.next
        traversed++
    }
    return head
};

 const findLen = function(head) {
     let cur = head
     let len = 0
     let prev;
     while(cur){
         cur = cur.next
         len++
     }
     return len
 }

 function createList1(){
     let listed = new ListNode(1, null)
     const head = listed
     listed.next = new ListNode(3, null)
     listed = listed.next
     listed.next = new ListNode(5, null)
     listed = listed.next
     listed.next = new ListNode(7, null)
     listed = listed.next
     return head
 }

 console.log(removeNthFromEnd(createList1(),4))