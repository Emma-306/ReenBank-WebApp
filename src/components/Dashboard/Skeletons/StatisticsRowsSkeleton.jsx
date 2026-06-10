export const StatisticsRowsSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Income Row */}
      <div className="flex items-center gap-4 sm:gap-8 w-full mb-6">
        {/* Logo */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full" />

        {/* Label */}
        <div className="w-16 sm:w-20 h-6 bg-gray-200 rounded" />

        {/* Progress Bar */}
        <div className="flex-1 h-3 sm:h-4 bg-gray-200 rounded overflow-hidden invisible md:visible" />

        {/* Amount */}
        <div className="w-28 sm:w-36 h-6 bg-gray-200 rounded shrink-0" />
      </div>

      {/* Expense Row */}
      <div className="flex items-center gap-4 sm:gap-8 w-full">
        {/* Logo */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full" />

        {/* Label */}
        <div className="w-16 sm:w-20 h-6 bg-gray-200 rounded" />

        {/* Progress Bar */}
        <div className="flex-1 h-3 sm:h-4 bg-gray-200 rounded overflow-hidden invisible md:visible" />

        {/* Amount */}
        <div className="w-28 sm:w-36 h-6 bg-gray-200 rounded shrink-0" />
      </div>
    </div>
  );
};