import { useNavigate } from 'react-router-dom'

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function SearchTf02() {
  // Link pages
  const navigate = useNavigate()
  const clickCariJadualTF02 = () => navigate('/result-tf02')

  return(
    <>
      <div>
        <h1>Jadual TF02</h1>
        
        <Breadcrumb>
          <Breadcrumb.Item href="#">Senarai Laporan</Breadcrumb.Item>
          <Breadcrumb.Item active>Jadual TF02</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <h2>Analisa Penghantaran Per RM - Bulanan</h2>
        
        <Container>
          <Row>

            {/* Cawangan */}
            <Col xs={12} md={4}>
              <div>
                <Form.Label>Cawangan</Form.Label>
                <Form.Select>
                  <option>-Sila Pilih-</option>
                  <option value="GERIK">GERIK</option>
                  <option value="IPOH">IPOH</option>
                  <option value="KERIAN">KERIAN</option>
                  <option value="KINTA">KINTA</option>
                  <option value="KUALA KANGSAR">KUALA KANGSAR</option>
                  <option value="LENGGONG">LENGGONG</option>
                  <option value="MANJUNG">MANJUNG</option>
                  <option value="MINI TANJUNG MALIM">MINI TANJUNG MALIM</option>
                  <option value="SELAMA">SELAMA</option>
                  <option value="SERI ISKANDAR">SERI ISKANDAR</option>
                  <option value="TAIPING">TAIPING</option>
                  <option value="SELAMA">TAPAH</option>
                  <option value="SELAMA">TELUK INTAN</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
        </Container>

        <div><Button variant="primary" onClick={clickCariJadualTF02}>Cari</Button>{' '}</div>
        <div><Button variant="secondary">Kembali</Button>{' '}</div>
      </div>
    </>
  )
}

export default SearchTf02
