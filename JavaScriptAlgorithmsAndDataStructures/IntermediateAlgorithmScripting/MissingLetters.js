/*
* Find the missing letter in the passed letter range and return it.
* If all letters are present in the range, return undefined.
*/


function fearNotLetter(str) {
	/* 
	* This function converts a given string to
	* ascii and puts it into an array, loops through it to determine correct pattern.
	* Then reducer each array to determine missing number. The missing number is
	* converted back to a string. If no missing number, undefined is returned.
	*/
	const ascii = (a) => a.charCodeAt(0);
	let ints = str.split('').map(ascii);
	let correct = new Array();
	
	
	let findMissingASCII = (org, cor) => {
		const reducer =  (acc, cur) => acc + cur;
		return cor.reduce(reducer) - org.reduce(reducer);
	}
	
	for(let i = ints[0]; i <= ints[ints.length - 1]; i++) {
		correct.push(i);		
	}
	
	let missing = findMissingASCII(ints, correct);
	return missing > 0 ? String.fromCharCode(missing) : undefined;
}

fearNotLetter("abcdefghjklmno"); // return "i"
