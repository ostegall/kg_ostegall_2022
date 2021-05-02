var input = process.argv.slice(2); // Create a string array for all numbers
var result = ""; // Result string that will be appended to 
// Use a for loop to change each number into words
for (var i = 0; i < input.length; i++) {
    var digits = input[i].split(''); // Split the array of one number up into an array with individual digits as elements
    // Map the string array of digits into a string array of words representing the digits
    var temp = digits.map(num => {
        if (num == "0") {
            return "Zero";
        } else if (num == "1") {
            return "One";
        } else if (num == "2") {
            return "Two";
        } else if (num == "3") {
            return "Three";
        } else if (num == "4") {
            return "Four";
        } else if (num == "5") {
            return "Five";
        } else if (num == "6") {
            return "Six";
        } else if (num == "7") {
            return "Seven";
        } else if (num == "8") {
            return "Eight";
        } else if (num == "9") {
            return "Nine";
        }
    })
    // Join the elements of the array back together. Don't add a comma at the end if it is the final number
    if (i != input.length - 1) {
        result += temp.join('')+",";
    } else {
        result += temp.join('');
    }
}
console.log(result);