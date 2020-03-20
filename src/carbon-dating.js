const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(num) {
  if(typeof(num) =='string'&& parseInt(num)){
      const x = parseFloat(num);
      const k = 0.693/HALF_LIFE_PERIOD;
      const result = Math.ceil(Math.log(MODERN_ACTIVITY/x)/k);
      if(result <0||!result) return false;
        return result;
  }
  return false;
};
