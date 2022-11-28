'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('Books', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pageQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updateAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('Books');
  }
};