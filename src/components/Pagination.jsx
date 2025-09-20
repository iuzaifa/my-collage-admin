import clsx from "clsx";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-end gap-2 my-3 p-3">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={clsx(
          "px-3 py-1.5 text-sm border rounded",
          currentPage === 1
            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
            : "text-slate-600 hover:bg-slate-100"
        )}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={clsx(
            "px-3 py-1.5 text-sm border rounded",
            currentPage === page
              ? "bg-blue-500 text-white border-blue-500"
              : "text-slate-600 hover:bg-slate-100"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={clsx(
          "px-3 py-1.5 text-sm border rounded",
          currentPage === totalPages
            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
            : "text-slate-600 hover:bg-slate-100"
        )}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
