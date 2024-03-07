/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // Create a Map to count the occurrences of each character in magazine
  const magazineCounts = new Map();
  for (const char of magazine) {
    magazineCounts.set(char, (magazineCounts.get(char) || 0) + 1);
  }

  // Check if ransomNote can be constructed
  for (const char of ransomNote) {
    if (!magazineCounts.has(char) || magazineCounts.get(char) === 0) {
      return false;
    }
    magazineCounts.set(char, magazineCounts.get(char) - 1);
  }

  return true;
};

/*Function Signature:

var canConstruct = function(ransomNote, magazine): This declares a function named canConstruct that takes two parameters, ransomNote and magazine.
Magazine Counts Map:

const magazineCounts = new Map();: This creates a Map (magazineCounts) to store the counts of each character in the magazine.

The for...of loop iterates through each character in the magazine, and magazineCounts is updated to keep track of the occurrences of each character.

Check if Ransom Note can be Constructed:

Another for...of loop iterates through each character in the ransomNote.

Inside the loop, it checks whether the character is present in magazineCounts and if its count is greater than zero. If not, it returns false, indicating that the ransomNote cannot be constructed.

If the character is present, its count in magazineCounts is decremented to indicate its usage.

Return Result:

If the function has not returned false during the loop, it means that each character in ransomNote has been successfully matched with characters in magazine, and the function returns true.
Example Usage:

Finally, an example is provided where ransomNote is "aabb" and magazine is "aaabbb". The function is called with these values, and the result is logged to the console.
In summary, the function uses a Map to count the occurrences of characters in the magazine and then checks if the ransomNote can be constructed based on these counts. If it can be constructed, the function returns true; otherwise, it returns false. */
