
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

 /**
  * @param {ListNode[]} lists
  * @return {ListNode}
  */

 const mergeKLists = function (lists) {
     let merged = new ListNode()
     let head = merged
     let min = null
     let mindex = null
     let nullcount = 0
     while(true) {
         nullcount = 0 //Reset number of lists that are null
         for (let i = 0; i < lists.length; i++) {
             if (lists[i] !== null) {
                 if (min === null){
                     min = lists[i].val
                     mindex = i
                 }
                 if (lists[i].val < min) { //Set the mindex and the minimum value for traversal later
                     min = lists[i].val
                     mindex = i
                 }
             }
             else{
                 nullcount++ //If list[0] is null the list is done
             }
         }
         if(nullcount >= lists.length){ //Check if nullcount is done
             break;
         }
         console.log(lists[mindex])
         if (lists[mindex] !== null) { //Error checking
             merged.next = new ListNode(min, null)
             merged = merged.next
             min = null
             lists[mindex] = lists[mindex].next  //Increment mindex
         }
         else {
             console.log("Something went wrong with the index")
         }
     }
     console.log("Merged: ", head.next)
     return head.next
 };

 console.log(mergeKLists([createList1(), createList2(), createList3(),createList4()]))

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

 function createList3(){
     let listed = new ListNode(9, null)
     const head = listed
     listed.next = new ListNode(10, null)
     listed = listed.next
     listed.next = new ListNode(11, null)
     listed = listed.next
     listed.next = new ListNode(14, null)
     listed = listed.next
     return head
 }

 function createList4(){
     let listed = new ListNode(12, null)
     const head = listed
     listed.next = new ListNode(13, null)
     listed = listed.next
     return head
 }