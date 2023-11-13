if (!head || !head.next) {
  return false; // No cycle if there are 0 or 1 nodes
}

let slow = head;
let fast = head;

while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;

  if (slow === fast) {
    return true; // Cycle detected
  }
}

// The provided code is a JavaScript function named hasCycle that is used to detect the presence of a cycle in a linked list. It uses Floyd's Cycle Detection Algorithm (also known as the "tortoise and hare" algorithm) to efficiently determine whether a cycle exists in the given linked list.

// Here's a summary of how the function works:

// It takes the head of the linked list as an input.

// It initializes two pointers, slow and fast, both starting at the head of the list.

// It enters a loop where slow moves one step at a time (i.e., slow = slow.next), and fast moves two steps at a time (i.e., fast = fast.next.next).

// If there is no cycle in the linked list, the fast pointer will reach the end of the list, and the function returns false.

// If there is a cycle, the fast pointer will eventually catch up to the slow pointer, and the function returns true to indicate that a cycle is detected.

// The loop continues until fast reaches the end of the list or until fast catches up to slow.

// This code is an efficient and commonly used way to determine the presence of a cycle in a linked list, especially in interview questions and coding challenges.

// Summary of LinkedList Data Structure:

// A linked list is a linear data structure consisting of nodes, each containing data and a reference (usually next) to the next node. It is used for efficient insertions and deletions in dynamic data structures.

// Summary of the Provided Solution:

// The solution includes a JavaScript implementation of a singly linked list, with a Node class representing individual elements and a LinkedList class managing the list itself. Key methods are:

// append(data): Adds a node with the given data to the end.
// prepend(data): Inserts a node with the data at the beginning.
// delete(data): Removes the first occurrence of a node with the specified data.
// find(data): Searches for a node with the specified data.
// toArray(): Converts the linked list into an array for easy display.
// This solution showcases the basic operations for creating, modifying, and interacting with a linked list in JavaScript.
