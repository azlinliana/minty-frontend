import './Navbar.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function SecondNavbar() {
  return(
    <>
      <Navbar className="navbar-secondary">
        <Container>
          <Navbar.Brand className="text-white">Page Title</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default SecondNavbar