var local = require('../../lib/services/localGit')
var execSync = require('child_process').execSync

describe('Local git/mercurial CI Provider', function() {
  it('can get commit', function() {
    expect(local.configuration().commit).to.match(/^\w{40}$/)
    expect(local.configuration().commit).to.eql(
      execSync("git rev-parse HEAD || hg id -i --debug | tr -d '+'")
        .toString()
        .trim()
    )
  })

  it('can get branch', function() {
    expect(local.configuration().branch).to.not.eql(null)
  })
})
