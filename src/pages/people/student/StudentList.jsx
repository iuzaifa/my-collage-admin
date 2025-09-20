import {
  ArrowUpAZ,
  Calendar,
  ChevronDown,
  Edit,
  Eye,
  Filter,
  LayoutGrid,
  List,
  Trash,
} from "lucide-react";
import React, { useState } from "react";
import Table from "../../../components/atoms/Table";
import IconButton from "../../../components/atoms/buttons/IconButton";
import Pagination from "../../../components/Pagination";

const columns = [
  { header: "Admission No", accessor: "admissionNo" },
  { header: "Roll No", accessor: "rollNo" },
  {
    header: "Name",
    accessor: "name",
    render: (value, row) => (
      <div className="flex items-center gap-2">
        <img
          src={row.avatar}
          alt={value}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-medium text-gray-600">{value}</span>
      </div>
    ),
  },
  { header: "Father Name", accessor: "fatherName" },
  { header: "Class", accessor: "className" },
  { header: "Section", accessor: "section" },
  { header: "Gender", accessor: "gender" },
  {
    header: "Status",
    accessor: "status",
    render: (value) => (
      <span
        className={`px-2 py-0 rounded-full bg-emerald-50 text-emerald-500 text-xs${
          value.toLocaleLowerCase() === "active" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {value}
      </span>
    ),
  },
  { header: "Date of Join", accessor: "dateOfJoin" },
  { header: "DOB", accessor: "dob" },
  {
    header: "Action",
    accessor: "action",
    render: (_, row) => (
      <div className="flex gap-2">
        <IconButton tooltip="View" icon={<Eye />} size="xs" variant="slate" />
        <IconButton tooltip="Edit" icon={<Edit />} size="xs" variant="blue" />
        <IconButton
          tooltip="Delete User"
          icon={<Trash />}
          size="xs"
          variant="red"
        />
      </div>
    ),
  },
];
const data = [
  {
    admissionNo: "A1001",
    rollNo: "21",
    name: "Abu Huzaifa",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fatherName: "Imran Khan",
    className: "10",
    section: "A",
    gender: "Male",
    status: "Active",
    dateOfJoin: "2023-04-15",
    dob: "2008-06-21",
  },
  {
    admissionNo: "A1002",
    rollNo: "22",
    name: "Ahamad Ali",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fatherName: "Arif Ali",
    className: "9",
    section: "B",
    gender: "Female",
    status: "Inactive",
    dateOfJoin: "2022-06-10",
    dob: "2009-09-12",
  },
  {
    admissionNo: "A1001",
    rollNo: "21",
    name: "Abu Huzaifa",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fatherName: "Imran Khan",
    className: "10",
    section: "A",
    gender: "Male",
    status: "Active",
    dateOfJoin: "2023-04-15",
    dob: "2008-06-21",
  },
  {
    admissionNo: "A1002",
    rollNo: "22",
    name: "Ahamad Ali",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fatherName: "Arif Ali",
    className: "9",
    section: "B",
    gender: "Female",
    status: "Inactive",
    dateOfJoin: "2022-06-10",
    dob: "2009-09-12",
  },
  {
    admissionNo: "A1001",
    rollNo: "21",
    name: "Abu Huzaifa",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fatherName: "Imran Khan",
    className: "10",
    section: "A",
    gender: "Male",
    status: "Active",
    dateOfJoin: "2023-04-15",
    dob: "2008-06-21",
  },
  {
    admissionNo: "A1002",
    rollNo: "22",
    name: "Ahamad Ali",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fatherName: "Arif Ali",
    className: "9",
    section: "B",
    gender: "Female",
    status: "Inactive",
    dateOfJoin: "2022-06-10",
    dob: "2009-09-12",
  },
  {
    admissionNo: "A1001",
    rollNo: "21",
    name: "Abu Huzaifa",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fatherName: "Imran Khan",
    className: "10",
    section: "A",
    gender: "Male",
    status: "Active",
    dateOfJoin: "2023-04-15",
    dob: "2008-06-21",
  },
  {
    admissionNo: "A1002",
    rollNo: "22",
    name: "Ahamad Ali",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fatherName: "Arif Ali",
    className: "9",
    section: "B",
    gender: "Female",
    status: "Inactive",
    dateOfJoin: "2022-06-10",
    dob: "2009-09-12",
  },
  {
    admissionNo: "A1001",
    rollNo: "21",
    name: "Abu Huzaifa",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fatherName: "Imran Khan",
    className: "10",
    section: "A",
    gender: "Male",
    status: "Active",
    dateOfJoin: "2023-04-15",
    dob: "2008-06-21",
  },
  {
    admissionNo: "A1002",
    rollNo: "22",
    name: "Ahamad Ali",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fatherName: "Arif Ali",
    className: "9",
    section: "B",
    gender: "Female",
    status: "Inactive",
    dateOfJoin: "2022-06-10",
    dob: "2009-09-12",
  },
  {
    admissionNo: "A1001",
    rollNo: "21",
    name: "Abu Huzaifa",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fatherName: "Imran Khan",
    className: "10",
    section: "A",
    gender: "Male",
    status: "Active",
    dateOfJoin: "2023-04-15",
    dob: "2008-06-21",
  },
  {
    admissionNo: "A1002",
    rollNo: "22",
    name: "Ahamad Ali",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fatherName: "Arif Ali",
    className: "9",
    section: "B",
    gender: "Female",
    status: "Inactive",
    dateOfJoin: "2022-06-10",
    dob: "2009-09-12",
  },
];

const StudentList = () => {
  // pagination
  const [page, setPage] = useState(1);

  return (
    <div className="space-y-6">

      <div className="bread-crunb d-flex flex align-middle justify-between p-4 border rounded-md">
        <div>
          <h3>Students List</h3>
          <ul className="d-flext flex text-sm  gap-6 text-slate-400">
            <li>Dashboard</li>
            <li>Students</li>
            <li className="Active text-slate-600">All Students</li>
          </ul>
        </div>
        <div className="gap-4">
          <button className="p-2 text-sm text-slate-600 font-medium rounded-sm">Reload</button>
          <button className="p-2 px-3 text-sm text-slate-600 bg-slate-200 font-medium rounded-sm">Print</button>
          <button className="p-2 text-sm text-slate-600 font-medium rounded-sm">Export</button>
          <button className="p-2 text-sm text-white bg-blue-600  font-medium rounded-sm">Add Student</button>
        </div>
      </div>

      <div className="bg-white p-0 rounded-md border overflow-hidden">
        <div className="p-4 bg-white flex justify-between items-center border-b overflow-x-auto text-nowrap gap-5">
          <h2 className="text-lg font-semibold text-slate-800">
            Students Grid
          </h2>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border rounded px-3 py-2 text-sm hover:bg-slate-200">
              <Calendar className="w-4 h-4 text-slate-600" />
              <span>09/14/2025 - 09/20/2025</span>
            </button>

            <button className="flex items-center gap-2 border rounded px-3 py-2 text-sm hover:bg-slate-200">
              <Filter className="w-4 h-4 text-slate-600" />
              <span>Filter</span>
              <ChevronDown className="w-4 h-4 text-slate-600" />
            </button>

            <div className="flex border rounded overflow-hidden p-1">
              <button className="p-2 hover:bg-gray-200 rounded-sm">
                <List className="w-3 h-3 text-slate-600" />
              </button>
              <button className="p-2 bg-indigo-600 text-white rounded-sm">
                <LayoutGrid className="w-3 h-3" />
              </button>
            </div>

            <button className="flex items-center gap-2 border rounded px-3 py-2 text-sm hover:bg-slate-200">
              <ArrowUpAZ className="w-4 h-4 text-slate-600" />
              <span>Sort by A–Z</span>
            </button>
          </div>
        </div>

        <div className="p-4 flex items-center justify-between gap-4 overflow-x-auto text-nowrap">
          {/* Rows per page */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Rows Per page</span>
            <select
              className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-slate-400"
              defaultValue="10"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
          </div>

          {/* Search box */}
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring focus:ring-slate-400"
          />
        </div>

        <Table columns={columns} data={data} />

        {/* pageinations  */}
        <div className="p-4">
          <Pagination
            currentPage={page}
            totalPages={5}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentList;
