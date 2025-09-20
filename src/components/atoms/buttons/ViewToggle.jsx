import React from "react";

/**
 * ViewToggle - toggle buttons like list/grid
 * Props:
 *  - options: array of { icon: ReactNode, active: boolean, onClick: func }
 *  - className: optional extra Tailwind classes
 */
const ViewToggle = ({ options = [], className = "" }) => (
  <div className={`flex border rounded overflow-hidden ${className}`}>
    {options.map((opt, idx) => (
      <button
        key={idx}
        onClick={opt.onClick}
        className={`px-3 py-2 ${opt.active ? "bg-indigo-600 text-white" : "hover:bg-gray-100"}`}
      >
        {opt.icon}
      </button>
    ))}
  </div>
);

export default ViewToggle;
