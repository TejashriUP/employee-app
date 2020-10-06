import axios from 'axios';
const EMPLOEE_API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeListService{

    getEmployees() {
        return  axios.get(EMPLOEE_API_URL);
}
    createEmployee(employee) {
        return axios.post(EMPLOEE_API_URL,employee);
    }
    getEmployeeById(employeeId) {
        return axios.get(EMPLOEE_API_URL + '/' + employeeId);
    }

    updateEmployee(employee,employeeId) {
        return axios.put(EMPLOEE_API_URL + '/' + employeeId,employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOEE_API_URL + '/' + employeeId);
    }
}
export default new EmployeeListService();