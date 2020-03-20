module.exports = function transform(arr) {
    let result =[];
    if(!Array.isArray(arr)) throw Error;
    for (let i=0;i<arr.length;i++){
        if(arr[i]=="--discard-next") i++;
        else if(arr[i]=="--discard-prev") arr[i-1]!==undefined ? result.pop():null;
        else if(arr[i]=="--double-next")  arr[i+1]!==undefined ? result.push(arr[i+1]):null;
        else if(arr[i]=="--double-prev")  arr[i-1]!==undefined ? result.push(arr[i-1]):null;
        else result.push(arr[i]);
    }
        return result;
}
   