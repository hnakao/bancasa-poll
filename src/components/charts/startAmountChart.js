import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import Title from "../Title";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function StartAmountChart({ surveys }) {
  const data = [
    { name: "< 3 000", value: 0 },
    { name: "3 001 - 4 000", value: 0 },
    { name: "> 5 000", value: 0 },
  ];

  for (const survey of surveys) {
    const amount = survey.startAmountToPay;
    if (amount > 0) {
      switch (amount) {
        case 3000:
          data[0].value++;
          break;

        case 3001:
          data[1].value++;
          break;

        case 5000:
          data[2].value++;
          break;

        default:
          break;
      }
    }
  }

  return (
    <React.Fragment>
      <Title>Balance - Entrada</Title>
      <ResponsiveContainer>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
