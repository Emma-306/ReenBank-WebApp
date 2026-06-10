export const ProfileLeftSkeleton = () => {
  return (
    <div className="flex-1 xl:flex-[3] flex justify-center items-center">
      <div className="w-full max-w-[500px] bg-white rounded-3xl shadow-sm px-10 py-8 flex flex-col items-center animate-pulse">
        
        {/* Avatar */}
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-gray-200" />

          {/* Edit button skeleton */}
          <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-gray-200 shadow-md" />
        </div>

        {/* Name */}
        <div className="mt-5 h-7 w-48 bg-gray-200 rounded" />

        {/* Badge */}
        <div className="mt-3 h-6 w-24 bg-gray-200 rounded-md" />

        {/* Fields */}
        <div className="w-full mt-8 space-y-6">
          
          {/* Email */}
          <div>
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-6 w-full bg-gray-200 rounded mt-3" />
            <div className="h-px bg-gray-100 mt-5" />
          </div>

          {/* Phone */}
          <div>
            <div className="h-4 w-28 bg-gray-200 rounded" />
            <div className="h-6 w-2/3 bg-gray-200 rounded mt-3" />
            <div className="h-px bg-gray-100 mt-5" />
          </div>

          {/* Gender */}
          <div>
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-6 w-1/3 bg-gray-200 rounded mt-3" />
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 w-full h-12 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
};