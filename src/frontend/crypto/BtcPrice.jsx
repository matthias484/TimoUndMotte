import React from "react";
import { Badge } from '@mantine/core';
import { LineChart } from '@mantine/charts';
export const data = [
    {
      date: 'Mar 22',
      Bitcoin: 2890,
      Oranges: 2338,
      Tomatoes: 2452,
    },
    {
      date: 'Mar 23',
      Bitcoin: 2756,
      Oranges: 2103,
      Tomatoes: 2402,
    },
    {
      date: 'Mar 24',
      Bitcoin: 3322,
      Oranges: 986,
      Tomatoes: 1821,
    },
    {
      date: 'Mar 25',
      Bitcoin: 3470,
      Oranges: 2108,
      Tomatoes: 2809,
    },
    {
      date: 'Mar 26',
      Bitcoin: 3129,
      Oranges: 1726,
      Tomatoes: 2290,
    },
  ];

export const BtcPrice = () => {

    const [chartData, setChartData] = React.useState([]);

    const fetchData = async () => {
        fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=30")
            .then(res => res.json())
            .then(data => {
                const prices = data.prices.map(p => ({ date: new Date(p[0]).toLocaleString('de-DE'), Bitcoin: parseFloat(p[1]).toFixed(2) }));
                setChartData(prices);
            });
    }

    React.useEffect(() => {
        fetchData();

        setInterval(() => {
            fetchData();
        }, 10000);
    }, []);

  return (
    <>
        {(chartData.length > 0) && 
            <Badge
                size="xl"
                style={{ background: 'var(--mantine-color-orange-6' }}
                >
                {chartData[chartData.length - 1].Bitcoin} €
            </Badge>
        }
        <LineChart
        h={400}
        data={chartData}
        dataKey="date"
        valueFormatter={(value) => `${value} €`}
        yAxisProps={{
            domain: ['dataMin', 'dataMax'],
          }}
          xAxisProps={{
            tick: { angle: -45, textAnchor: 'end' }
          }}
        /*yAxisProps={{
            tickFormatter: (value) => `${value}€`,
        }}
        tooltipProps={{
            labelFormatter: (label) => `${label}€`,
        }}*/
        withLegend
        
        series={[
            { name: 'Bitcoin', color: 'orange.6'  },
        ]}
        />
    </>
  );
}