import React, { useState } from 'react'
import { Breadcrumb, Container, Row, Col, Form, Button } from 'react-bootstrap'
import SearchResultPembiayaanSahabat from './SearchResult';
import "../Laporan.css";

function SearchProfilSahabat() {
    // --------- FE --------------
    // Controls visibility of the reports
    const [ isSearchResultPembiayaanVisible, setIsSearchResultPembiayaanVisibile] = useState(false);

    const handleSearchResultPembiayaanVisibility = () => {
        setIsSearchResultPembiayaanVisibile(!isSearchResultPembiayaanVisible);
    };

  return (
    <>
        <div className='pageTitle'>
            <h1>Carian Pembiayaan Sahabat</h1>

            <Breadcrumb>
                <Breadcrumb.Item className='previousLink'>Senarai Laporan</Breadcrumb.Item>
                <Breadcrumb.Item active>Carian Pembiayaan Sahabat</Breadcrumb.Item>
            </Breadcrumb>
        </div>

        <div className='hasilCarianContent'>
            <div className='hasilCarianSahabatTitle'>
                <h2>Maklumat Sahabat</h2>
            </div>

            <Container>
                <Row>
                    <Col xs={12}>
                        <Form.Group>
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="text" defaultValue="" disabled />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group className='carianSpacing'>
                            <Form.Label>No. Kad Pengenalan</Form.Label>
                            <Form.Control type="text" defaultValue="" disabled />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='carianPembiayaanSahabat'>
            <div className='hasilCarianSahabatTitle'>
                <h3>Pilih Jenis Pembiayaan</h3>
            </div>

            <Container>
                <Row>
                    <Col xs={12} xl={10}>
                        <Form>
                            <Form.Group>
                                <Form.Select aria-label="pembiayaanSelect">
                                    <option value="pembiayaanSejahtera">i-Sejahtera</option>
                                    <option value="pembiayaanEkonomi">i-Ekonomi</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={12} xl={2}>
                        <Button className='cariPembiayaanBtn' onClick={handleSearchResultPembiayaanVisibility}>
                            Cari
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='hasilCarianPembiayaan'>
            {isSearchResultPembiayaanVisible && (
                <SearchResultPembiayaanSahabat/>
            )}
        </div>
        
    </>
  )
}

export default SearchProfilSahabat;
