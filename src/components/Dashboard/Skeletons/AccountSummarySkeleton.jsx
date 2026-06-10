export const AccountSummarySkeleton = () => {
  return (
    <div className="bg-green-400/20 rounded-xl py-6 px-10 flex flex-col justify-center animate-pulse">
      
      {/* Top row (name + icon space) */}
      <div className="flex items-center justify-between w-full mb-4">
        <div className="h-4 w-24 bg-gray-200 rounded" />
        <div className="w-4 h-4 bg-gray-200 rounded" />
      </div>

      {/* Balance */}
      <div className="h-6 w-32 bg-gray-200 rounded" />
    </div>
  );
};