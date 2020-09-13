'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('JobTitles', [
    {
      EmployeeId: 1,
      title: 'Senior Engineer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 2,
      title: 'Staff',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 3,
      title: 'Senior Engineer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 4,
      title: 'Engineer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 5,
      title: 'Senior Staff',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 6,
      title: 'Senior Engineer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 7,
      title: 'Senior Staff',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 8,
      title: 'Assistant Engineer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 9,
      title: 'Senior Engineer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 10,
      title: 'Engineer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      
  ], {});
},

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('JobTitles', null, {});

  }
};
