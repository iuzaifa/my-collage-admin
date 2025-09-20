import React from "react";
import {Eye, Phone, Mail, EllipsisVertical } from "lucide-react";


const AllStudent = () => {
  const students = [
    {
      id: "AD9892434",
      name: "Janet Daniel",
      class: "III, A",
      rollNo: "35013",
      gender: "Female",
      joinedOn: "10 Jan 2015",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: "AD9892433",
      name: "Joann Michael",
      class: "IV, B",
      rollNo: "35012",
      gender: "Male",
      joinedOn: "19 Aug 2014",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: "AD9892432",
      name: "Kathleen Dison",
      class: "III, A",
      rollNo: "35011",
      gender: "Female",
      joinedOn: "5 Dec 2017",
      status: "InActive",
      image: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: "AD9892432",
      name: "Kathleen Dison",
      class: "III, A",
      rollNo: "35011",
      gender: "Female",
      joinedOn: "5 Dec 2017",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=47",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
        {students.map((std) => (
          <div
            key={std.id}
            className="bg-white rounded-md shadow border hover:shadow-md transition"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-3 py-3 border-b">
              <span className="text-indigo-600 font-medium text-xs cursor-pointer hover:underline">
                {std.id}
              </span>
             <div className="flex justify-between items-center gap-2">
                <span className={`flex items-center gap-1 text-xs font-semibold px-1 py-0.5 rounded-sm ${std.status.toLocaleLowerCase() === "active"  ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}>
                  <span className={`w-1 h-1  rounded-full ${std.status.toLocaleLowerCase() === "active"  ? "bg-green-500" : "bg-red-500"}`}></span>
                  {std.status}
                </span>
               <button className="w-8 h-8 flex items-center justify-center rounded-md 
                                bg-slate-50 hover:bg-slate-100 
                                text-slate-400 hover:text-slate-600 
                                transition">
                <EllipsisVertical className="w-4 h-4" />
              </button>
             </div>
            </div>

            {/* Profile */}
            <div className="flex items-center px-3 py-4 bg-slate-50">
              <img
                src={std.image}
                alt={std.name}
                className="w-14 h-14  rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold text-slate-800 text-sm">
                  {std.name}
                </h3>
                <p className="text-xs text-slate-500">{std.class}</p>
              </div>
            </div>

            {/* Info */}
            <div className="px-3 py-3">
              <div className="grid grid-cols-3 gap-0.5 text-sm">
                <div>
                  <p className="text-slate-400 text-xs font-semibold">Roll No</p>
                  <p className="font-semibold text-xs text-slate-700">{std.rollNo}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-semibold">Gender</p>
                  <p className="font-semibold text-xs text-slate-700">{std.gender}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-semibold">Joined On</p>
                  <p className="font-semibold text-xs text-slate-700">{std.joinedOn}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t px-3 py-3">
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <button className="text-xs uppercase font-semibold text-slate-600">View</button>
                  <button className="text-xs uppercase font-semibold text-slate-600">Edit</button>
                  <button className="text-xs uppercase font-semibold text-slate-600">phone</button>

                </div>
                <button className="bg-slate-100 text-slate-600 text-xs font-medium px-1.5 py-1 rounded-sm hover:bg-slate-200 border">
                  Add Fees
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AllStudent;
