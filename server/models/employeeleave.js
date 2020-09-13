'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeLeave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EmployeeLeave.belongsTo(models.Employee)
    }
  };
  EmployeeLeave.init({
    EmployeeId: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EmployeeLeave',
  });
  return EmployeeLeave;
};