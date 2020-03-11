
module.exports = function countCats(arr) {
  let counter = 0;
  arr = [].concat(...arr);
  //console.log(arr);
  for (let i =0;i<arr.length;i++){
    if(arr[i] == "^^") counter++;
  }
  return counter;
};
