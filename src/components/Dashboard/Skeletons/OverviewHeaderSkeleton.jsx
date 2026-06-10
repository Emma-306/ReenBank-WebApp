export const OverviewHeaderSkeleton = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-4 animate-pulse">
      {/* Title */}
      <div className="h-6 sm:h-7 w-56 bg-gray-200 rounded-md" />

      {/* Right side buttons */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Eye button skeleton */}
        <div className="p-2.5 bg-gray-200 rounded-lg w-10 h-10" />

        {/* Date picker skeleton */}
        <div className="hidden xl:flex items-center gap-2 bg-gray-200 rounded-lg px-3 py-2.5 w-52 h-10">
          <div className="w-4 h-4 bg-gray-300 rounded" />
          <div className="flex-1 h-4 bg-gray-300 rounded" />
          <div className="w-4 h-4 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
}
