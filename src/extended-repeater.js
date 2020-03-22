module.exports = function repeater( str, options) {
    defaultValue={
        separator:"+",
        additionRepeatTimes:1,
        repeatTimes:1,
    }
    const additionRepeatTimes=options.additionRepeatTimes===undefined? defaultValue.additionRepeatTimes:options.additionRepeatTimes;
    const additionSeparator=options.additionSeparator===undefined||additionRepeatTimes<2?"":options.additionSeparator;
    const addition = options.addition===undefined?"":options.addition;
    const repeatTimes=options.repeatTimes===undefined?defaultValue.repeatTimes:options.repeatTimes;
    const separator = options.separator===undefined?defaultValue.separator:options.separator;

    let fullAdditional = addition;
    for(let k=1;k<additionRepeatTimes;k++){
        fullAdditional+=additionSeparator+addition;
    }
    
    let result= str+fullAdditional;
    for(let i=1;i<repeatTimes;i++) {
        result+=separator;
        result+=str+fullAdditional;
    }
    
    return result;
};