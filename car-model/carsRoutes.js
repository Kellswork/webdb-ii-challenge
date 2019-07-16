const express = require('express');
const { getCar, getById, newCar } = require('./carsdbModels');
const validateCarId = require('./carValidator');

const router = express.Router();

module.exports = router;


router.get('/', async (req, res) => {
    try {
    const cars = await getCar();
    if (cars.length === 0) {
      return res.status(400).json({ message: 'no car has been created' });
    }
    return res.status(200).json(cars);
  } catch (error) {
    return res.status(500).json({ error: 'could not retrieve car data ' });
  }
});

router.get('/:id', validateCarId, async (req, res) => {
    try {
      const account = await getAccountById(req.params.id);
      return res.status(200).json(account);
    } catch (error) {
      return res.status(500).json({ error: 'could not retrieve account' });
    }
  });

router.post('/', async (req, res) => {
    try {
      const account = await AddNewAccount(req.body);
      return res.status(201).json(account);
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'could not save account to the database' });
    }
});
  
