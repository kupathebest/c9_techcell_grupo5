'use strict';

const products = require('../../data/celulares.json')
const connectivities = []

products.forEach(celular => {
  let item = {
    wifi: celular.wifi,
    bluethoot: celular.bluetooth,
    gps: celular.gps,
    usb: celular.usb,
    nfc: celular.nfc,
    infrared: celular.infrarrojo,
    createdAt: new Date,
    updatedAt : new Date
  }
  connectivities.push(item)
});

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('connectivities', connectivities , {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('connectivities', null, {});

  }
};
