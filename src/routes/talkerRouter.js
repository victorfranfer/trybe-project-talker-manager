const { Router } = require('express');
const { readFile } = require('../utils/readFile');
const { addTalker } = require('../utils/addTalker');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const talkers = await readFile();
    return res.status(200).json(talkers);
  } catch (err) {
    return res.status(200).json([]);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const talkers = await readFile(); 
    const users = talkers.find((user) => user.id === Number(id));
    if (!users) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', validateToken, addTalker, validateName,
  validateAge, validateTalk, validateWatchedAt, validateRate);

module.exports = router;