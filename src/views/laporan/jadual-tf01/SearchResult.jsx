import { useNavigate } from 'react-router-dom'

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';

function ResultTF01() {
  // Link pages
  const navigate = useNavigate()
  const clickCariJadualTF01 = () => navigate('/result-tf01')

  return(
    <>
      <div>
        <h1>Jadual TF01</h1>
        
        <Breadcrumb>
          <Breadcrumb.Item href="#">Senarai Laporan</Breadcrumb.Item>
          <Breadcrumb.Item active>Jadual TF01</Breadcrumb.Item>
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

            {/* Pusat */}
            <Col xs={12} md={4}>
            <div>
              <Form.Label>Pusat</Form.Label>
              <Form.Select>
                <option>-Sila Pilih-</option>
                <option value="AINUL ASMA">AINUL ASMA</option>
                <option value="AINUL HAYAT">AINUL HAYAT</option>
                <option value="AINUL NURA">AINUL NURA</option>
                <option value="AINUL SOFIA">AINUL SOFIA</option>
                <option value="AINUL YASMIN">AINUL YASMIN</option>
                <option value="AL-ANSAR">AL-ANSAR</option>
                <option value="AL-BARAQAH">AL-BARAQAH</option>
                <option value="AL-HIJIRIAH">AL-HIJIRIAH</option>
                <option value="AL-QAUSAR">AL-QAUSAR</option>
              </Form.Select>
              </div>
            </Col>
          </Row>
        </Container>

        <div><Button variant="primary" onClick={clickCariJadualTF01}>Cari</Button>{' '}</div>
        <div><Button variant="secondary">Kembali</Button>{' '}</div>
      </div>

      <div>
        <h3>Hasil Carian: Wilayah - Perak, Cawangan - Ipoh, Pusat - Ainul Hayat</h3>

        <Table responsive striped bordered>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Nama Cawangan</th>
              <th>Nama Blok</th>
              <th>Nama Pusat</th>
              <th>No. KP Sahabat</th>
              <th>No. Kakitangan</th>
              <th>Nama Sahabat/Sampel</th>
              <th>Dimensi</th>
              <th>Tulen/Campuran</th>
              <th>Julat</th>
              <th>Kegiatan</th>
              <th>Sub Kegiatan</th>
              <th>Pembiayaan + Caj (RM)</th>
              <th>Pendapatan dari AIM (A1) (RM)</th>
              <th>Pendapatan dari Jumlah Masuk (Inflow) (RM)</th>
              <th>Pendapatan dari Jumlah Keluar (Outflow) (RM)</th>
              <th>Pulangan Per RM</th>
              <th>Bilangna Kali Pinjam</th>
              <th>Pengguna Modal</th>
              <th>Bil. Minggu Tracking</th>
              <th>Tarikh Last Tracking</th>
              <th>Julat Pulangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>

        <div><Button variant="primary">Download TF01</Button>{' '}</div>

      </div>
    </>
  )
}

export default ResultTF01