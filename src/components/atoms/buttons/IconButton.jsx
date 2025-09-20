import React from "react";
import clsx from "clsx";

const IconButton = ({
  icon: Icon, // component OR element
  size = "md",
  variant = "default", // default, slate, blue, red
  color = "text-gray-600",
  bg = "bg-transparent",
  padding = "p-1.5",
  rounded = "rounded-md",
  onClick,
  className,
  tooltip,
}) => {
  const sizeMap = {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const variants = {
    default: "hover:bg-gray-200 hover:text-gray-700 hover:border-gray-200",
    slate: "hover:bg-slate-200 hover:text-slate-700 hover:border-slate-200",
    blue: "hover:bg-blue-200 hover:text-blue-700 hover:border-blue-200",
    red: "hover:bg-red-200 hover:text-red-700 hover:border-red-200",
  };

  const iconSize =
    typeof size === "number"
      ? `h-[${size}px] w-[${size}px]`
      : sizeMap[size] || sizeMap.md;

  return (
    <button
      onClick={onClick}
      title={tooltip}
      className={clsx(
        "inline-flex items-center justify-center transition-all duration-200 border",
        color,
        bg,
        padding,
        rounded,
        variants[variant],
        className
      )}
    >
      {/* Support both <Icon /> and Icon */}
      {React.isValidElement(Icon) ? (
        React.cloneElement(Icon, {
          className: clsx(Icon.props.className, iconSize),
        })
      ) : typeof Icon === "function" ? (
        <Icon className={iconSize} />
      ) : null}
    </button>
  );
};

export default IconButton;
