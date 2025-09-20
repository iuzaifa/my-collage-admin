// src/components/Layout/menuItems.js
import { LayoutDashboard, GraduationCap, Users, BookOpen, CalendarDays, FileText, ClipboardList, DollarSign, Library, 
  Trophy, Bus, Building2, UserCog, Briefcase, Clock, FileSpreadsheet, Megaphone, Bell, CalendarCheck, BarChart3, Shield, 
  Layers, Settings, HelpCircle, LifeBuoy, FileQuestion, Mail, FileWarning, UserCircle,
} from "lucide-react";



const menuItems = [
  {
    title: "Main",
    items: [
      {
        id: "dashboard",
        icon: LayoutDashboard,
        label: "Dashboard",
        active: true,
        submenu: [
          { id: "allDashboard", label: "All Dashboard", path: "/dashboard" },
        ],
      },
    ],
  },

  {
    title: "Peoples",
    items: [
      {
        id: "student",
        icon: Users,
        label: "Student",
        submenu: [ // pages/people/teacher/AllTeacher
          { id: "allStudents", label: "All Students", path: "/students/all" },
          { id: "studentList", label: "Student List", path: "/students/list" },
          { id: "studentDetail", label: "Student Detail", path: "/pages/people/student" },
          { id: "studentPromotion", label: "Student Promotion", path: "/pages/people/student" },
        ],
      },
      {
        id: "teacher",
        icon: Users,
        label: "Teacher",
        submenu: [
          { id: "allTeacher", label: "All Teacher", path: "/pages/people/teacher/AllTeacher" },
          { id: "teacherList", label: "Teacher List", path: "/pages/people/teacher" },
          { id: "teacherDetail", label: "Teacher Details", path: "/pages/people/teacher" },
          { id: "routine", label: "Routine", path: "/pages/people/teacher" },
        ],
      },
    ],
  },

  {
    title: "Academic",
    items: [
      {
        id: "courses",
        icon: BookOpen,
        label: "Courses",
        submenu: [
          { id: "allCourses", label: "All Courses", path: "/pages/academic/courses" },
          { id: "courseDetail", label: "Course Details", path: "/pages/academic/courses" },
        ],
      },
      {
        id: "exams",
        icon: GraduationCap,
        label: "Examinations",
        submenu: [
          { id: "examList", label: "Exam List", path: "/pages/academic/exams" },
          { id: "examSchedule", label: "Exam Schedule", path: "/pages/academic/exams" },
        ],
      },
    ],
  },

  {
    title: "Management",
    items: [
      {
        id: "transport",
        icon: Bus,
        label: "Transport",
        submenu: [
          { id: "allVehicles", label: "All Vehicles", path: "/pages/management/transport" },
        ],
      },
      {
        id: "library",
        icon: Library,
        label: "Library",
        submenu: [
          { id: "books", label: "Books", path: "/pages/management/library/books" },
          { id: "issuedBooks", label: "Issued Books", path: "/pages/management/library/issued" },
        ],
      },
    ],
  },

  {
    title: "HRM",
    items: [
      {
        id: "employees",
        icon: UserCog,
        label: "Employees",
        submenu: [
          { id: "allEmployees", label: "All Employees", path: "/pages/hrm/employees" },
          { id: "employeeAttendance", label: "Attendance", path: "/pages/hrm/attendance" },
        ],
      },
    ],
  },

  {
    title: "Finance & Accounts",
    items: [
      {
        id: "accounts",
        icon: DollarSign,
        label: "Accounts",
        submenu: [
          { id: "income", label: "Income", path: "/pages/finance/income" },
          { id: "expenses", label: "Expenses", path: "/pages/finance/expenses" },
          { id: "transactions", label: "Transactions", path: "/pages/finance/transactions" },
        ],
      },
    ],
  },

  {
    title: "Reports",
    items: [
      {
        id: "reports",
        icon: FileText,
        label: "Reports",
        submenu: [
          { id: "studentReport", label: "Student Report", path: "/pages/reports/student" },
          { id: "teacherReport", label: "Teacher Report", path: "/pages/reports/teacher" },
        ],
      },
    ],
  },

  {
    title: "User Management",
    items: [
      {
        id: "users",
        icon: UserCircle,
        label: "Users",
        submenu: [
          { id: "allUsers", label: "All Users", path: "/pages/user-management/users" },
        ],
      },
    ],
  },

  {
    title: "Membership",
    items: [
      {
        id: "membership",
        icon: Layers,
        label: "Membership",
        submenu: [
          { id: "plans", label: "Plans", path: "/pages/membership/plans" },
        ],
      },
    ],
  },

  {
    title: "Content",
    items: [
      {
        id: "content",
        icon: FileSpreadsheet,
        label: "Content",
        submenu: [
          { id: "allContent", label: "All Content", path: "/pages/content/all" },
        ],
      },
    ],
  },

  {
    title: "Support",
    items: [
      {
        id: "support",
        icon: LifeBuoy,
        label: "Support",
        submenu: [
          { id: "faq", label: "FAQ", path: "/pages/support/faq" },
          { id: "contact", label: "Contact", path: "/pages/support/contact" },
        ],
      },
    ],
  },

  {
    title: "Profile & Authentication",
    items: [
      {
        id: "profile",
        icon: UserCog,
        label: "Profile",
        submenu: [
          { id: "myProfile", label: "My Profile", path: "/pages/auth/profile" },
          { id: "changePassword", label: "Change Password", path: "/pages/auth/change-password" },
        ],
      },
    ],
  },

  {
    title: "Error Pages",
    items: [
      {
        id: "errors",
        icon: FileWarning,
        label: "Error Pages",
        submenu: [
          { id: "404", label: "404 Page", path: "/pages/errors/404" },
          { id: "500", label: "500 Page", path: "/pages/errors/500" },
        ],
      },
    ],
  },

  {
    title: "Settings",
    items: [
      {
        id: "settings",
        icon: Settings,
        label: "Settings",
        submenu: [
          { id: "general", label: "General Settings", path: "/pages/settings/general" },
          { id: "security", label: "Security Settings", path: "/pages/settings/security" },
        ],
      },
    ],
  },
];

export default menuItems;
