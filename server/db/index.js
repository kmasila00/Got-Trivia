'use strict';
var db = require('./_db');

require('./models/user')(db);
require('./models/questions')(db);
require('./models/leaderboard')(db);

module.exports = db;
