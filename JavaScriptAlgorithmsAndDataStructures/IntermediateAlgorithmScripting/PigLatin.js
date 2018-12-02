/* 
* Translate the provided string to pig latin.
* Pig Latin takes the first consonant (or consonant cluster) of an English word,
* moves it to the end of the word and suffixes an "ay".
* If a word begins with a vowel you just add "way" to the end.
* Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const letterArray = str.split('');
	const letterArrayLength = letterArray.length;
	let firstVowel;
	
	for (let i = 0; i < letterArrayLength; i++) {
		if(vowels.includes(letterArray[i])) {
			firstVowel = str.indexOf(letterArray[i]);
			break;
		} else {
			// Set to -1 if no vowels in string
			firstVowel = -1;
		}
	}
	
	if(firstVowel === -1) {
		return str += 'ay';
	} else if(firstVowel === 0) {
		// Handle letters that begin with a vowel
		str = `${str}way`;
	} else {
		// Handles letters that being with a consonant or consont cluster
		const extractionStart = -Math.abs(letterArrayLength);
		const constCluster = str.slice(extractionStart, firstVowel);
		const remainerStr = str.slice(firstVowel, letterArrayLength);
		str = `${remainerStr}${constCluster}ay`;
	}
  return str;
}

translatePigLatin("consonant");
