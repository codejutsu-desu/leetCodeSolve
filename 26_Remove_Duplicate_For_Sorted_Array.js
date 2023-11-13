// Solution

if (nums.length === 0) {
  return 0;
}

let k = 1;

for (let i = 1; i < nums.length; i++) {
  if (nums[i] !== nums[i - 1]) {
    nums[k] = nums[i];
    k++;
  }
}

return k;

// Summary of the Solution:

// The solution removes duplicates from a sorted array in-place, keeping the relative order of elements and returning the count of unique elements. It uses a two-pointer approach with variables k and i. The code iterates through the array, comparing the current element with the previous one. If a unique element is found, it's moved to the position represented by k, and k is incremented. This ensures that unique elements are placed at the beginning of the array.

// Lessons from Data Structures and Algorithms (DSA) and Big O:

// Two-Pointer Technique: The solution employs a common DSA technique known as the two-pointer approach. It's a valuable tool for solving array-related problems efficiently, especially when maintaining relative order.

// Time Complexity: The time complexity of this solution is O(n), where n is the number of elements in the array. This is because the code only iterates through the array once. Understanding the time complexity helps in analyzing the efficiency of algorithms and making informed choices.

// Space Complexity: The solution uses constant space, O(1), as it modifies the array in-place without using additional data structures. Understanding space complexity is crucial for optimizing memory usage in algorithms.

// Importance of Sorting: The problem leverages the fact that the input array is sorted. Sorting can simplify various algorithms and make them more efficient. It's essential to recognize when sorting can be beneficial.

// Relative Order Maintenance: The solution preserves the relative order of elements, a requirement in certain algorithms. Maintaining relative order often involves a careful selection of data structures and iteration techniques.

// Learning from Real-world Applications: DSA concepts like two-pointers and Big O analysis are not just theoretical. They have real-world applications in solving practical problems, as demonstrated in this solution.

// In summary, this solution showcases how DSA principles and Big O analysis can be applied to efficiently solve a common problem by choosing the right algorithmic approach and understanding the time and space complexity implications. It highlights the importance of these concepts in software development and problem-solving.
