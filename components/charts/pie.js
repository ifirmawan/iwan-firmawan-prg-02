import { RadialChart } from 'react-vis'

export const PieChart = ({ source }) => {
  return (
    <>
      {source && (
        <>
          <RadialChart
            data={source}
            width={300}
            height={300} />
        </>
      )}
    </>
  )
}
