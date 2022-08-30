"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("data_transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      trans_date: {
        type: Sequelize.DATE,
      },
      UserId: {
        type: Sequelize.STRING,
      },
      ProductId: {
        type: Sequelize.INTEGER,
      },
      qty_order: {
        type: Sequelize.INTEGER,
      },
      total_order: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("data_transactions");
  },
};
