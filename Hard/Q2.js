var numInStr = (arr) => {
    let result = [];
    for(let item of arr)
        for(let i of item)
            if(parseInt(i)){
                result.push(item); 
		break;
	    }
    return result;
}
