import React from "react";

/**
 * Breadcrumb - reusable component
 * Props:
 *  - title: string or ReactNode (main page title)
 *  - items: array of { label: string, path?: string, active?: boolean }
 *  - actions: array of JSX elements (optional action buttons)
 *  - className: optional extra Tailwind/Custom classes
 */
const Breadcrumb = ({ title, items = [], actions = [], className = "" }) => {
  return (
    <div
      className={`d-flex flex align-middle justify-between p-4 border rounded-md ${className}`}
    >
      {/* Left: Title + Breadcrumb */}
      <div>
        {title && <h3 className="text-lg font-semibold text-slate-800">{title}</h3>}

        <ul className="flex text-sm gap-6 text-slate-400 mt-1">
          {items.map((item, idx) => (
            <li
              key={idx}
              className={item.active ? "text-slate-600 font-medium" : ""}
            >
              {item.path ? (
                <a href={item.path} className="hover:text-slate-800">
                  {item.label}
                </a>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex gap-2">
        {actions.map((action, idx) => (
          <React.Fragment key={idx}>{action}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
