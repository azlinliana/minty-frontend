import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image';

import AIMLogo from '../../../assets/aim-logo.jpg'

function FirstNavbar() {
  return(
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={AIMLogo} height="40" className="d-inline-block align-top" />{' '}
            PBMR
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default FirstNavbar