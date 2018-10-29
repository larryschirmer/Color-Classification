const path = require('path');
const { writeOut } = require('../modules');
const { colorJSON } = require('../data/database-smartcleaned4.json');
const fileOutPath = path.resolve(__dirname, '../data/normalized-cleaned5.json');
const fileOut = writeOut(fileOutPath);

const labelSet = {
  'red-ish': 0,
  'green-ish': 1,
  'blue-ish': 2,
  'orange-ish': 3,
  'yellow-ish': 4,
  'pink-ish': 5,
  'purple-ish': 6,
  'brown-ish': 7,
  'grey-ish': 8,
};

const normal = colorJSON.map(entry => {
  const colors = [entry.r / 255, entry.g / 255, entry.b / 255];
  const labels = labelSet[entry.label];

  return { colors, labels };
});

fileOut({ normalColor: normal.filter(entry => entry) });
