const path = require('path');
const { writeOut } = require('../modules');
const file = writeOut('data/database-cleaned.json');

let { colorJSON: whole } = require('../data/database.json');
const { colorJSON: slice } = require('../data/database-slice.json');

const index = 300;

whole.splice(index, 100, ...slice);

file({ colorJSON: whole });
