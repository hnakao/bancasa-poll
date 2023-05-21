import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import Title from "../Title";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

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

export default function HouseType({ surveys }) {
  const data = [
    { name: 'Propia', value: 0 },
    { name: 'Alquilada', value: 0 },
    { name: 'Familiar', value: 0 }
  ];

  for (const survey of surveys) {
    const { houseType } = survey;
    switch (houseType) {
      case 'own':
        data[0].value++;
        break;

      case 'rent':
        data[1].value++;
        break;

      case 'family':
        data[2].value++;
        break;

      default:
        break;
    }
  }

  return (
    <React.Fragment>
      <Title>Balance - Tipo de vivienda</Title>
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
