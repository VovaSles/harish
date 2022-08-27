
import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../img/logo_dark.png'

const NaviBar = () => {
    return (
        <Navbar className='ml-auto' collapseOnSelect expan="lg" bg="dark" variant="dark">
            <Button variant="danger" style={{ marginLeft: '2rem' }}>הרשמה</Button>
            <Navbar.Toggle aria-controls='responsive-nav' />
            <Navbar.Collapse id='responsive-nav' />
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/harish/hugim">חוגים</Nav.Link>
                <Nav.Link as={Link} to="/harish/ligot">ליגות</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link as={Link} to="/harish"><Navbar.Brand className='ml-auto' style={{ marginLeft: '2rem' }}><img src={logo} alt='logo' width="70"
                    height="70" /></Navbar.Brand></Nav.Link>

            </Nav>
        </Navbar>
    )
}

export default NaviBar