import { XYPlot, LineSeries } from 'react-vis'
export const LineChart = ({ source }) => {
  console.log(source)
  return (
    <>
      {source && (
        <>
          <XYPlot height={300} width={300}>
            <LineSeries data={source} />
          </XYPlot>
        </>
      )}
    </>
  )
}
