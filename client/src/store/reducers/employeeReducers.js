
const initialState = {
  employeeSalaries: [],
  employeeAges: []
}

export const employeeReducers = ( state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEE_AGE':
      return {
        ...state,
        employeeAges: action.payload.ageData
      }
    case 'SET_EMPLOYEE_SALARY':
      return {
        ...state,
        employeeSalaries: action.payload.salaryData
      }
    default:
      return state
  }
}
