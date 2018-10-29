const path = require('path');
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const { normalColor } = require('../data/normalized-cleaned4.json');
const model = require('./_buildModel');

(async () => {
  const colors = normalColor.map(({ colors }) => colors);
  const labels = normalColor.map(({ labels }) => labels);

  const xs = tf.tensor2d(colors);
  const ys = tf.oneHot(tf.tensor1d(labels, 'int32'), 9).cast('float32');

  const config = {
    epochs: 101,
    validationSplit: 0.1,
    shuffle: true,
    callbacks: {
      onEpochEnd: (index, log) => {
        console.log(`epoch: ${index}\n\nlog: ${JSON.stringify(log, null, 2)}\n\n\n`);
      },
    },
  };
  await model.fit(xs, ys, config);

  const saveTo = path.resolve(__dirname, '../data/model5');
  await model.save(`file://${saveTo}`);
})();
