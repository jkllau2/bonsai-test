'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('merchant_published_users', {
      merchantId: {
        type: Sequelize.UUID
      },
      userId: {
        type: Sequelize.UUID
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('merchant_published_users');
  }
};