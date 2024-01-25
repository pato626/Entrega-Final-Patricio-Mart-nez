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

      <Container className='fondo-nav'>

        <Navbar.Brand as={Link} to="/" className='rekt'>REKT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">INICIO</Nav.Link>
            <Nav.Link as={Link} to="/SobreNosotros">SOBRE NOSOTROS</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Productos/Bebidas">BEBIDAS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Productos/Indumentaria">INDUMENTARIA </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Productos">TODOS LOS PRODUCTOS </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to="/Carrito"> <CartWidget /></Link>
      </Container>
    </Navbar>


  );



}

export default NavBarComponent;