/* 
* Convert a string to spinal case. 
* Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
	let capitalLetters = str.match(/[A-Z]/g);
	capitalLetters.forEach(function(letter) {
		str = str.replace(letter, `-${letter}`);
	});
  str = str.trim().replace(/[^A-Za-z]+/gi, '-').toLowerCase();
	return str.replace(/^-/, '');
}

spinalCase('This Is Spinal Tap');
