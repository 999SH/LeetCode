
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

 /**
  * @param {ListNode} list1
  * @param {ListNode} list2
  * @return {ListNode}
  */
 const mergeTwoLists = function (list1, list2) {
     let list1node = list1;
     let list2node = list2;
     let mergedlistnode = new ListNode()
     let head = mergedlistnode
     while (list1node !== null || list2node !== null) {
         if (list1node !== null && list2node !== null) {
             if (list1node.val <= list2node.val) {  //If L1 val is smallest then we add it to the list
                 mergedlistnode.next = list1node
                 list1node = list1node.next
             } else { //Else we add L2 val
                 mergedlistnode.next = list2node
                 list2node = list2node.next
             }
         } else if (list1node !== null) {
             mergedlistnode.next = list1node
             list1node = list1node.next
         } else if (list2node !== null) {  //Should never be null, but it complains
             mergedlistnode.next = list2node
             list2node = list2node.next
         }
         mergedlistnode = mergedlistnode.next
     }
     return head.next
 };

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

 function createList2(){
     let listed = new ListNode(2, null)
     const head = listed
     listed.next = new ListNode(4, null)
     listed = listed.next
     listed.next = new ListNode(6, null)
     listed = listed.next
     listed.next = new ListNode(8, null)
     listed = listed.next
     return head
 }

 function main(){
     let merged = mergeTwoLists(createList1(),createList2())
     while (merged !== null){
         console.log(merged.val)
         merged = merged.next
     }
 }
 main();