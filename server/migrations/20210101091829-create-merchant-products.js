'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('merchant_products', {
      merchantId: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      productId: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('merchant_products');
  }
};