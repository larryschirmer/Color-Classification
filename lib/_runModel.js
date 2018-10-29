const path = require('path');
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const getModel = async () => {
  const modelFile = path.resolve(__dirname, '../data/model/model.json');
  return await tf.loadModel(`file://${modelFile}`);
};

const processColor = color => {
  const normalized = color.map(val => val / 255);
  return tf.tensor2d([normalized]);
};

const labelSet = {
  0: 'red-ish',
  1: 'green-ish',
  2: 'blue-ish',
  3: 'orange-ish',
  4: 'yellow-ish',
  5: 'pink-ish',
  6: 'purple-ish',
  7: 'brown-ish',
  8: 'grey-ish',
};

(async () => {
  const model = await getModel();

  const color = [80, 230, 150];
  const xs = processColor(color);

  const rawPred = model.predict(xs);
  const colorIndex = rawPred.argMax(1);
  const prediction = labelSet[colorIndex.dataSync()[0]];
  console.log(prediction);
})();
