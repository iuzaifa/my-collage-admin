import React, { useState } from "react";
import { ChevronDown, University } from "lucide-react";
import menuItems from "./menuItems";
import { Link } from "react-router-dom";


const Sidebar = ({ collapsed, onPageChange }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState("dashboard"); // default active dashboard

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    onPageChange(pageId);
  };

  const toggleExpanded = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-60"
      } transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col h-screen`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div
            className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm flex items-center justify-center shadow-lg"
            aria-label="Collage Logo"
          >
            <University className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                Collage
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto verflow-y-auto scrollbar-thin scrollbar-thumb-slate-400 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
        {menuItems.map((section) => (
          <div key={section.title}>
            {!collapsed && (
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">
                {section.title}
              </p>
            )}
            {section.items.map((item) => (
              <div key={item.id}>
                <button
                  className={`w-full flex items-center justify-between p-2 rounded-sm transition-all duration-200 ${
                    currentPage === item.id ||
                    currentPage.startsWith(item.id) ||
                    expandedItem === item.id
                      ? "bg-slate-100 text-blue-600 shadow-lg shadow-blue-50/25"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                  }`}
                  onClick={() => {
                    if (item.submenu) toggleExpanded(item.id);
                    else handlePageChange(item.id);
                  }}
                  aria-label={item.label} // accessibility
                >
                  <div className="flex items-center">
                    <item.icon className="w-5 h-5" />
                    {!collapsed && (
                      <span className="ml-2 font-medium flex items-center gap-2">
                        {item.label}
                        {item.badge && (
                          <span
                            className="py-1 px-2 text-xs bg-red-500 text-white rounded-full"
                            aria-label={`${item.badge} new`}
                          >
                            {item.badge}
                          </span>
                        )}
                        {item.count && (
                          <span
                            className="py-1 px-2 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full"
                            aria-label={`${item.count} items`}
                          >
                            {item.count}
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                  {!collapsed && item.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedItem === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Submenu */}
                {!collapsed && item.submenu && (
                  <div
                    className={`ml-8 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedItem === item.id
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.id}
                          to={subitem.path} // 👈 this makes it navigate
                          className={`w-full block text-left p-2 text-sm rounded-sm transition-all ${
                            currentPage === subitem.id
                              ? "dark:bg-slate-700 text-blue-600 dark:text-white"
                              : "text-slate-500 dark:text-slate-400 dark:hover:text-slate-200 hover:text-blue-600"
                          }`}
                          aria-label={subitem.label}
                          onClick={() => handlePageChange(subitem.id)} // still update active state
                        >
                          {subitem.label}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </nav>

      {/* User profile */}
      {!collapsed && (
        <div
          className="px-4 py-2 border-t border-slate-200/50 dark:border-slate-700/50"
          aria-label="User profile section"
        >
          <div className="flex items-center space-x-3 p-1 rounded-s">
            <img
              src="https://i.pravatar.cc/150?u=user7"
              alt="User avatar"
              className="w-10 h-10 rounded-full ring-2 ring-blue-500"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                Abu Huzaifa
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 truncate">
                Administrator
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
