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
    return queryInterface.bulkInsert('Employees', [
      {
        birthdate: "1953-09-02",
        first_name: 'Georgi',
        last_name: 'Facello',
        gender: 'M',
        join_date: '1986-06-26',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        birthdate:'1964-06-02',
        first_name:'Bezalel',
        last_name:'Simmel',
        gender:'F',
        join_date:'1985-11-21',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        birthdate:'1959-12-03',
        first_name:'Parto',
        last_name:'Bamford',
        gender:'M',
        join_date:'1986-08-28',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        birthdate:'1954-05-01',
        first_name:'Chirstian',
        last_name:'Koblick',
        gender:'M',
        join_date:'1986-12-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        birthdate:'1955-01-21',
        first_name:'Kyoichi',
        last_name:'Maliniak',
        gender:'M',
        join_date:'1989-09-12',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        birthdate:'1953-04-20',
        first_name:'Anneke',
        last_name:'Preusig',
        gender:'F',
        join_date:'1989-06-02',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        birthdate:'1957-05-23',
        first_name:'Tzvetan',
        last_name:'Zielinski',
        gender:'F',
        join_date:'1989-02-10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        birthdate:'1958-02-19',
        first_name:'Saniya',
        last_name:'Kalloufi',
        gender:'M',
        join_date:'1994-09-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        birthdate:'1952-04-19',
        first_name:'Sumant',
        last_name:'Peac',
        gender:'F',
        join_date:'1985-02-18',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        birthdate:'1963-06-01',
        first_name:'Duangkaew',
        last_name:'Piveteau',
        gender:'F',
        join_date:'1989-08-24',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
