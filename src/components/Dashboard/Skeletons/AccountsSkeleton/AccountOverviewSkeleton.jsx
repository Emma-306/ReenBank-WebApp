export const AccountOverviewSkeleton = () => {
  return (
    <div
      className="
        relative
        w-full
        min-w-0
        sm:min-w-52
        h-40 sm:h-44 md:h-48
        rounded-xl
        bg-green-400/20
        p-4 sm:p-6 md:p-8
        flex flex-col justify-between
        animate-pulse
      "
    >
      {/* Active Indicator */}
      <div className="absolute top-0 left-0 bottom-0 w-2 sm:w-2.5 bg-gray-300 rounded-l-xl" />

      {/* Top Section */}
      <div className="flex justify-between items-center gap-2">
        <div className="h-4 w-24 bg-gray-200 rounded" />
        <div className="w-5 h-5 bg-gray-200 rounded" />
      </div>

      {/* Balance */}
      <div>
        <div className="h-7 w-36 bg-gray-200 rounded" />
      </div>

      {/* Buttons */}
      <div className="flex gap-2 sm:gap-3 mt-2">
        <div className="flex-1 h-10 bg-gray-200 rounded-lg" />
        <div className="flex-1 h-10 bg-gray-200 rounded-lg" />
      </div>
    </div>
  );
};