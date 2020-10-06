import React, { Component } from 'react'
import EmploeeListService from './EmployeeListService';


class EmployeeListComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);

    }

    deleteEmployee(id) {
        EmploeeListService.deleteEmployee(id).then((res) => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
        
    }

    editEmployee(id)
    {
        this.props.history.push(`/add-employee/${id}`);    
    }
    componentDidMount() {
        EmploeeListService.getEmployees().then((res) => {
            this.setState({ employees: res.data }); 
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee/_add')
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
               
                    <button className="btn btn-primary " onClick={this.addEmployee}>Add Employee   +</button>
                
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>Employee id</th>
                                <th>Employee first name</th>
                                <th>Employee last name</th>
                                <th>Employee Email Address</th>
                                <th>Action</th>


                                
                            </tr>



                        </thead>
                        <tbody>
                        {
                            this.state.employees.map(
                                emp =>
                                    <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                        <td>{emp.firstName}</td>
                                        <td>{emp.lastName}</td>

                                        <td>{emp.emailId}</td>
                                        <td><button onClick={()=> this.editEmployee(emp.id)} className="btn btn-info">Update</button>
                                            <button style={{ marginLeft: "10px"}} onClick={()=> this.deleteEmployee(emp.id)} className="btn btn-danger">Delete</button></td>



                                    </tr>
                            )
                        }
                        </tbody>

                    </table>



                </div>
            </div>
        )
    }
}

export default EmployeeListComponents;
