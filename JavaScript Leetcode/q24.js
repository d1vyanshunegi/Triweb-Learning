// 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list. 

var reverseList = function(head) {
    if (head == null || head.next == null) 
        return head;
    
    var res = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return res;
};