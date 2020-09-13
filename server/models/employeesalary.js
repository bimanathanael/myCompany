'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeSalary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EmployeeSalary.belongsTo(models.Employee)

    }
  };
  EmployeeSalary.init({
    EmployeeId: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    salary: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EmployeeSalary',
  });
  return EmployeeSalary;
};