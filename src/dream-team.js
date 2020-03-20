module.exports =  function createDreamTeam(arr) {
  let result ="";
  if(!Array.isArray(arr))return false;
  for(let element of arr){
    if(typeof(element)=="string"){
      result+=element.trim()[0].toUpperCase();
    }
  }
  return result.split("").sort().join("");
};