import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import HomeIcon from "@material-ui/icons/HomeOutlined";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <NavLink to="/" className={styles.brand}>
        <HomeIcon
          
          style={{
            color: "whitesmoke",
            margin: "0.2rem",
            paddingBottom : "0.2rem",
            fontSize : "35px"
          }}
        />
        <Navbar.Brand>PORTFOLIO</Navbar.Brand>
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/about" className={styles.navlink}>
            About
          </NavLink>
          <NavLink to="/projects" className={styles.navlink}>
            Projects
          </NavLink>
          <NavLink to="/skills" className={styles.navlink}>
            Skills
          </NavLink>

          <NavLink to="/contact" className={styles.navlink}>
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
