const { EmployeeSalary, Employee, EmployeeAbsence, EmployeeLeave, JobTitle } = require('../models')

class Controller {
  static getSalary (req, res){
    EmployeeSalary.findAll({include: ['Employee']})
    .then( data => {
      return res.status(200).json(data)
    })
  }

  static getAge (req, res){
    let allEmployee = []
    Employee.findAll()
    .then( data => {
      data.forEach(item => {
        let currDate = new Date()
        let age =  currDate.getFullYear()- item.dataValues.birthdate.getFullYear();
        let name = item.dataValues.first_name + " " + item.dataValues.last_name
        allEmployee.push({name: name , age : age})
      })
      return res.status(200).json(allEmployee)
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
          const startTime = tomorrow.setHours(Math.floor(Math.random() * 4) + 8)
          const endTime = tomorrow.setHours(Math.floor(Math.random() * 4) + 17)
          const breakTime = Math.floor(Math.random() * 90)
          const newData = {
            EmployeeId: item.dataValues.id,
            start_date: startTime,
            end_date: endTime,
            break_time: breakTime,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
          EmployeeAbsence.create(newData)
          tomorrow.setDate(tomorrow.getDate() + 1)
          day += 1
        }
      });
      return res.status(200).json({message: "done random employee absence"})
    })
  }

  static randomLeaves (req, res){
    Employee.findAll()
    .then( data => {
      data.forEach(item => {
        const today = new Date()
        const tomorrow = new Date(today)
        let day = 0
        while (day < 90) {
          let randomFemale = Math.floor(Math.random() * 4)
          let randomMale = Math.floor(Math.random() * 3)

          // 0 no need leave, 1 need leave
          let randomLeave = Math.floor(Math.random() * 2)
          const leaveType = ["Annual", "Sick", "Unpaid", "Maternity"]

          if(randomLeave === 1){
            let newData = {
              EmployeeId: item.dataValues.id,
              start_date: tomorrow,
              end_date: tomorrow,
              type: item.dataValues.gender === "F" ? leaveType[randomFemale] : leaveType[randomMale],
              createdAt: new Date(),
              updatedAt: new Date(),
            }
            EmployeeLeave.create(newData)
          }
          tomorrow.setDate(tomorrow.getDate() + 1)
          day += 1
        }
      });
      return res.status(200).json({message: "done random employee leave"})
    })
  }

  static generateNewSalary (req, res){
    let currSalary = 0
    let totalPercentage = req.body.pandemic == "true" ?  -1 : 0
    Employee.findAll()
    .then( data => {
      data.forEach(item => {
  
        EmployeeSalary.findOne({where: { EmployeeId: item.dataValues.id}})
        .then( salaryData => {
          currSalary = salaryData.dataValues.salary
          EmployeeAbsence.findAll({where: {EmployeeId: item.dataValues.id}})
          .then( absenceData => {
            let totalDay = 0
            let totalHours = 0
            let totalBreakTime = 0
            absenceData.forEach( oneDay => {
              totalDay += 1
              let start = oneDay.dataValues.start_date.getTime()
              let end = oneDay.dataValues.end_date.getTime()
              totalHours += (end - start) /3600 /1000
              totalBreakTime += oneDay.dataValues.break_time
            })
            let avgWorkingHours = totalHours/totalDay
            let avgBreaktime = totalBreakTime/totalDay
  
            if(avgWorkingHours > 10 ) totalPercentage += 5
            else if (avgWorkingHours <= 10 && avgWorkingHours > 8) totalPercentage += 4
            else if (avgWorkingHours <= 8 && avgWorkingHours > 7) totalPercentage += 2.5
            else if (avgWorkingHours <= 7 && avgWorkingHours > 5) totalPercentage += 0.5
            
  
            if(avgBreaktime > 10 ) totalPercentage -= 1
            else totalPercentage += 1.5
  
  
            JobTitle.findOne({where: {EmployeeId: item.dataValues.id}})
            .then( dataTitle => {
              switch (dataTitle.dataValues.title) {
                case "Staff":
                  totalPercentage += 1
                  break;
                case "Senior Engineer":
                  totalPercentage += 3
                  break;
                case "Engineer":
                  totalPercentage += 2
                  break;
                case "Assistant Engineer":
                  totalPercentage += 2.5
                  break;
                case "Technical Leader":
                  totalPercentage += 4
                  break;
                default:
                  currSalary += 1000
                  break;
              }
              let endTime = new Date()
              endTime.setDate(endTime.getDate() + 90)
              
              if(((currSalary * totalPercentage) /100) > 2000) {
                currSalary += 2000
              } else {
                currSalary = currSalary + ((currSalary * totalPercentage) /100)
              } 
              let newData = {
                EmployeeId: item.dataValues.id,
                start_date: new Date(),
                end_date: endTime,
                salary: Math.floor(currSalary),
                createdAt: new Date(),
                updatedAt: new Date(),
              }
              EmployeeSalary.update(newData, {where: {EmployeeId: item.dataValues.id}})
            })
          })
        })
      });
      return res.status(200).json({message: "done generate new salary"})
    })
  }
}

module.exports = Controller