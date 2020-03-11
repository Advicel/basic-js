const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(num) {
  let result;
  if(typeof(num) ==typeof("qwe")){
    if(parseInt(num)){
      let x = parseFloat(num);
      let k = 0.693/HALF_LIFE_PERIOD;
      result = Math.ceil(Math.log(MODERN_ACTIVITY/x)/k);
      if(result <0||!result) return false;
      return result;
    }
    return false;
  }
  return false;
};
