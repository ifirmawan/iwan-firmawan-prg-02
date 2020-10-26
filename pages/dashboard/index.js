import useSwr from 'swr'
import moment from 'moment'
import { LineChart, PieChart } from '../../components/charts'
import { Row, Col, Card, CardBody, Table } from 'reactstrap'
import LayoutDashboard from '../../components/layout-dashboard'

const fetcher = (url) => fetch(url).then((res) => res.json())

const DashboardPage = ({ pid }) => {
  const { data, error } = useSwr('/api/example', fetcher)
  if (error) return <div>Failed to load reports</div>
  if (!data) return <div>Loading...</div>
  const { data: source } = data || {}
  console.log(pid)
  return (
    <>
      <LayoutDashboard title='Dashboard | PT Nindya Karya (Persero)'>

        <Row className='mt-5 mb-2'>
          <Col>
            <h3>Produksi Wilayah/Minggu Tahun {moment().format('YYYY')}</h3>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <Card style={{ borderBottom: '5px solid #10613c' }}>
              <CardBody>
                <LineChart />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md='9'>
            <Row className='mt-5 mb-2'>
              <Col>
                <h3>Rata-rata Produksi/Minggu Tahun {moment().format('YYYY')}</h3>
              </Col>
            </Row>
            <Table striped>
              <thead>
                <tr>
                  <th>Tanggal Produksi</th>
                  <th>Rata-rata Produksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20/Okt/2020</td>
                  <td>20.000</td>
                </tr>
                <tr>
                  <td>21/Okt/2020</td>
                  <td>90.000</td>
                </tr>
                <tr>
                  <td>22/Okt/2020</td>
                  <td>250.000</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md='3'>
            {source && (
              <>
                <PieChart source={source} />
              </>
            )}
          </Col>
        </Row>
      </LayoutDashboard>
    </>
  )
}

DashboardPage.getInitialProps = (req) => {
  const { id: pid } = req || {}
  return {
    props: {
      pid
    },
  }
}
export default DashboardPage
