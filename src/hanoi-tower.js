module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const speedInSeconds=turnsSpeed/3600;

  return {
    turns: Math.pow(2,disksNumber)-1,
    seconds:(Math.pow(2,disksNumber)-1)/speedInSeconds  
  };
  
}