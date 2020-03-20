module.exports =function countCats(arr){
  return [].concat(...arr).filter(item=>item ==="^^").length;
}