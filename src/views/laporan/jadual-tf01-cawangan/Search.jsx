import { useNavigate } from 'react-router-dom'

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function SearchTf01ByCawangan() {
  // Link pages
  const navigate = useNavigate()
  const clickCariJadualTF01Cawangan = () => navigate('/result-tf01-cawangan')

  return(
    <>
      <div>
        <h1>Jadual TF01 Mengikut Cawangan</h1>
        
        <Breadcrumb>
          <Breadcrumb.Item href="#">Senarai Laporan</Breadcrumb.Item>
          <Breadcrumb.Item active>Jadual TF01 Mengikut Cawangan</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <h2>Senarai Sahabat Mengikut Cawangan, Blok, Pusat dan Pulangan</h2>
        
        <Container>
          <Row>
            {/* Wilayah */}
            <Col xs={12} md={4}>
              <div>
                <Form.Label>Wilayah</Form.Label>
                <Form.Select>
                  <option>-Sila Pilih-</option>
                  <option value="PERAK">PERAK</option>
                  <option value="NEGERI SEMBILAN/MELAKA">NEGERI SEMBILAN/MELAKA</option>
                  <option value="SABAH">SABAH</option>
                  <option value="PAHANG">PAHANG</option>
                  <option value="KELANTAN">KELANTAN</option>
                  <option value="KEDAH">KEDAH</option>
                  <option value="SELANGOR/KUALA LUMPUR">SELANGOR/KUALA LUMPUR</option>
                  <option value="TERENGGANU">TERENGGANU</option>
                  <option value="JOHOR">JOHOR</option>
                </Form.Select>
              </div>
            </Col>

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

        <div><Button variant="primary" onClick={clickCariJadualTF01Cawangan}>Cari</Button>{' '}</div>
        <div><Button variant="secondary">Kembali</Button>{' '}</div>
      </div>
    </>
  )
}

export default SearchTf01ByCawangan
