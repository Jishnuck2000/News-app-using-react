import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import './Nab.css'



function Nab() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#"><Image src='logo.avif'  style={{height:"50px", width:"200px"}}className='logo'></Image></Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className="me-1"
              aria-label="Search"
            />
                        <Button variant="outline-success" className='bt1'>Search</Button>

          </Form>
          <NavDropdown title="Mumbai" id="navbarScrollingDropdown" className='id'>
              <NavDropdown.Item href="#action3">Kozhikode</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Chennai
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Bengalure</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Mangalure</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Kochi</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Kolkata</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Thiruvananthapuram</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Aluva</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Hydrabadh</NavDropdown.Item>
              
              <NavDropdown.Item href="#action3">Delhi</NavDropdown.Item>

              
            </NavDropdown>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
         
           
        </Navbar.Collapse>
           
      </Container>
    </Navbar>
  );
}

export default Nab;



// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function OffcanvasExample() {
//   return (
//     <>
//       {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
//         <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
//           <Container fluid>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
           
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default OffcanvasExample;