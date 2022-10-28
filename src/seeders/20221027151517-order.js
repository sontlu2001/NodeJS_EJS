'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkInsert('Orders', [{
      customer_id: 1,
      date: "2022/10/11",
      status: 1,
    }, {
      customer_id: 1,
      date: "2022/09/11",
      status: 2,
    }, {
      customer_id: 2,
      date: "2022/09/22",
      status: 1,
    }, {
      customer_id: 3,
      date: "2022/09/03",
      status: 2,
    }], {});
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
