const path = require('path');
const fse = require('fs-extra');

function copyToBuild(fileName) {
  return fse.copyFile(
    path.resolve(__dirname, '..', fileName),
    path.resolve(__dirname, '..', 'build', fileName)
  );
}

async function createPackageFile() {
  const data = await fse.readFile(
    path.resolve(__dirname, '..', 'package.json'),
    'utf8'
  );

  const {
    devDependencies,
    jest,
    husky,
    main,
    module,
    typings,
    'lint-staged': ls,
    scripts: { postinstall },
    ...other
  } = JSON.parse(data);

  const newPackage = {
    ...other,
    private: false,
    main: main.replace('build/', ''),
    module: module.replace('build/', '')
  };

  const buildPackagePath = path.resolve(
    __dirname,
    '..',
    'build',
    'package.json'
  );

  await fse.writeFile(buildPackagePath, JSON.stringify(newPackage, null, 2));

  console.log(`Created package.json in ${buildPackagePath}`);
}

createPackageFile()
  .then(() => copyToBuild('README.md'))
  .then(() => copyToBuild('LICENSE'))
  .then(() => copyToBuild('CHANGELOG.md'))
  .catch(console.error);
