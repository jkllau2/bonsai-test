'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('merchant_products', {
      merchantId: {
        type: Sequelize.UUID,
      },
      productId: {
        type: Sequelize.UUID,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('merchant_products');
  }
};