import { assets } from "../assets/assets";

export const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">

      {/* HEADER */}
      <header className="w-full px-4 md:px-8 xl:px-32 py-6 xl:py-12">

        <div className="flex items-center gap-4 xl:gap-28">

          {/* LOGO */}
          <img
            src={assets.logo}
            alt="logo"
            className="h-8 md:h-12 w-auto shrink-0"
          />

          {/* MIDDLE */}
          <div className="flex-[2] min-w-0 flex items-center justify-between">

            {/* HIDE OVERVIEW ON SMALL SCREENS */}
            <h1 className="hidden md:block text-lg md:text-2xl xl:text-4xl font-semibold whitespace-nowrap">
              Overview
            </h1>

            {/* ALWAYS VISIBLE USER INFO */}
            <div className="flex flex-col md:ml-auto">
              <span className="text-[#33B37E] text-sm md:text-base font-medium whitespace-nowrap">
                Maureen Oguche
              </span>

              <span className="font-bold text-sm md:text-xl xl:text-2xl scale-y-125 whitespace-nowrap">
                1234567890
              </span>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex-[1] min-w-0 flex items-center justify-end gap-3 md:gap-4 xl:gap-8">

            {/* SEARCH */}
            <div className="relative w-20 sm:w-32 md:w-44 xl:w-[260px]">
              <img
                src={assets.search}
                alt="search"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5"
              />

              <input
                type="text"
                placeholder="Search"
                className="w-full h-8 pl-10 pr-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* BELL */}
            <div className="relative shrink-0">
              <img
                src={assets.bell}
                alt="bell"
                className="h-5 w-5 object-contain"
              />
              <div className="absolute w-2 h-2 bg-red-500 rounded-full top-0 right-0" />
            </div>

            {/* PROFILE */}
            <img
              src={assets.profileImage}
              alt="Profile"
              className="h-10 md:h-12 w-auto shrink-0"
            />

          </div>

        </div>
      </header>

      {/* BODY */}
      <main className="flex flex-1 min-h-0 px-4 md:px-8 xl:px-32 gap-6">

        {/* SIDEBAR */}
        <div className="w-16 md:w-20 xl:w-60 bg-red-500 flex flex-col justify-between p-4">

          <div className="flex flex-col gap-6 text-white">
            <p className="hover:bg-red-600 p-2 rounded cursor-pointer">Dashboard</p>
            <p className="hover:bg-red-600 p-2 rounded cursor-pointer">Transactions</p>
            <p className="hover:bg-red-600 p-2 rounded cursor-pointer">Settings</p>
          </div>

          <button className="w-full py-2 bg-black/30 text-white rounded hover:bg-black/50">
            Logout
          </button>

        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-6 overflow-y-auto min-h-0">
          Main Content
        </div>

      </main>

    </div>
  );
};