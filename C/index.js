// write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. the string should start with a 1. a string with size 6 should return :'101010'. with size 4 should return : '1010'. with size 12 should return : '101010101010'. The size will always be positive and will only use whole numbers.

var string = '';
var size = number => {
	for (var i = 1; i <= number; i++) {
		if (i % 2 === 0) {
			string = string + '0';
		} else {
			string = string + '1';
		}
	}
	return string;
};

// Given a non-negative integer, return an array containing a list of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]

var rev = int => {
	return int
		.toString()
		.split('')
		.reverse();
};

//Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers?
// 0 + 1 = 1 1 + 1 = 2 1 + 2 = 3 2 + 3 = 5 3 + 5 = 8 …
// Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps

var fib = num => {
	var array = new Array(num);
	array[0] = 1;
	array[1] = 1;
	for (var i = 2; i < array.length; i++) {
		array[i] = array[i - 1] + array[i - 2];
	}
	console.log(array[num - 1]);
};

// recursive

function fibonacci(n) {
	if (n < 2) {
		return 1;
	} else {
		return fibonacci(n - 2) + fibonacci(n - 1);
	}
}

// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

var rightCoupon = 'Coupon123';
var entry = 'June 15, 2014';
var months = [
	['January', '01'],
	['Febuary', '02'],
	['March', '03'],
	['April', '04'],
	['May', '05'],
	['June', '06'],
	['July', '07'],
	['August', '08'],
	['September', '09'],
	['Octobor', '10'],
	['November', '11'],
	['December', '12']
];
var mon = entry.substring(0, entry.indexOf(' '));

var current = new Date();
console.log(current.toLocaleDateString());

var convertEntry = () => {
	entry = x + entry.substring(entry.indexOf(' '), entry.length);
	console.log(entry);
};

// var date =(entry) =>{
// 	var mon = entry.substring( 0, entry.indexOf(' '))
// 	for (var i = 0; i<month.length; i++){
// 		if(mon === month.i)
// 	}

// }

// var checkCoupon = (string, date) =>{
//     if (string ===rightCoupon){
// 		if(date === "June 15, 2014"){
// 			return true
// 		} else{
// 			return false
// 		}
// 	} else{
// 		return false
// 	}
// }

// Write a function to test whether a given input is a valid email address. For the purposes of this assessment, here is what makes a valid email:
// - At least one letter character at the beginning All characters
// - between the first character and the @ (if any) must be letters, numbers, or underscores
// - There must be an @ character (after the points listed just now)
// - After the @ character, there must be at least one word character (letter, number, or underscore or hyphen)
// The email must end with at least one set of a dot followed by one or more word characters.
// - The input must NOT be case-sensitive
// - The function should return true or false.

var email = string => {
	var letter = /^[A-Za-z]+$/;
	var all = /^[A-Za-z0-9_-]+$/;
	var before = string.substring(0, string.indexOf('@'));
	var after = string.substring(string.indexOf('@'), string.length);
	var end = after.substring(after.indexOf('.') + 1, after.length);
	// console.log(letter)
	if (string.includes('@')) {
		if (
			string.charAt(0).match(letter) &&
			before.match(all) &&
			after.includes(all && '.')
		) {
			if (after[1] !== '.' && after[after.length - 1] !== '.') {
				if (end.match(letter)) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
	} else {
		return false;
	}
};
