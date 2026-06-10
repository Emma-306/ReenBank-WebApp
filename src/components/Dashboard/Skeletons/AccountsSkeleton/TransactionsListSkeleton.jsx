export const TransactionsListSkeleton = () => {
  return (
    <div className="space-y-2 min-w-[850px] sm:min-w-0 animate-pulse">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`grid grid-cols-[60px_180px_150px_180px_120px_150px]
            xl:grid-cols-[60px_1.5fr_1fr_1.5fr_1fr_160px]
            items-center gap-2 xl:gap-4 py-2
            ${
              index !== 3
                ? "border-b border-gray-200"
                : ""
            }`}
        >
          {/* Icon */}
          <div className="w-10 h-10 rounded-full bg-gray-200" />

          {/* Name */}
          <div className="h-4 w-28 bg-gray-200 rounded" />

          {/* Method */}
          <div className="h-4 w-24 bg-gray-200 rounded" />

          {/* Date */}
          <div className="h-4 w-32 bg-gray-200 rounded" />

          {/* Amount */}
          <div className="h-4 w-20 bg-gray-200 rounded" />

          {/* Status */}
          <div className="h-9 w-full bg-gray-200 rounded-md" />
        </div>
      ))}
    </div>
  );
};