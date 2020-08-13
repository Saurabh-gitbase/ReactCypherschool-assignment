
var testJackpot = (arr) => {
  let n = arr.length;
  for(let i=1;i<n;i++){
    if(arr[i]!==arr[0])
      return false;
  }
  return true;
}
