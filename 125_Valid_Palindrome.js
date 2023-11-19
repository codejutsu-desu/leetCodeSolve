var isPalindrome = function (s) {
  const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  return cleanString === cleanString.split("").reverse().join("");
};

// Solution Summary:
// Cleaning the String:

// Convert the string to lowercase using the toLowerCase method.
// Remove non-alphanumeric characters using the replace method with a regular expression.
// javascript
// Copy code
// const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
// Checking Palindrome:

// Compare the cleaned string with its reverse to determine if it is a palindrome.
// Use the split method to convert the cleaned string into an array of characters.
// Use the reverse method to reverse the array.
// Use the join method to convert the reversed array back into a string.
// Compare the cleaned string with its reversed version.
// javascript
// Copy code
// return cleanString === cleanString.split('').reverse().join('');
// Relevant DSA Concepts:
// String Manipulation:

// The cleaning step involves converting the string to lowercase and removing non-alphanumeric characters. String manipulation is a fundamental concept in programming and algorithmic problems.
// Array Operations:

// The use of split, reverse, and join involves manipulating arrays. Understanding array operations is crucial for solving problems that involve sequence manipulation.
// Palindrome Checking:

// The problem of checking whether a string is a palindrome is a classic algorithmic problem. Understanding how to efficiently check palindromes can involve concepts related to string manipulation and comparisons.
// Regular Expressions:

// The regular expression used in the replace method (/[^a-z0-9]/g) is a powerful tool for pattern matching and manipulation. Regular expressions are commonly used in string-related problems.
// Time and Space Complexity:

// Analyzing the time and space complexity of the solution is essential for understanding its efficiency. Concepts such as linear time complexity and constant space complexity may be relevant.
// Algorithm Design:

// The overall solution involves designing an algorithm to solve a specific problem efficiently. Thinking algorithmically and breaking down the problem into smaller steps is a crucial DSA skill.
// Data Structure:

// While the solution primarily involves string manipulation and array operations, understanding the underlying data structures (strings and arrays) is important for designing efficient algorithms.
