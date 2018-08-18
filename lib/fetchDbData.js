const firebase = require('firebase');
const config = require('../config');
const { writeOut } = require('../modules');
const file = writeOut('data/database.json');

// file(dataString);

firebase.initializeApp(config);

const ref = firebase.database().ref('colors');
ref.once('value', res => {
  const colorData = res.val();
  let colorJSON = [];

  for (let key in colorData) {
    const { r, g, b, label, uid } = colorData[key];
    colorJSON = [...colorJSON, { r, g, b, label, uid }];
  }

  file({ colorJSON });
});
