import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import ThemeSelector from './ThemeSelector';
import { useContext } from 'react';

function NavBar() {
    const { currentStyle } = useContext(ThemeContext);

    const navLinkStyle = {
        textDecoration: "none",
        fontWeight: "500",
        fontSize: "16px",
    };

    return (
        <Navbar expand="lg" style={currentStyle.base} className="shadow-sm py-3">
            <Container>
                <Navbar.Brand style={{ ...currentStyle.base, fontWeight: "bold", fontSize: "24px" }}>
                    Aqsa Mahmood
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "grey" }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex gap-3">
                        <a style={{textDecoration:"none", ...currentStyle.base}} href='#intro'>Intro</a>
                        <a style={{textDecoration:"none", ...currentStyle.base}}  href='#skills'>Skills</a>
                        <a style={{textDecoration:"none", ...currentStyle.base}}  href='#contact'>Contact</a>
                    </Nav>
                    <ThemeSelector />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
