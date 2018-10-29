const isAngle = tolerance => (deg1, deg2) => {
  if (deg1 === undefined || deg2 === undefined) throw 'missing argument';

  const absoluteDifference = Math.abs(deg1 - deg2);
  const relativeDifference = Math.abs(((absoluteDifference + 180) % 360) - 180);
  return tolerance >= relativeDifference;
};

module.exports = isAngle;

// const isAngle90 = isAngle(90);
// isAngle90(270, 0);
