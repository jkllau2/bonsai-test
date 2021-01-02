'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('merchants', {
      index: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      guid: {
        type: Sequelize.UUID
      },
      logo: {
        type: Sequelize.STRING
      },
      dateCreated: {
        type: Sequelize.DATE
      },
      publishedState: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      merchant: {
        type: Sequelize.STRING
      },
      commissionFee: {
        type: Sequelize.STRING
      },
      contactEmail: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      publishedDate: {
        type: Sequelize.DATE
      },
      companyDescription: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
    await queryInterface.addConstraint('merchants', {
      fields: ['guid'],
      type: 'unique',
      name: 'custom_uniq_merchant_constraint1'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('merchants');
  }
};