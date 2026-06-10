export const TransactionsHeaderSkeleton = () => {
  return (
    <div className="flex justify-between items-center mb-6 animate-pulse">
      <div className="h-8 w-36 bg-gray-200 rounded" />

      <div className="flex items-center gap-2">
        <div className="h-5 w-16 bg-gray-200 rounded" />
        <div className="w-4 h-4 bg-gray-200 rounded" />
      </div>
    </div>
  );
};