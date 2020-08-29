import React, { Component } from 'react';
import {Nav, NavDropdown ,ListGroupItem } from 'react-bootstrap';

export default class Header extends Component {

    handleSelect = e => {
        console.log(e);
    }

    render(){
        return(
            <Nav variant="pills" activeKey="1" onSelect={e => this.handleSelect(e)} className="justify-content-end">
                <NavDropdown title="Add New" id="nav-dropdown" className="addNew btn btn__primary ripple">
                    <NavDropdown.Item as={ListGroupItem} eventKey="1.1">New Contract</NavDropdown.Item>
                    <NavDropdown.Item as={ListGroupItem} eventKey="1.2">New Event</NavDropdown.Item>
                    <NavDropdown.Item as={ListGroupItem} eventKey="1.3">New Vendor</NavDropdown.Item>
                    <NavDropdown.Item as={ListGroupItem} eventKey="1.4">New Report</NavDropdown.Item>
                    <NavDropdown.Item as={ListGroupItem} eventKey="1.5">New Portfolio</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link eventKey="2" href="#/home">
                        Upgrade Plan
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" title="Item">
                        Notifications
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" >
                        Profile
                    </Nav.Link>
                </Nav.Item>
                
            </Nav>
        )
    }
}