const fs = require('fs').promises;
const { readFile } = require('./readFile');

const addTalker = async (req, res) => {
  const {
    name,
    age,
    talk } = req.body;
  const data = await readFile();
  const id = data.length + 1;

  const talkers = { id, name, age, talk };

  data.push(talkers);
  const path = 'src/talker.json';
  await fs.writeFile(path, JSON.stringify(data));
  return res.status(201).json(talkers);
};

module.exports = { addTalker };