var input = process.argv.slice(2);
var result = ""
for (var i = 0; i < input.length; i++) {
    var split_numbers = input[i].split('')
        var temp = split_numbers.map(num => {
            if (num == 0) {
                return "Zero"
            } else if (num == 1) {
                return "One"
            } else if (num == 2) {
                return "Two"
            } else if (num == 3) {
                return "Three"
            } else if (num == 4) {
                return "Four"
            } else if (num == 5) {
                return "Five"
            } else if (num == 6) {
                return "Six"
            } else if (num == 7) {
                return "Seven"
            } else if (num == 8) {
                return "Eight"
            } else if (num == 9) {
                return "Nine"
            }
        })
    if (i != input.length - 1) {
        result += temp.join('')+",";
    } else {
        result += temp.join('')
    }
}
console.log(result)