const { colorJSON } = require('../data/database.json');
const { writeOut } = require('../modules');
const fileOut = writeOut(
  '/Users/larryschirmer/Documents/code/coding_train_ses7/data/normalized.json',
);

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

fileOut({ normalColor: normal });
