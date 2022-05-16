import React from 'react';
import {Navbar, Nav,Image} from 'react-bootstrap';
import {Link } from "react-router-dom";

const navbar = ()=>{
    const style = {
        backgroundColor:'cyan',
        width:'100%',
    }

    return(
        <React.Fragment>
            <Navbar className="navbar" style ={style}>
                <Link className="nav-link" to="/Employee">Add Employee</Link>
                <Link className="nav-link" to="/employee-list">List of Employee</Link>
                
                
            </Navbar>
        </React.Fragment>
    )
}

export default navbar;
