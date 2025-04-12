import React from 'react';
import { Badge } from '@mantine/core';
import { LineChart } from '@mantine/charts';
const data = [
    { date: 'Jan', temperature: -25 },
    { date: 'Feb', temperature: -10 },
    { date: 'Mar', temperature: 5 },
    { date: 'Apr', temperature: 15 },
    { date: 'May', temperature: 30 },
    { date: 'Jun', temperature: 15 },
    { date: 'Jul', temperature: 30 },
    { date: 'Aug', temperature: 40 },
    { date: 'Sep', temperature: 15 },
    { date: 'Oct', temperature: 20 },
    { date: 'Nov', temperature: 0 },
    { date: 'Dec', temperature: -10 },
  ];
export const FearIndex = () => {

    const [chartData, setChartData] = React.useState([]);
    const [classification, setClassification] = React.useState({
        100: 'Extreme Fear',
        75: 'Fear',
        50: 'Neutral',
        25: 'Greed',
        0: 'Extreme Greed',
    });
    const [stops, setStops] = React.useState([]);

    const fetchData = async () => {
        fetch("https://api.alternative.me/fng/?limit=90&format=json")
            .then(res => res.json())
            .then(data => {
                const indexData = data.data.map(indexData => ({ date: new Date(indexData.timestamp * 1000).toLocaleDateString('de-DE'), index: parseInt(indexData.value, 10) }));
                
                data.data.forEach(indexData => {
                    classification[indexData.value] = indexData.value_classification;
                });

                setChartData(indexData.reverse());
                setStops([
                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 0) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'cyan.5' },
                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 22) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'cyan.5' },

                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 22) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'lime.5' },
                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 44) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'lime.5' },

                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 44) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'yellow.5' },
                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 52) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'yellow.5' },
                    
                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 52) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'orange.6' },
                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 75) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'orange.6' },
                    
                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 75) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'red.6' },
                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 100) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'red.6' },
                    //{ offset: ((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100), color: 'red.6' },
                  ]);

                /*console.log(((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100))
                console.log(((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100))
                console.log([
                    { offset: ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100), color: 'blue.5' },
                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 20) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'cyan.5' },
                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 40) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'lime.5' },
                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 60) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'yellow.5' },
                    { offset: (((((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100) - ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)) / 100 * 80) + ((indexData.length ? Math.max(...indexData.map((d) => d.index)) : 100) - 100)), color: 'orange.6' },
                    { offset: ((indexData.length ? Math.min(...indexData.map((d) => d.index)) : 0) + 100), color: 'red.6' },
                  ])*/
            });
    }

    React.useEffect(() => {
        fetchData();

        setInterval(() => {
            fetchData();
        }, 10000);
    }, []);

    const fixedGradient = [
        //{ offset: 0, color: 'red.6' },
        { offset: 0, color: 'red.6' },
        { offset: 26, color: 'orange.6' },
        { offset: 47, color: 'yellow.5' },
        { offset: 55, color: 'lime.5' },
        { offset: 76, color: 'cyan.5' }
      ];

      function mapGradientToActualData(stops, actualMin, actualMax) {
        return stops.map(({ offset, color }) => {
          const actualOffset = actualMin + (offset / 100) * (100 - 0);
          const relativeOffset = ((actualOffset - actualMin) / (actualMax - actualMin)) * 100;
          return { offset: relativeOffset, color };
        });
      }
      

  return (
    <>
        {(chartData.length > 0) && 
            <Badge
                size="xl"
                style={{background: `var(--mantine-color-${fixedGradient
                  .sort((a, b) => a.offset - b.offset)
                  .find((item, index, arr) => chartData[chartData.length - 1].index >= item.offset && chartData[chartData.length - 1].index < (arr[index + 1]?.offset ?? Infinity)).color.replace('$', '').replace('.', '-')})`}}
                >
                {classification[chartData[chartData.length - 1].index]} - {chartData[chartData.length - 1].index}
            </Badge>
        }
        <LineChart
        h={600}
        data={chartData}
        series={[{ name: 'index', label: 'Fear & Greed Index' }]}
        dataKey="date"
        type="gradient"
        withLegend
        /*gradientStops={[
            { offset: 0, color: 'red.6' },
            { offset: 20, color: 'orange.6' },
            { offset: 40, color: 'yellow.5' },
            { offset: 60, color: 'lime.5' },
            { offset: 80, color: 'cyan.5' },
            { offset: 100, color: 'blue.5' },
        ]}*/
        gradientStops={[
            { offset: (((((chartData.length ? Math.min(...chartData.map((d) => d.index)) : 0) + 100) - ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)) / 100 * 0) + ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)), color: 'cyan.5' },
            { offset: (((((chartData.length ? Math.min(...chartData.map((d) => d.index)) : 0) + 100) - ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)) / 100 * 22) + ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)), color: 'cyan.5' },

            { offset: (((((chartData.length ? Math.min(...chartData.map((d) => d.index)) : 0) + 100) - ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)) / 100 * 22) + ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)), color: 'lime.5' },
            { offset: (((((chartData.length ? Math.min(...chartData.map((d) => d.index)) : 0) + 100) - ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)) / 100 * 44) + ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)), color: 'lime.5' },

            { offset: (((((chartData.length ? Math.min(...chartData.map((d) => d.index)) : 0) + 100) - ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)) / 100 * 44) + ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)), color: 'yellow.5' },
            { offset: (((((chartData.length ? Math.min(...chartData.map((d) => d.index)) : 0) + 100) - ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)) / 100 * 52) + ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)), color: 'yellow.5' },

            { offset: (((((chartData.length ? Math.min(...chartData.map((d) => d.index)) : 0) + 100) - ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)) / 100 * 52) + ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)), color: 'orange.6' },
            { offset: (((((chartData.length ? Math.min(...chartData.map((d) => d.index)) : 0) + 100) - ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)) / 100 * 75) + ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)), color: 'orange.6' },

            { offset: (((((chartData.length ? Math.min(...chartData.map((d) => d.index)) : 0) + 100) - ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)) / 100 * 75) + ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)), color: 'red.6' },
            { offset: (((((chartData.length ? Math.min(...chartData.map((d) => d.index)) : 0) + 100) - ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)) / 100 * 100) + ((chartData.length ? Math.max(...chartData.map((d) => d.index)) : 100) - 100)), color: 'red.6' },
            //{ offset: ((chartData.length ? Math.min(...chartData.map((d) => d.index)) : 0) + 100), color: 'red.6' },
        ]}
       /*gradientStops={stops}*/
        strokeWidth={5}
        curveType="natural"
        yAxisProps={{ 
          domain: [0, 100],
          ticks: [0, 26, 47, 55, 76, 100]
        }}
        xAxisProps={{
          tick: { angle: -45, textAnchor: 'end' }
        }}
        //valueFormatter={(value) => `${classification[value]}`}
        /*tooltipProps={{
            content: ({ payload, label }) =>
            payload?.length ? (
                <div style={{ marginTop: 30 }}>
                <div>{label}</div>
                <div>{classification[payload[0].value]} - {payload[0].value}</div>
                </div>
            ) : null,
        }}*/
        tooltipProps={{
            content: ({ payload, label }) => {
              if (!payload?.length) return null;
          
              const value = payload[0].value;
              const currentStop = fixedGradient
                //.slice()
                .sort((a, b) => a.offset - b.offset)
                //.reverse()
                //.find(stop => value >= stop.offset);
                .find((item, index, arr) => value >= item.offset && value < (arr[index + 1]?.offset ?? Infinity));
          
              return (
                <div
                  style={{
                    marginTop: 30,
                    backgroundColor: `var(--mantine-color-${currentStop.color.replace('$', '').replace('.', '-')})`,
                    padding: '0.5rem',
                  }}
                >
                  <div>{label}</div>
                  <div>{classification[value]} - {value}</div>
                </div>
              );
            },
          }}
        />
    </>
  );
}