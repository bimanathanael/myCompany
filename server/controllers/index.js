const { EmployeeSalary, Employee, EmployeeAbsence } = require('../models')

class Controller {
  static getSalary (req, res){
    EmployeeSalary.findAll({include: ['Employee']})
    .then( data => {
      
      return res.status(200).json(data)
    })
  }

  static randomAbsence (req, res){
    Employee.findAll()
    .then( data => {
      data.forEach(item => {
        const today = new Date()
        const tomorrow = new Date(today)
        let day = 0
        while (day < 90) {
          let breakTime = Math.floor(Math.random() * 90)
          let year = tomorrow.getFullYear();
          let month = tomorrow.getMonth()+1;
          let dt = tomorrow.getDate();
          let dateFormat

          if (dt < 10) {
            dt = '0' + dt;
          }
          if (month < 10) {
            month = '0' + month;
          }
          dateFormat = year+'-' + month + '-'+dt
          let newData = {
            EmployeeId: item.dataValues.id,
            start_date: dateFormat,
            end_date: dateFormat,
            break_time: breakTime,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
          EmployeeAbsence.create(newData)
          tomorrow.setDate(tomorrow.getDate() + 1)
          day += 1
        }
      });
      return res.status(200).json({message: "done random"})
    })
  }
}

module.exports = Controller