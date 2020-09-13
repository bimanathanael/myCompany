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
   return queryInterface.bulkInsert('EmployeeSalaries', [
    {
      EmployeeId: 1,
      salary: 11000,
      start_date: '1985-11-21',
      end_date: '1986-01-21',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 2,
      salary: 7000,
      start_date: '1985-11-21',
      end_date: '1986-01-21',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 3,
      salary: 8000,
      start_date: '1985-11-21',
      end_date: '1986-01-21',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 4,
      salary: 10000,
      start_date: '1985-11-21',
      end_date: '1986-01-21',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 5,
      salary: 8500,
      start_date: '1985-11-21',
      end_date: '1986-01-21',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 6,
      salary: 7000,
      start_date: '1985-11-21',
      end_date: '1986-01-21',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 7,
      salary: 9500,
      start_date: '1985-11-21',
      end_date: '1986-01-21',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 8,
      salary: 9000,
      start_date: '1985-11-21',
      end_date: '1986-01-21',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 9,
      salary: 8000,
      start_date: '1985-11-21',
      end_date: '1986-01-21',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      EmployeeId: 10,
      salary: 10000,
      start_date: '1985-11-21',
      end_date: '1986-01-21',
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
    return queryInterface.bulkDelete('EmployeeSalaries', null, {});

  }
};
