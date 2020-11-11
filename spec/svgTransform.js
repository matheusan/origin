import path from 'path';

module.exports = {
  process(filename) {
    return `module.exports =  ${JSON.stringify(path.basename(filename))};`;
  }
};
