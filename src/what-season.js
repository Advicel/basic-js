//module.exports = 
module.exports = function getSeason(dateT) {
  if(typeof(dateT)=="undefined") return 'Unable to determine the time of year!';
  try { dateT.getTime(); } catch(e) { throw new Error(e); }
  
    switch(dateT.getMonth()){
      case 11:
        case 0:
          case 1: return "winter";
      case 2:
        case 3:
          case 4: return "spring";
      case 5:
        case 6:
          case 7: return "summer";
      case 8:
        case 9:
          case 10: return "autumn";
  }
  return 'Unable to determine the time of year!';
};


//console.log(getSeason(new Date(2025, 0, 22, 23, 45, 11, 500)));
