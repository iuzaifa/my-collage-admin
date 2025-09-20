import React from 'react'

const TableSection = () => {
    const students = [
        {
            "studentId": "S101",
            "studentName": "Ayaan Khan",
            "fatherName": "Imran Khan",
            "class": "10",
            "division": "A",
            "status": "Active"
        },
        {
            "studentId": "S102",
            "studentName": "Sara Ali",
            "fatherName": "Mohammed Ali",
            "class": "9",
            "division": "C",
            "status": "Active"
        },
        {
            "studentId": "S103",
            "studentName": "Rohan Mehta",
            "fatherName": "Anand Mehta",
            "class": "8",
            "division": "B",
            "status": "Inactive"
        },
        {
            "studentId": "S104",
            "studentName": "Isha Sharma",
            "fatherName": "Vikram Sharma",
            "class": "7",
            "division": "A",
            "status": "Active"
        },
        {
            "studentId": "S105",
            "studentName": "Kabir Verma",
            "fatherName": "Anil Verma",
            "class": "6",
            "division": "B",
            "status": "Inactive"
        }
    ]


  return (
     <div className="space-y-6">
      {/* Recent Orders */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest customer orders
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>

        <div className='overflow-x-auto '>
           
           <table className='w-full'>
                    <thead className="bg-slate-100">
                        <tr>
                        <th className="text-left p-4 text-sm font-semibold text-slate-600">Student ID</th>
                        <th className="text-left p-4 text-sm font-semibold text-slate-600">Student Name</th>
                        <th className="text-left p-4 text-sm font-semibold text-slate-600">Father Name</th>
                        <th className="text-left p-4 text-sm font-semibold text-slate-600">Class</th>
                        <th className="text-left p-4 text-sm font-semibold text-slate-600">Division</th>
                        <th className="text-left p-4 text-sm font-semibold text-slate-600">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                        {students.map((student) => (
                        <tr key={student.studentId} className="hover:bg-slate-50 transition-colors">
                            <td className="p-4 text-sm text-slate-700">{student.studentId}</td>
                            <td className="p-4 text-sm text-slate-700">{student.studentName}</td>
                            <td className="p-4 text-sm text-slate-700">{student.fatherName}</td>
                            <td className="p-4 text-sm text-slate-700">{student.class}</td>
                            <td className="p-4 text-sm text-slate-700">{student.division}</td>
                            <td className={`p-4 text-sm font-medium ${student.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                            {student.status}
                            </td>
                        </tr>
                        ))}
                </tbody>
            </table>

        </div>
      </div>
    </div>
  )
}

export default TableSection