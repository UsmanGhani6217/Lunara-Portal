import React, { useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page F",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page F",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page F",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },

  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },

  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page F",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page F",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page F",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page F",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page F",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page F",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page F",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page A",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const SimpleBarChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width="98%" height={50}>
        <BarChart width={32} height={30} data={data}>
          <Bar dataKey="uv" onClick={handleClick} barSize={3} radius={[10, 10, 10, 10]}>
            {data.map((entry, index) => (
              <Cell cursor="pointer" fill={index === activeIndex ? "#82ca9d" : "#61D47A"} key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
