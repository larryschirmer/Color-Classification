const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const model = tf.sequential();

const hidden = tf.layers.dense({
  units: 16,
  activation: 'sigmoid',
  inputDim: [3],
});

const output = tf.layers.dense({
  units: 9,
  activation: 'softmax',
});

model.add(hidden);
model.add(output);

const lr = 0.2;
const optimizer = tf.train.sgd(lr);

model.compile({
  optimizer,
  loss: 'categoricalCrossentropy',
});

module.exports = model;
