export const AccountsHeaderSkeleton = () => {
  return (
    <div className="flex justify-between items-center mt-10 animate-pulse">
      
      {/* Title skeleton */}
      <div className="h-6 sm:h-7 w-32 bg-gray-200 rounded-md" />

      {/* Button skeleton */}
      <div className="p-3 bg-gray-200 rounded-lg w-10 h-10" />
      
    </div>
  );
};