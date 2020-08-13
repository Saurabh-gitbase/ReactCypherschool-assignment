var replaceVowel = (oldString) => {
	let vowels = {
    	'a':'1',
    	'e':'2',
    	'i':'3',
    	'o':'4',
    	'u':'5',
	}
	let newString = '';
	for(let item of oldString)
	{ 
		if(vowels[item] === undefined)
			newString+=item; 
		else
			newString+=vowels[item];
	} 
	return newString;
}
