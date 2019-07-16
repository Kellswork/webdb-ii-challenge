const { getById } = require('./carsdbModels');

async function validateCarId(req, res, next) {
  try {
    const { id } = req.params;
    const account = await getById(id);
    if (!Number(id)) {
      return res.status(400).json({ error: 'the id provided is not a number' });
    } else if (account.length === 0) {
      return res.status(400).json({ error: 'Invalid account ID' });
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = validateCarId;