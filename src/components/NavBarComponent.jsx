import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


// Tuve que importar Link manualmente ya que debía modificar 
// los links que traen por predeterminado las navbars de reactbootstrap y utilicé las props
// as y to para que los enlaces sean manejados por ReactRouterDom y no se recargue la página.



const NavBarComponent = () => {


  return (

    <Navbar expand="lg">

      <Container>

        <Navbar.Brand as={Link} to="/" className='rekt'>Rekt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
            <NavDropdown title="Menú" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Detalle">Detalle</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/SobreNosotros">
                Sobre nosotros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>


  );



}

export default NavBarComponent;