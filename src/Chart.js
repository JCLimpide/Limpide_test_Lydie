import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  export default function Chart({ data }) {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="close" fill="#8884d8" name="Close" />
          <Bar dataKey="offexchtradevolumeeex" fill="#82ca9d" name="Off Exchange" />
          <Bar dataKey="onexchtradevolumeeex" fill="#ffc658" name="On Exchange" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  