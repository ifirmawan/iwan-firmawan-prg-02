import { useState, useEffect } from 'react'
import useSwr from 'swr'
import moment from 'moment'
import LayoutDashboard from '../../components/layout-dashboard'
import { Row, Col, Table, Form, FormGroup, Label, Input, Button } from 'reactstrap'

const fetcher = (url) => fetch(url).then((res) => res.json())

const ReportPage = () => {
  const [reports, setReports] = useState(null)
  const [sources, setResources] = useState(null)
  const { data, error } = useSwr('/api/reports', fetcher)
  if (error) return <div>Failed to load reports</div>
  if (!data) return <div>Loading...</div>
  if (!reports) {
    const { data: source } = data || {}
    if (source) {
      setReports(source)
      setResources(source)
    }
  }
  const handleOnSelect = (value) => {
    const filtered = sources.filter(item => item.dateNumber === parseInt(value))
    if (filtered.length > 0) {
      setReports(filtered)
    } else {
      setReports(sources)
    }
  }
  return (
    <>
      <LayoutDashboard title='Laporan '>
        <Row className='mt-5 mb-2'>
          <Col>
            <h3>Laporan Produksi Tahun {moment().format('YYYY')}</h3>
          </Col>
        </Row>
        <Row>
          <Col md='7' />
          <Col md='3'>
            <Form>
              <FormGroup>
                <Label for="selectDate">Pilih Tanggal</Label>
                <Input type="select" name="select" id="selectDate" onChange={(e) => handleOnSelect(e.target.value)}>
                  <option value={0}>Semua</option>
                  <option value={20}>20/Okt/2020</option>
                  <option value={21}>21/Okt/2020</option>
                  <option value={22}>22/Okt/2020</option>
                </Input>
              </FormGroup>
            </Form>
          </Col>
          <Col md='2' className='pt-4 mt-1 text-right'>
            <Button color='primary' onClick={() => window.print()}>
              Cetak Laporan
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table className='table-bordered' striped>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Tanggal</th>
                  <th>Wilayah</th>
                  <th>Jumlah Produksi</th>
                </tr>
              </thead>
              <tbody >
                {reports && reports.map((value, key) => {
                  return (
                    <tr key={key}>
                      <td>{value.id}</td>
                      <td>{value.date}</td>
                      <td>{value.area}</td>
                      <td>{value.amount}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </LayoutDashboard>
    </>
  )
}

export default ReportPage
