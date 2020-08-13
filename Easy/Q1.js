var charCount = (a,b) => {
	let count = 0;
	for(let i of b){
		if(i===a)
			count+=1;
	}
	return count;
}
