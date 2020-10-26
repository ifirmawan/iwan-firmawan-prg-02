import { Container } from 'reactstrap'
import Layout from './layout'
import NindyaNavbar from './nindya-navbar'

const LayoutDashboard = ({ title, children }) => {
  return (
    <Layout title={title}>
      <NindyaNavbar />
      <Container>{children}</Container>
    </Layout>
  )
}
export default LayoutDashboard
