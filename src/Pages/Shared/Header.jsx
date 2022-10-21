import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const {user,logout} = useContext(AuthContext);
  const handleLogout=()=>{
    logout();
  }
    return (
        <Navbar className='mb-5' bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to={'/'}>CAMPUS-NEWS</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/login"} className='nav-link'>Login</Link>
            <Link to={"/register"} className='nav-link'>Register</Link>
          </Nav>
          {
            user?.uid?<><p className='me-4'>{user?.displayName}</p> <Button onClick={handleLogout} variant="danger">logout</Button>{' '}</>:<><Link to={"/login"} className='nav-link me-4'>Login</Link>
            <Link to={"/register"} className='nav-link me-4'>Register</Link></>
          }
          
          {
            user?.photoURL?<Image className='ms-4' roundedCircle style={{height:'30px'}} src={user?.photoURL}></Image>:<FaUser></FaUser>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;