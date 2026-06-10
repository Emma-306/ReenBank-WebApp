export const UpgradeCardSkeleton = () => {
  return (
    <div className="w-full h-44 rounded-2xl bg-gray-200 ml-2 flex justify-between flex-col px-6 py-4 animate-pulse">
      
      {/* Arrow Icon */}
      <div className="w-10 h-10 bg-gray-300 rounded-lg" />

      {/* Text Content */}
      <div className="flex flex-col">
        <div className="h-8 w-44 bg-gray-300 rounded mb-3" />
        <div className="h-4 w-56 bg-gray-300 rounded" />
      </div>
      
    </div>
  );
};