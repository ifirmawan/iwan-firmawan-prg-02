import { useState } from 'react'
import { LineChart, PieChart } from '../../components/charts'
const DashboardPage = () => {
  const [reports, setReports] = useState([])
  return (
    <>
      <h1>Dashboard</h1>
      <LineChart />
      <PieChart source={reports} />
    </>
  )
}
export default DashboardPage
