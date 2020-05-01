'use strict';

var _ = require('lodash'),
    childProcess = require('child_process'),
    execSync = childProcess.execSync,
    semver = require('semver'),
    spawn = childProcess.spawn;

var branch = 'npm-packages';

var reLine = /^.*$/gm;

var output = execSync('git log ' + branch + ' --pretty=format:"%s | %h"').toString();

var pairs = _.map(output.match(reLine), function(value) {
  var pair = _.map(_.trim(value, '"\'').split('|'), _.trim);
  pair[0] = _.result(/\d+(?:\.\d+)*/.exec(pair[0]), 0, '');
  return pair;
});

pairs = _.filter(pairs, '0');

pairs.sort(function(a, b) {
  return semver.gt(a[0], b[0]) ? 1 : (semver.lt(a[0], b[0]) ? -1 : 0);
});

pairs = pairs.map(function(pair) {
  var tag = pair[0] + (branch == 'master' ? '' : '-' + branch);
  return [
    //'git checkout ' + tag + ' && git commit --amend --no-edit --date "`date`"',
    'git tag -f -a -m ' + tag + ' "' + tag + '" ' + pair[1],
    'git push -f origin ' + tag
  ];
});

_.each(pairs, function(pair, index) {
  _.each(pair, function(command) {
    _.delay(function() {
      console.log(command)
      execSync(command);
    }, 1000 * index);
  });
});
