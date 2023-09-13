import { useNavigate } from 'react-router-dom';

import './Navbar.css'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image';

import AIMLogo from '../../../assets/aim-logo.jpg'

function FirstNavbar() {
  // Link pages
  const navigate = useNavigate();
  const clickAIMLogo = () => navigate('/inflow-outflow')
  return(
    <>
      <Navbar className="navbar-primary shadow">
        <Container>
          <Navbar.Brand onClick={clickAIMLogo}>
            <Image src={AIMLogo} height="40" className="d-inline-block align-top" />{' '}
            PBMR
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default FirstNavbar