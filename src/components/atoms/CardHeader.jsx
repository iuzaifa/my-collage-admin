import React from "react";

const CardHeader = () => {
  return (
    <>
      <div className="p-4 bg-white flex justify-between items-center border-b overflow-x-auto text-nowrap gap-5">
        <h2 className="text-lg font-semibold text-slate-800">Students Grid</h2>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border rounded px-3 py-2 text-sm hover:bg-gray-50">
            <Calendar className="w-4 h-4 text-slate-600" />
            <span>09/14/2025 - 09/20/2025</span>
          </button>

          <button className="flex items-center gap-2 border rounded px-3 py-2 text-sm hover:bg-gray-50">
            <Filter className="w-4 h-4 text-slate-600" />
            <span>Filter</span>
          </button>

          <div className="flex border rounded overflow-hidden">
            <button className="px-3 py-2 hover:bg-gray-100">
              <List className="w-4 h-4 text-slate-600" />
            </button>
            <button className="px-3 py-2 bg-indigo-600 text-white">
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>

          <button className="flex items-center gap-2 border rounded px-3 py-2 text-sm hover:bg-gray-50">
            <ArrowDownUp className="w-4 h-4 text-slate-600" />
            <span>Sort by A–Z</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
