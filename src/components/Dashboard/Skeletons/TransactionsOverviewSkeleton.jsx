export const TransactionsOverviewSkeleton = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col min-h-0 max-w-[500px] animate-pulse">
      
      {/* Header */}
      <div className="pl-3 flex items-center justify-between mb-2">
        <div className="h-8 w-36 bg-gray-200 rounded" />
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
      </div>

      {/* Transaction Rows */}
      <div className="flex-1">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="pl-3 py-4 flex items-center justify-between border-b border-black/10"
          >
            {/* Name (visible only on 2xl like your real UI) */}
            <div className="hidden 2xl:flex items-center gap-4">
              <div className="w-32 h-4 bg-gray-200 rounded" />
            </div>

            {/* Date */}
            <div className="h-4 w-28 bg-gray-200 rounded" />

            {/* Amount */}
            <div className="h-5 w-20 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};