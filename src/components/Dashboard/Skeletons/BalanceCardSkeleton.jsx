export const BalanceCardSkeleton = () => {
  return (
    <div className="w-full bg-green-400/20 mt-5 rounded-xl px-4 sm:px-6 py-8 animate-pulse">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
        
        {/* Logo skeleton */}
        <div className="hidden 2xl:block w-12 h-12 bg-gray-200 rounded" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">

          {/* Balance */}
          <div className="flex flex-col">
            <div className="h-4 w-28 bg-gray-200 rounded mb-3" />
            <div className="h-6 w-36 bg-gray-200 rounded" />
          </div>

          {/* Income */}
          <div className="flex flex-col">
            <div className="h-4 w-20 bg-gray-200 rounded mb-3" />
            <div className="h-6 w-32 bg-gray-200 rounded" />
          </div>

          {/* Expense */}
          <div className="flex flex-col">
            <div className="h-4 w-24 bg-gray-200 rounded mb-3" />
            <div className="h-6 w-32 bg-gray-200 rounded" />
          </div>

        </div>
      </div>
    </div>
  );
};