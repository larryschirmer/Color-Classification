const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const model = tf.sequential();

const hidden0 = tf.layers.dense({
  units: 32,
  activation: 'sigmoid',
  inputDim: 3,
});

const hidden1 = tf.layers.dense({
  units: 16,
  activation: 'sigmoid',
});

const output = tf.layers.dense({
  units: 9,
  activation: 'softmax',
});

model.add(hidden0);
model.add(hidden1);
model.add(tf.layers.dropout({ rate: 0.2 }));
model.add(output);

const lr = 0.1;
const optimizer = tf.train.sgd(lr);

model.compile({
  optimizer,
  loss: 'categoricalCrossentropy',
});

module.exports = model;
