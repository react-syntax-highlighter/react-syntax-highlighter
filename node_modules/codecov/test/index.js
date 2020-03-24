var fs = require('fs')
var mockFs = require('mock-fs')
var codecov = require('../lib/codecov')

var isWindows =
  process.platform.match(/win32/) || process.platform.match(/win64/)
var pathSeparator = !isWindows ? '/' : '\\'

describe('Codecov', function() {
  beforeEach(function() {
    try {
      fs.unlinkSync('.bowerrc')
    } catch (e) {}
  })

  after(function() {
    try {
      fs.unlinkSync('.bowerrc')
    } catch (e) {}
  })

  it('can get a token passed via env variable', function() {
    this.timeout(10000)
    process.env.codecov_token = 'abc123'
    expect(codecov.upload({ options: { dump: true } }).query.token).to.eql(
      'abc123'
    )
    delete process.env.codecov_token
    process.env.CODECOV_TOKEN = 'ABC123'
    expect(codecov.upload({ options: { dump: true } }).query.token).to.eql(
      'ABC123'
    )
    delete process.env.CODECOV_TOKEN
  })

  it('can get a token passed in cli', function() {
    expect(
      codecov.upload({ options: { dump: true, token: 'qwerty' } }).query.token
    ).to.eql('qwerty')
  })

  it('can read a codecov.yml file', function() {
    mockFs({
      'codecov.yml': 'codecov:\n  token: fake-token',
    })
    expect(codecov.upload({ options: { dump: true } }).query.token).to.eql(
      'fake-token'
    )
    mockFs.restore()
  })
  it('can read a .codecov.yml file', function() {
    mockFs({
      '.codecov.yml': 'codecov:\n  token: fake-token-dotfile',
    })
    expect(codecov.upload({ options: { dump: true } }).query.token).to.eql(
      'fake-token-dotfile'
    )
    mockFs.restore()
  })
  it('should have no token if yaml file does not supplied', function() {
    mockFs({
      '.codecov.yml': 'codecov:\n  noconfig: true',
    })
    expect(codecov.upload({ options: { dump: true } }).query.token).to.eql(
      undefined
    )
    mockFs.restore()
  })

  it('token precedence should be respected', function() {
    // options.token || .codecov.yml/codecov.yml file || codecov_token || CODECOV_TOKEN
    mockFs({
      '.codecov.yml': 'codecov:\n  token: fake-token-dotfile',
    })
    var upload = codecov.upload({ options: { dump: true, token: 'qwerty' } })
    expect(upload.query.token).to.eql('qwerty')
    mockFs.restore()

    process.env.codecov_token = 'abc123'
    upload = codecov.upload({ options: { dump: true, token: 'qwerty2' } })
    expect(upload.query.token).to.eql('qwerty2')
    delete process.env.codecov_token

    process.env.CODECOV_TOKEN = 'ABC123'
    upload = codecov.upload({ options: { dump: true, token: 'qwerty3' } })
    expect(upload.query.token).to.eql('qwerty3')
    delete process.env.CODECOV_TOKEN

    mockFs({
      '.codecov.yml': 'codecov:\n  token: fake-token-dotfile',
    })
    process.env.codecov_token = 'abc123'
    upload = codecov.upload({ options: { dump: true } })
    expect(upload.query.token).to.eql('fake-token-dotfile')
    mockFs.restore()

    process.env.codecov_token = 'abc123'
    process.env.CODECOV_TOKEN = 'ABC123'
    upload = codecov.upload({ options: { dump: true } })
    expect(upload.query.token).to.eql('abc123')
    delete process.env.codecov_token
    delete process.env.CODECOV_TOKEN
  })

  it('can auto detect reports', function() {
    var res = codecov.upload({ options: { dump: true } })
    expect(res.files[0].split(pathSeparator).pop()).to.eql(
      'example.coverage.txt'
    )
    expect(res.body).to.contain('this file is intentionally left blank')
  })

  it('can specify report in cli', function() {
    var res = codecov.upload({
      options: {
        dump: true,
        file: 'test' + pathSeparator + 'example.coverage.txt',
      },
    })
    expect(res.files[0].split(pathSeparator).pop()).to.eql(
      'example.coverage.txt'
    )
    expect(res.body).to.contain('this file is intentionally left blank')
  })

  it('can specify report in cli fail', function() {
    var res = codecov.upload({ options: { dump: true, file: 'notreal.txt' } })
    expect(res.debug).to.contain('failed: notreal.txt')
  })

  // it("can detect .bowerrc with directory", function(){
  //   fs.writeFileSync('.bowerrc', '{"directory": "test"}');
  //   var res = codecov.upload({options: {dump: true}});
  //   expect(res.files).to.eql([]);
  // });

  it('can detect .bowerrc without directory', function() {
    fs.writeFileSync('.bowerrc', '{"key": "value"}')
    var res = codecov.upload({ options: { dump: true } })
    expect(res.files[0].split(pathSeparator).pop()).to.eql(
      'example.coverage.txt'
    )
    expect(res.body).to.contain('this file is intentionally left blank')
  })

  it('can disable search', function() {
    var res = codecov.upload({ options: { dump: true, disable: 'search' } })
    expect(res.debug).to.contain('disabled search')
    expect(res.files).to.eql([])
  })

  it('can disable gcov', function() {
    var res = codecov.upload({ options: { dump: true, disable: 'gcov' } })
    console.log(res.debug)
    expect(res.debug).to.contain('disabled gcov')
  })

  it('can disable detection', function() {
    var res = codecov.upload({ options: { dump: true, disable: 'detect' } })
    expect(res.debug).to.contain('disabled detect')
  })

  it('can get build from cli args', function() {
    var res = codecov.upload({ options: { dump: true, build: 'value' } })
    expect(res.query.build).to.eql('value')
  })

  it('can get commit from cli args', function() {
    var res = codecov.upload({ options: { dump: true, commit: 'value' } })
    expect(res.query.commit).to.eql('value')
  })

  it('can get branch from cli args', function() {
    var res = codecov.upload({ options: { dump: true, branch: 'value' } })
    expect(res.query.branch).to.eql('value')
  })

  it('can get slug from cli args', function() {
    var res = codecov.upload({ options: { dump: true, slug: 'value' } })
    expect(res.query.slug).to.eql('value')
  })

  it('can get flags from cli args', function() {
    var res = codecov.upload({ options: { dump: true, flags: 'value' } })
    expect(res.query.flags).to.eql('value')
  })

  it('can include env in cli', function() {
    process.env.HELLO = 'world'
    var res = codecov.upload({ options: { dump: true, env: 'HELLO,VAR1' } })
    expect(res.body).to.contain('HELLO=world\n')
    expect(res.body).to.contain('VAR1=\n')
    delete process.env.HELLO
  })

  it('can include env in env', function() {
    process.env.HELLO = 'world'
    process.env.CODECOV_ENV = 'HELLO,VAR1'
    var res = codecov.upload({ options: { dump: true, env: 'VAR2' } })
    expect(res.body).to.contain('HELLO=world\n')
    expect(res.body).to.contain('VAR1=\n')
    expect(res.body).to.contain('VAR2=\n')
    delete process.env.HELLO
    delete process.env.CODECOV_ENV
  })

  it('can have custom args for gcov', function() {
    var res = codecov.upload({
      options: {
        dump: true,
        'gcov-root': 'folder/path',
        'gcov-glob': 'ignore/this/folder',
        'gcov-exec': 'llvm-gcov',
        'gcov-args': '-o',
      },
    })
    if (!isWindows) {
      expect(res.debug).to.contain(
        "find folder/path -type f -name '*.gcno' -not -path 'ignore/this/folder' -exec llvm-gcov -o {} +"
      )
    } else {
      expect(res.debug).to.contain(
        'for /f "delims=" %g in (\'dir /a-d /b /s *.gcno ^| findstr /i /v ignore/this/folder\') do llvm-gcov -o %g'
      )
    }
  })

  it('should have the correct version number', function() {
    var version = require('../package.json').version
    expect(codecov.version).to.eql('v' + version)
  })

  it('Should use codecov.yml via env variable', function() {
    var CWD = process.cwd()
    expect(
      codecov.upload({ options: { dump: true, disable: 'detect' } }).query.yaml
    ).to.eql(CWD + '/codecov.yml')

    mockFs({
      'foo.yml': '',
    })
    process.env.codecov_yml = 'foo.yml'
    expect(
      codecov.upload({ options: { dump: true, disable: 'detect' } }).query.yaml
    ).to.eql(CWD + '/foo.yml')
    mockFs.restore()
    delete process.env.codecov_yml

    mockFs({
      'FOO.yml': '',
    })
    process.env.CODECOV_YML = 'FOO.yml'
    expect(
      codecov.upload({ options: { dump: true, disable: 'detect' } }).query.yaml
    ).to.eql(CWD + '/FOO.yml')
    mockFs.restore()
    delete process.env.CODECOV_YML
  })

  it('can get config from cli args', function() {
    mockFs({
      'foo.yml': '',
    })
    var res = codecov.upload({
      options: { dump: true, yml: 'foo.yml', disable: 'detect' },
    })
    expect(res.query.yaml).to.eql(process.cwd() + '/foo.yml')
    mockFs.restore()
  })
})
