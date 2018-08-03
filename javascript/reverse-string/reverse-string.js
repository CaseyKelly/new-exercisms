const reverseString = input => {
  // Split the input into an array containing the string's characters, 
  // reverse the items in the array, and join them into the reversed string
  const reversedString = input
    .split('')
    .reverse()
    .join('');
  return reversedString;
};

module.exports = reverseString;
