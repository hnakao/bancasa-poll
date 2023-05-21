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

export default function MonthAmountChart({ surveys }) {
  const data = [
    { name: "150 - 200", value: 0 },
    { name: "201 - 250", value: 0 },
    { name: "251 - 300", value: 0 },
  ];

  for (const survey of surveys) {
    const amount = survey.monthAmountToPay;
    if (amount > 0) {
      switch (amount) {
        case 150:
          data[0].value++;
          break;

        case 201:
          data[1].value++;
          break;

        case 251:
          data[2].value++;
          break;

        default:
          break;
      }
    }
  }

  return (
    <React.Fragment>
      <Title>Balance - Mensual</Title>
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
