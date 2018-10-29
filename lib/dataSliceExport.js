const path = require('path');
const { writeOut } = require('../modules');
const file = writeOut('data/database-slice.json');

const renderPath = path.resolve(
  __dirname,
  '../../coding_train_ses7-dataviz/src/database-slice.json',
);
const exportFile = writeOut(renderPath);

const { colorJSON } = require('../data/database.json');

const index = 300;

const slice = colorJSON.slice(index, index + 100);

file({ colorJSON: slice });
exportFile({ colorJSON: slice });
