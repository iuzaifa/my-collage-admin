import React from "react";

/**
 * ActionButton - reusable button for breadcrumb actions
 * Props:
 *  - label: string
 *  - onClick: function
 *  - type: "primary" | "secondary" | "default"
 *  - className: optional extra Tailwind classes
 */
const ActionButton = ({ label, onClick, type = "default", className = "" }) => {
  const baseClasses = "p-2 text-sm font-medium rounded-sm";
  const typeClasses =
    type === "primary"
      ? "bg-blue-600 text-white"
      : type === "secondary"
      ? "bg-slate-200 text-slate-600"
      : "text-slate-600";

  return (
    <button onClick={onClick} className={`${baseClasses} ${typeClasses} ${className}`}>
      {label}
    </button>
  );
};

export default ActionButton;
