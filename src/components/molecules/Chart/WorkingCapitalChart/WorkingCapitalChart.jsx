import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import WorkingCapitalTooltip from "../../../atoms/Chart/ChartTooltip/ChartTooltip";
import styles from "./WorkingCapitalChart.module.scss";

export default function WorkingCapitalChart({ data, currency }) {
  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            stroke="#f1f5f9"
             
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            dy={10}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => (v === 0 ? "0K" : `${v / 1000}K`)}
            dx={-20}
          />

          <Tooltip
            content={<WorkingCapitalTooltip currency={currency} />}
            cursor={{
              stroke: "#f1f5f9",
              strokeWidth: 20,
              strokeOpacity: 1,
            }}
          />

          {/* INCOME */}
          <Area
            type="monotone"
            dataKey="income"
            stroke="#29A073"
            strokeWidth={2}
            fill="none"        
            dot={false}
            activeDot={{
              r: 6,
              fill: "#4f46e5",
              strokeWidth: 0,
            }}
          />

          {/* EXPENSE */}
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#C8EE44"
            strokeWidth={2}
            fill="none"       
            dot={false}
            activeDot={{
              r: 6,
              fill: "#4f46e5",
              strokeWidth: 0,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
