/*
  This function takes an array of two numbers and returns the sum of those two numbers plus the sum of all the numbers between them.
  It takes into account that the lowest number will not always come first.
*/

function sumAll(arr) {
	const reducer = (accumVal, currentVal) => accumVal + currentVal;
	let newArray = [];
	
	let sortedArray = arr.sort(function(a, b) {
		return a - b;
	});
	
	for(let i = sortedArray[0]; i <= sortedArray[1]; i++) {
		newArray.push(i);
	}
  return newArray.reduce(reducer);
}

sumAll([10, 5]);
