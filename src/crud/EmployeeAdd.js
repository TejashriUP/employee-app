import React, { Component } from 'react'

import EmployeeListService from './EmployeeListService';

class EmployeeAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
           
            firstName: '',
            lastName: '',
            emailId:''
        }
       
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    }
    componentDidMount() {
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeListService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
               
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                });
                
            });
           }
        }



        
    saveorUpdateEmployee = (e) => {
        e.preventDefault();

        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        console.log('employee =>' + JSON.stringify(employee));

        if (this.state.id === '_add') {
            EmployeeListService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        } else {
              EmployeeListService.updateEmployee(employee, this.state.id).then(res => {
            this.props.history.push('/employees');
        });

        }




       
            
       
    }
   
    changeFirstNameHandler(event) {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler(event) {
        this.setState({ lastName: event.target.value });
    }
    changeEmailIdHandler(event) {
        this.setState({ emailId: event.target.value });
    }
    cancel() {
        this.props.history.push('/employees');
    }


    getTitle() {
        if (this.state.id === '_add')
        {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update employee</h3>
            }
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle() 
                                
                       }
                        <div className="card-body">
                                <form>
                                {/*<div className="form-group">
                                    <label>Employee Id</label>
                                    <input placeholder="Employee id" name="Employee id" className="form-control"
                                        value={this.state.employeeId} onChange={this.changeEmployeeId} />

                                </div>*/}
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input placeholder="First name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />

                                </div>



                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input placeholder="Last name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />

                                </div>


                                <div className="form-group">
                                    <label>Email id</label>
                                    <input placeholder="Email id" name="emailid" className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailIdHandler} />

                                </div>
                        <button className="btn btn-success" onClick={this.saveorUpdateEmployee.bind(this)}>Save</button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                            </form>

                        </div>

                    </div>
                    </div>
                    

               </div>
            </div>
        )
    }
}
export default EmployeeAdd;