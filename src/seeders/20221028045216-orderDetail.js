'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('orderdetails', [
      {
        order_id: 2,
        item_id: 3,
        quatity: 2,
      },
      {
        order_id: 1,
        item_id: 1,
        quatity: 3,
      },
      {
        order_id: 3,
        item_id: 4,
        quatity: 2,
      },
      {
        order_id: 4,
        item_id: 5,
        quatity: 1,
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
