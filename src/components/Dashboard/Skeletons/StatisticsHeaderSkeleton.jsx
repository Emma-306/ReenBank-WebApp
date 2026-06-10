export const StatisticsHeaderSkeleton = () => {
  return (
    <div className="w-full mt-12 flex justify-between items-center mb-4 animate-pulse">
      {/* Statistics title */}
      <div className="h-7 w-28 bg-gray-200 rounded-md" />

      {/* Dropdown button */}
      <div className="flex items-center bg-gray-200 rounded-lg px-3 py-3">
        <div className="h-3 w-16 bg-gray-300 rounded mr-3" />
        <div className="w-4 h-4 bg-gray-300 rounded" />
      </div>
    </div>
  );
};