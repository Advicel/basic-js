module.exports = function calculateHanoi( disksNumber, turnsSpeed) {
    const turns = 2**disksNumber -1;
    const second = turns / (turnsSpeed/3600)
    return {turns:turns , seconds:second};
}