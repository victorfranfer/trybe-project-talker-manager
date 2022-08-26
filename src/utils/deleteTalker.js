const fs = require('fs').promises;
const { readFile } = require('./readFile');

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const data = await readFile();
  const talkerIndex = data.findIndex((talker) => talker.id === Number(id));
  if (!talkerIndex) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada ' });
  }

  data.splice(talkerIndex, 1);
  const path = 'src/talker.json';
  await fs.writeFile(path, JSON.stringify(data));
  return res.status(204).json(data);
};

module.exports = { deleteTalker };