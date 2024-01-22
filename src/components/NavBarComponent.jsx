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
        <Navbar.Collapse className="subtitulo">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/SobreNosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/Detalle">Detalle</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Productos/Bebidas">Bebidas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Productos/Indumentaria">Indumentaria </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Productos">Todos los productos </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>


  );



}

export default NavBarComponent;