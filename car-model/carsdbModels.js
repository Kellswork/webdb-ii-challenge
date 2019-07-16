const db = require('../data/dbConfig');

module.exports = {
  getCar,
  getById,
  newCar
};

function getCar() {
  return db('cars');
}

function getById(id) {
  return db('cars').where({ id });
}

function newCar(cars) {
  return db('cars')
    .insert(car)
    .then(ids => {
      return getById(ids[0]);
    });
}
