const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

class UseModel {
  constructor(pathToModel) {
    this.modelPath = pathToModel;
    this.model = null;

    this.loadModel = this.loadModel.bind(this);
    this.processColor = this.processColor.bind(this);
    this.getPrediction = this.getPrediction.bind(this);
  }

  async loadModel() {
    try {
      this.model = await tf.loadModel(`file://${this.modelPath}`);
      return true;
    } catch (e) {
      throw `${e}`;
    }
  }

  processColor(colorArr) {
    const normalized = colorArr.map(val => val / 255);
    return tf.tensor2d([normalized]);
  }

  getPrediction(colorArr) {
    const xs = this.processColor(colorArr);

    const rawPred = this.model.predict(xs);
    const colorIndex = rawPred.argMax(1);
    const prediction = colorIndex.dataSync()[0];

    return prediction;
  }
}

module.exports = UseModel;
