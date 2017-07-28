var requireDir = require('require-dir');

// pull in all the tasks
requireDir('./gulp/tasks', {recurse: true});
