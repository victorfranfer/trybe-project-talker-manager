const fs = require('fs').promises;

const readFile = async () => {
  const path = 'src/talker.json';
  const fileContent = await fs.readFile(path, 'utf-8');
  const parseContent = JSON.parse(fileContent);
  return parseContent;
};

module.exports = { readFile };