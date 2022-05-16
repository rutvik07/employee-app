import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Employee from "./AddEmployee";
import Navbar from "./Navbar"

import EmployeeList from "./EmployeeList"
import EditEmployee from "./EditEmployee"
import DeleteEmployee from "./DeleteEmployee";
import StartCompo from "./StartCompo";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Navbar/>
       
        <Switch>
        <Route path="/employee"><Employee/></Route>
        <Route path="/employee-list"><EmployeeList/></Route>
        <Route path="/edit-employee/:id"><EditEmployee/></Route>
        <Route path="/delete-employee/:id"><DeleteEmployee/></Route>
        <Route path="*"><StartCompo/></Route>

        
        
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
