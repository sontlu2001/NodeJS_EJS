'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('Customers', [
      {
        name: 'Nguyễn Văn Hùng',
        phone: '0354427882',
        cumulative: 120
      },
      {
        name: 'Trần Trung Quân',
        phone: '0354421146',
        cumulative: 0
      },
      {
        name: 'Đặng Thị Thu Hà',
        phone: '0354423234',
        cumulative: 1000
      },
      {
        name: 'Đỗ Minh Hương',
        phone: '0354424679',
        cumulative: 2999
      },
      {
        name: 'Nguyễn Hoàng Kim Anh',
        phone: '0383298321',
        cumulative: 2998
      },
      {
        name: 'Đỗ Anh Dũng',
        phone: '0383442321',
        cumulative: 1001
      },
      {
        name: 'Trần Đức Minh',
        phone: '0383442937',
        cumulative: 1500
      },
      {
        name: 'Nguyễn Thị Lan',
        phone: '0383442323',
        cumulative: 9999
      },
      {
        name: 'Trần Thúy Hằng',
        phone: '0383442239',
        cumulative: 3000
      },
      {
        name: 'Bùi Nguyên Phong',
        phone: '0973442234',
        cumulative: 9998
      },
      {
        name: 'Nguyễn Minh Quang',
        phone: '0363445434',
        cumulative: 3001
      },
      {
        name: 'Trần Khắc Cường',
        phone: '0358329321',
        cumulative: 4000
      },
      {
        name: 'Nguyễn Bá Phương',
        phone: '0358324279',
        cumulative: 10000
      },
      {
        name: 'Phạm Quốc Việt',
        phone: '0358329702',
        cumulative: 11000
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
