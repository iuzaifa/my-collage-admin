import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Electronics", value: 4000 },
  { name: "Clothing", value: 3000 },
  { name: "Groceries", value: 2000 },
  { name: "Accessories", value: 2780 },
];

const COLORS = [
  "url(#bluePurpleGradient)", // Electronics
  "url(#slateGradient)",      // Clothing
  "url(#orangeGradient)",     // Groceries
  "url(#greenGradient)",      // Accessories
];

const SalesPieChart = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Sales Distribution</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Category-wise sales performance
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          {/* ✅ Gradient Definitions */}
          <defs>
            <linearGradient id="bluePurpleGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.9} /> {/* blue-500 */}
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.7} /> {/* purple-600 */}
            </linearGradient>

            <linearGradient id="slateGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#64748B" stopOpacity={0.9} /> {/* slate-500 */}
              <stop offset="95%" stopColor="#475569" stopOpacity={0.7} /> {/* slate-600 */}
            </linearGradient>

            <linearGradient id="orangeGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.9} /> {/* amber-500 */}
              <stop offset="95%" stopColor="#D97706" stopOpacity={0.7} /> {/* amber-600 */}
            </linearGradient>

            <linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.9} /> {/* emerald-500 */}
              <stop offset="95%" stopColor="#047857" stopOpacity={0.7} /> {/* emerald-700 */}
            </linearGradient>
          </defs>

          {/* ✅ Pie */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          {/* ✅ Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "none",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            }}
            formatter={(value) => [`$${value.toLocaleString()}`, "Sales"]}
          />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesPieChart;
