const { readFile } = require('./readFile');

const searchTalker = async (req, res) => {
  const { q } = req.query;
  const data = await readFile();
  const searchTerm = data.filter((talker) => talker.name.includes(q));
  if (!q || q.length === 0) {
    return res.status(200).json(data);
  }
  if (!searchTerm) {
    return res.status(200).json([]);
  }
  return res.status(200).json(searchTerm);
};

module.exports = { searchTalker };