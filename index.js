const fs = require('fs');

function getFiles(dirName) {
  return fs.readdirSync(dirName);
}

function filterFiles(dirName, fn) {
  let files = fs.readdirSync(dirName);
  if (!fn) {
    return files;
  }

  if (typeof fn !== 'function') {
    console.warn('Invalid input parameters. fn should be a function!');
    return files;
  }

  return files.filter((fname) => !!fn(fname));
}

function rerename(files, transformer) {
  if (!Array.isArray(files)) {
    throw new Error('Invalid input parameter $0, should be file list.');
  }

  if (typeof transformer !== 'function') {
    throw new Error('Invalid input parameter $1, should be function.');
  }

  for (let file of files) {
    let newFile = transformer(file);
    fs.renameSync(file, newFile);
  }
}

module.exports = {
  getFiles,
  filterFiles,
  rerename,
}