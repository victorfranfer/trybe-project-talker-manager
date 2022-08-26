const fs = require('fs').promises;
const { readFile } = require('./readFile');

const editTalker = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    age,
    talk } = req.body;
  const data = await readFile();
  const talkerIndex = data.findIndex((talker) => talker.id === Number(id));
  if (!talkerIndex) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada ' });
  }

  const talkers = { ...data[talkerIndex], name, age, talk };
  data[talkerIndex] = talkers;
  const path = 'src/talker.json';
  await fs.writeFile(path, JSON.stringify(data));
  return res.status(200).json(data[talkerIndex]);
};

module.exports = { editTalker };