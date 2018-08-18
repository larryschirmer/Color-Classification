const { colorJSON: dbData } = require('../data/database.json');

const users = {};
const colors = {};
let usersSorted = [];
let colorsSorted = [];

// --- users

dbData.forEach(({ uid }) => {
  users[uid] && (users[uid] += 1);
  !users[uid] && (users[uid] = 1);
});

for (let user in users) {
  const count = users[user];
  usersSorted = [...usersSorted, { user, count }];
}
usersSorted.length; // 1783
usersSorted.sort((a, b) => b.count - a.count);

// --- colors

dbData.forEach(({ label }) => {
  colors[label] && (colors[label] += 1);
  !colors[label] && (colors[label] = 1);
});

for (let color in colors) {
  const count = colors[color];
  colorsSorted = [...colorsSorted, { color, count }];
}

colorsSorted.length; // 9
colorsSorted.sort((a, b) => b.count - a.count);
