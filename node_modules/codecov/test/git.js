var git = require('../lib/git')
var execSync = require('child_process').execSync

describe('Git', function() {
  it('can get the branch', function() {
    expect(git.branch()).to.eql(
      execSync('git rev-parse --abbrev-ref HEAD || hg branch')
        .toString()
        .trim()
    )
  })

  it('can get the head', function() {
    expect(git.head()).to.eql(
      execSync("git log -1 --pretty=%H || hg id -i --debug | tr -d '+'")
        .toString()
        .trim()
    )
  })
})
