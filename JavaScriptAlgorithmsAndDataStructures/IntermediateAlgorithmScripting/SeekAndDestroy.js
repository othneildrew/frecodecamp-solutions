/*
  You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
  Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
	// Create new arry with values to destory
	let destroyValues = [];
	let newArray = [];
	for (let i = 1; i < arguments.length; i++) {
		destroyValues.push(arguments[i]);
	}
	
	// Destory values that exist in array
	arr.forEach(function(value) {
		if(!destroyValues.includes(value)) {
			newArray.push(value);
		};
	});
  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
