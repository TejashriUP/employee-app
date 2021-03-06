import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import EmployeeListComponents from './crud/EmployeeListComponents';
import HeaderComponent from './crud/HeaderComponent';
import FooterComponent from './crud/FooterComponent';
import EmployeeAdd from './crud/EmployeeAdd';
import UpdateEmployeeComponent from './crud/UpdateEmployeeComponent';



const App = () => {
  return ( 
    <>
    <div>
      <Router>
       
          <HeaderComponent/>
              <div className="container">
            <Switch>
              <Route path="/" exact component={EmployeeListComponents}></Route>
              <Route path="/employees" component={EmployeeListComponents}></Route>
              <Route path="/add-employee/:id" component={EmployeeAdd}></Route>
            {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>*/}
             
                     
          </Switch>
          
      </div>
    

        
      </Router>
      
    </div>
    <FooterComponent />
    </>
      
    

  );
};
export default App;