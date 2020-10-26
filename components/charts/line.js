import moment from 'moment'
import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries,
  LabelSeries
} from 'react-vis'

export const LineChart = () => {

  return (
    <FlexibleWidthXYPlot height={300} margin={{ left: 100, right: 100 }}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis
        title="Tanggal Produksi"
        orientation="bottom"
        tickFormat={function tickFormat(d) {
          moment.locale('id')
          return moment(d).format("DD/MMM")
        }}
        tickLabelAngle={0}
        tickValues={[new Date('10/19/2020').getTime(), new Date('10/20/2020').getTime(), new Date('10/21/2020').getTime(), new Date('10/22/2020').getTime()]}
      />
      <YAxis title="Jumlah Produksi" tickValues={[0, 100000, 150000, 200000, 300000]} />
      <LabelSeries
        animation
        data={[
          {
            x: new Date('10/20/2020').getTime(),
            y: 100000,
            label: ' Wilayah I',
            yOffset: -5,
            xOffset: -65
          },
          {
            x: new Date('10/21/2020').getTime(),
            y: 150000,
            label: ' Wilayah II',
            yOffset: -5
          },
          {
            x: new Date('10/22/2020').getTime(),
            y: 200000,
            label: ' Wilayah III',
            yOffset: -5,
            xOffset: -15
          },
          {
            x: new Date('10/21/2020').getTime(),
            y: 300000,
            label: ' Wilayah IV',
            yOffset: 0,
            xOffset: -20
          },
          {
            x: new Date('10/22/2020').getTime(),
            y: 300000,
            label: ' Wilayah V',
            yOffset: 0,
            xOffset: -20
          }
        ]}
      />
      <LineMarkSeries
        style={{ strokeWidth: '2px' }}
        strokeStyle="solid"
        data={[
          { x: new Date('10/19/2020'), y: 0 },
          { x: new Date('10/20/2020'), y: 100000 },
          { x: new Date('10/21/2020'), y: 0 },
          { x: new Date('10/22/2020'), y: null },

        ]}
      />

      <LineMarkSeries
        style={{ strokeWidth: '2px' }}
        strokeStyle="solid"
        data={[
          { x: new Date('10/19/2020'), y: 0 },
          { x: new Date('10/20/2020'), y: 0 },
          { x: new Date('10/21/2020'), y: 150000 },
          { x: new Date('10/22/2020'), y: null },

        ]}
      />

      <LineMarkSeries
        style={{ strokeWidth: '2px' }}
        strokeStyle="solid"
        data={[
          { x: new Date('10/19/2020'), y: 0 },
          { x: new Date('10/20/2020'), y: 0 },
          { x: new Date('10/21/2020'), y: 0 },
          { x: new Date('10/22/2020'), y: 200000 },

        ]}
      />

      <LineMarkSeries
        style={{ strokeWidth: '2px' }}
        strokeStyle="solid"
        data={[
          { x: new Date('10/19/2020'), y: 0 },
          { x: new Date('10/20/2020'), y: 0 },
          { x: new Date('10/21/2020'), y: 300000 },
          { x: new Date('10/22/2020'), y: 0 },

        ]}
      />
      <LineMarkSeries
        style={{ strokeWidth: '2px' }}
        strokeStyle="solid"
        data={[
          { x: new Date('10/19/2020'), y: 0 },
          { x: new Date('10/20/2020'), y: 0 },
          { x: new Date('10/21/2020'), y: 0 },
          { x: new Date('10/22/2020'), y: 300000 },

        ]}
      />
    </FlexibleWidthXYPlot>
  )
}
