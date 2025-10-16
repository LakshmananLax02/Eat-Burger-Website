import styles from './Navbarr.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navlogo from './assets/Navlogo.jpg'
import { NavLink } from 'react-router-dom';

function Navbarr() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={navlogo} alt="" className={styles.navlogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navmaincontent}>
              <Nav.Link
                as={NavLink}
                to="/"
                className={styles.navcontent}
                style={({ isActive }) => ({
                  color: "black",
                  backgroundColor: isActive ? "red" : "transparent"
                })}
              >
                <b>Home</b>
              </Nav.Link>

              <NavDropdown
                title="Menu"
                id="basic-nav-dropdown"
                className={styles.navcontent}
              >
                <NavDropdown.Item as={NavLink} to="/menu">Burger🍔</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/menu">Sides🍟</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/menu">Drinks🥤</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/menu">Combos🍴</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/menu">Desserts🍦</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/menu">Specials👨‍🍳</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={NavLink}
                to="/gallery"
                className={styles.navcontent}
                style={({ isActive }) => ({
                  color: "black",
                  backgroundColor: isActive ? "red" : "transparent"
                })}
              >
                <b>Gallery</b>
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/about"
                className={styles.navcontent}
                style={({ isActive }) => ({
                  color: "black",
                  backgroundColor: isActive ? "red" : "transparent"
                })}
              >
                <b>About</b>
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/contact"
                className={styles.navcontent}
                style={({isActive}) => ({
                  color:"black", backgroundColor: isActive ? "red" : "transparent"
                })}
              >
                <b>Contact Us</b>
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/order"
                className={styles.navcontent}
                style={{backgroundColor:"orange", color:"black"
                }}
                 
              
              >
                <b>Order Now</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;
