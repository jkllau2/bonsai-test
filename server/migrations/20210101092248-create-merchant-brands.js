'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('merchant_brands', {
      merchantId: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      brand: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('merchant_brands');
  }
};