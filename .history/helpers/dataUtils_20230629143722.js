const fs = require('fs');
const path = require('path');

const dataFolderPath = path.join(__dirname, '../data');

const readJsonFile = (filename) => {
  const filePath = path.join(dataFolderPath, filename);
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileData);
  }
  return [];
};

const writeJsonFile = (filename, data) => {
  const filePath = path.join(dataFolderPath, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
};

module.exports = { readJsonFile, writeJsonFile };
