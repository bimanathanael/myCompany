
const getEmployeeAge = () => {
  return (dispact) => {
    fetch('http://localhost:3000/age', {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
      },
    })
      .then( resp => resp.json())
      .then( data => 
        dispact({
          type: 'SET_EMPLOYEE_AGE',
          payload: {
            ageData: data
          }
        }))
  }
}


const getEmployeeSalary = () => {
  return (dispact) => {
    fetch('http://localhost:3000/salary', {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
      },
    })
      .then( resp => resp.json())
      .then( data => 
        dispact({
          type: 'SET_EMPLOYEE_SALARY',
          payload: {
            salaryData: data
          }
        }))
  }
}


const randomAbsence = () => {
  return () => {
    fetch('http://localhost:3000/randomAbsence', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
    })
      .then( resp => resp.json())
      .then( data => 
        console.log(data, 'randomAbsence')
      )
  }
}


const randomLeaves = () => {
  return () => {
    fetch('http://localhost:3000/randomLeaves', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
    })
      .then( resp => resp.json())
      .then( data => 
        console.log(data, 'randomLeaves')
      )
  }
}

const generateNewSalary = () => {
  return () => {
    fetch('http://localhost:3000/generateNewSalary', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
    })
      .then( resp => resp.json())
      .then( data => 
        console.log(data, 'generateNewSalary')
      )
  }
}