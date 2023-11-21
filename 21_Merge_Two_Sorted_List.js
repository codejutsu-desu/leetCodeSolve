class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  // Create a dummy node to simplify code
  let dummy = new ListNode();
  // Pointer to the current node in the merged list
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      // Append the node from list1 to the merged list
      current.next = list1;
      list1 = list1.next;
    } else {
      // Append the node from list2 to the merged list
      current.next = list2;
      list2 = list2.next;
    }

    // Move the current pointer to the newly added node
    current = current.next;
  }

  // If one of the lists is not empty, append the remaining nodes
  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  // The merged list starts from the next of the dummy node
  return dummy.next;
}

// Code Summary:
// ListNode Class:

// Represents a node in a singly linked list.
// Each node has a val (value) and a next reference to the next node in the list.
// mergeTwoLists Function:

// Merges two sorted linked lists (list1 and list2) into a single sorted linked list.
// Uses a dummy node and a current pointer to build the merged list iteratively.
// Merge Process:

// Iterates through both lists simultaneously.
// Compares the values of the current nodes in list1 and list2.
// Appends the smaller value to the merged list.
// Advances the current pointer to the newly added node.
// Appending Remaining Nodes:

// If one of the lists is not empty after the main loop, appends the remaining nodes to the merged list.
// Result:

// Returns the head of the merged linked list.
// Relevant DSA Concepts:
// Linked List:

// The code utilizes a linked list to represent nodes with values.
// A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.
// Merge Sort (Merge Step):

// The merging process is a fundamental step in merge sort.
// In merge sort, you recursively divide the array (or linked list) into smaller subproblems and then merge them in sorted order.
// Pointers:

// The use of pointers (dummy and current) is a common technique in linked list manipulation.
// Pointers are variables that store the memory address of another variable. They are often used for traversal in data structures.
// Time Complexity Analysis:

// The time complexity of the merging process is O(n), where n is the total number of nodes in the merged list.
// Learning Concepts:
// Linked Lists:

// Understanding the basics of linked lists and their operations.
// Merge Sort:

// Learning about the merge step in the merge sort algorithm.
// Pointers and Node Manipulation:

// Gaining proficiency in using pointers for node manipulation in linked lists.
// Time Complexity Analysis:

// Analyzing the time complexity of algorithms, especially in the context of merging sorted lists.
// This code provides a practical example of merging sorted linked lists and introduces important concepts applicable to various data structures and algorithms.
