const path = require('path');
const { writeOut, isAngle, UseModel } = require('../modules');

const { colorJSON } = require('../data/database-smartcleaned4.json');

const fileOutPath = path.resolve(__dirname, '../data/database-smartcleaned5.json');
const fileOut = writeOut(fileOutPath);

const removedEntriesPath = path.resolve(__dirname, '../data/database-smartcleaned-removed5.json');
const removedEntries = writeOut(removedEntriesPath);

const modelFile = path.resolve(__dirname, '../data/model5/model.json');
const colorModel = new UseModel(modelFile);
const isAngle40 = isAngle(40);

const labelToInt = {
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

const intToHue = {
  0: 0,
  3: 30,
  7: 30,
  4: 60,
  1: 120,
  2: 240,
  6: 300,
  5: 350,
};

const removeIndex = (index, arr) => {
  arr.splice(index, 1);
};

const removedColors = [];

const removeEntry = (index, prediction) => {
  removedColors.push({ colorJSON: colorJSON[index], prediction });
  removeIndex(index, colorJSON);
};

(async () => {
  await colorModel.loadModel();

  for (let i = 0; i < colorJSON.length; i++) {
    let prediction;

    try {
      const { r, g, b, label } = colorJSON[i];
      const colorArr = [r, g, b];
      const labelInt = labelToInt[label];

      prediction = colorModel.getPrediction(colorArr);

      const labelIsAcceptable = isAngle40(intToHue[labelInt], intToHue[prediction]);
      if (!labelIsAcceptable) removeEntry(i, prediction);
    } catch (e) {}
  }

  fileOut({ colorJSON });
  removedEntries({ removedColors });
})();
