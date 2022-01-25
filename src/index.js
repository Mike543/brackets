module.exports = function check(str, bracketsConfig) {
  const arr = [];
  for(let i = 0 ; i < bracketsConfig.length ; i++){
    arr.push(bracketsConfig[i][0]+bracketsConfig[i][1]);
  }
  for (let j = 0; j < str.length; j++) {
    if(str.includes(arr[j])) {
      str = str.replace(arr[j], "");
      j = -1;
    }
  }
  if(str.length === 0){
    return true;
  } else {
    return false;
  }
};
