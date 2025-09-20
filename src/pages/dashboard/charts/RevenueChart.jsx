import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, } from "recharts";


const RevenueChart = () => {

    const data = [
        { month: "January", revenue: 4567, expense: 2346 },
        { month: "February", revenue: 5120, expense: 2800 },
        { month: "March", revenue: 6000, expense: 3100 },
        { month: "April", revenue: 7200, expense: 4000 },
        { month: "May", revenue: 8000, expense: 4200 },
        { month: "June", revenue: 7500, expense: 3900 },
        { month: "July", revenue: 8200, expense: 4500 },
        { month: "August", revenue: 9000, expense: 4800 },
        { month: "September", revenue: 8700, expense: 4600 },
        { month: "October", revenue: 9500, expense: 5000 },
        { month: "November", revenue: 9800, expense: 5200 },
        { month: "December", revenue: 10200, expense: 5400 },
    ];


  return (
    <div className="bg-white/80  dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold  text-slate-800  dark:text-white">
            Revenue Chart
          </h3>
          <p className="text-sm  text-slate-500  dark:text-slate-400">
            Monthly revenue and expenses
          </p>
        </div>
        <div className="flex items-center space-x-4">

          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500  to-purple-600 rounded-full"></div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
                <span>Revenue</span>

            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-slate-500  to-slate-600 rounded-full"></div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
                <span>Expence</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{top:20, right : 30, left : 20, bottom : 5 }}>
                
                <CartesianGrid strokeDasharray="2 2" stroke="gray" opacity={0.2}/>

                
                <XAxis dataKey="month" stroke='#64748b' fontSize={12} tickLine={false} axisLine={false}/>
                <YAxis stroke='#64748b' fontSize={14} tickLine={false} axisLine={false} tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}/>

               
                <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                    }}
                    formatter={(value) => [`$${value.toLocaleString()}`, ""]}
                />


                {/* Apply gradients in bar*/}

                <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.9} /> {/* blue-500 */}
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.9} /> {/* purple-600 */}
                </linearGradient>

                <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#64748B" stopOpacity={0.9} /> {/* slate-500 */}
                    <stop offset="95%" stopColor="#475569" stopOpacity={0.9} /> {/* slate-600 */}
                </linearGradient>
                </defs>

                <Bar dataKey="revenue" fill="url(#revenueGradient)" radius={[3, 3, 0, 0]} />
                <Bar dataKey="expense" fill="url(#expenseGradient)" radius={[3, 3, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
