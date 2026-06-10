export const AddAccountSkeleton = () => {
  return (
    <div
      className="
        w-full
        h-40 sm:h-48
        bg-gray-100
        rounded-xl
        p-5 sm:p-8
        flex flex-col justify-between
        animate-pulse
      "
    >
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <div className="w-7 h-7 bg-gray-200 rounded" />
        <div className="h-5 w-28 bg-gray-200 rounded" />
      </div>

      {/* Bottom Amount */}
      <div className="h-8 w-36 bg-gray-200 rounded" />
    </div>
  );
};