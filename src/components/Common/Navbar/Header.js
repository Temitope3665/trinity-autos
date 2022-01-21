import logo from '../../icons/logo.svg'
import cartLogo from '../../icons/cart-logo.svg'
import Button from '../Button/Button'
import { Navbar, Nav } from 'react-bootstrap'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    return ( 
        <div>
            <Navbar className='header-bg' expand="lg" expand='md' collapseOnSelect>
                    <Navbar.Brand className='trinity-logo'>
                        <Link to='/'> <img src={logo} alt='trinity-logo' /> </Link>
                    </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='header'>
                        <div className='left-header'>
                            <Link to='/'> <img className='trinity-logo-md me-3' src={logo} alt='trinity-logo-md' /> </Link>
                            <Link className='left-link' to='/all-vehicles'>All Vehicles </Link>
                            <Link className='left-link' to='/contact'>Contact</Link>
                            <Link className='left-link' to='/blog'>Blog</Link>
                        </div>
                        <div className='right-header'>
                            <div className='cart-wrapper'>
                                <img className='cart-logo mb-1 ms-2' src={cartLogo} alt='cart-logo' />
                                <Link className='right-link' to='/cart'>Cart</Link>
                            </div>
                            <Link className='right-link' to='/register'>Register</Link>
                            <Link to='/login'><Button style='login-btn' name='LogIn' /></Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header