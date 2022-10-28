'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Items', [{
      name: 'Tôm hùm nước phô mai',
      price: 1500000
    }, {
      name: 'Cafe nâu',
      price: 30000
    }, {
      name: 'Ngọn su su xào tỏi',
      price: 40000
    }, {
      name: 'Gà nướng ngũ vị',
      price: 400000
    }, {
      name: 'Bia Sài Gòn',
      price: 30000
    }, {
      name: 'Rau bí xào nấm tươi',
      price: 50000
    }
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
