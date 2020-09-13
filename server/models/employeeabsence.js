'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeAbsence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EmployeeAbsence.belongsTo(models.Employee)
    }
  };
  EmployeeAbsence.init({
    EmployeeId: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    break_time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EmployeeAbsence',
  });
  return EmployeeAbsence;
};