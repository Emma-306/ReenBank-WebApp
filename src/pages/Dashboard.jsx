import { assets, navItems } from "../assets/assets";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="w-full px-4 md:px-8 xl:px-32 py-4 md:py-6 xl:py-10">
        {/* MOBILE HEADER */}
        <div className="flex flex-col gap-4 md:hidden">
          <div className="flex items-center justify-between">
            <img src={assets.logo} alt="logo" className="h-8 w-auto" />

            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={assets.bell} className="h-5 w-5 object-contain" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>

              <img src={assets.profileImage} className="h-8 w-8 rounded-full" />
            </div>
          </div>

          <div>
            <span className="text-[#33B37E] text-sm font-medium block">
              Maureen Oguche
            </span>
            <span className="font-bold text-sm block">1234567890</span>
          </div>

          {/* MOBILE SEARCH */}
          <div className="relative w-full">
            <img
              src={assets.search}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />

            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 pl-10 pr-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* DESKTOP HEADER */}
        <div className="hidden md:flex items-center gap-6 xl:gap-20">
          <img
            src={assets.logo}
            alt="logo"
            className="h-10 xl:h-12 w-auto shrink-0"
          />

          <div className="flex flex-[2] items-center justify-between min-w-0">
            <h1 className="text-2xl xl:text-4xl font-semibold">Overview</h1>

            <div className="flex flex-col text-right">
              <span className="text-[#33B37E] font-medium">Maureen Oguche</span>
              <span className="font-bold text-xl xl:text-2xl scale-y-125">
                1234567890
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-[1] justify-end items-center gap-4 xl:gap-8">
            {/* SEARCH */}
            <div className="relative w-44 xl:w-[260px]">
              <img
                src={assets.search}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
              />

              <input
                type="text"
                placeholder="Search"
                className="w-full h-9 pl-10 pr-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* BELL */}
            <div className="relative">
              <img src={assets.bell} className="h-6 w-6 object-contain" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </div>

            {/* PROFILE */}
            <img src={assets.profileImage} className="h-10 xl:h-12 w-auto" />
          </div>
        </div>
      </header>

      <main className="flex flex-1 min-h-0 px-4 md:px-8 xl:px-32 gap-6 py-4 md:py-6 xl:py-16">
        <aside className="w-20 md:w-52 xl:w-60 flex flex-col justify-between pb-4">
          <div className="flex flex-col gap-12">
            {/* OVERVIEW */}
            <NavLink to="/dashboard" end>
              {({ isActive }) => {
                const active = isActive;

                return (
                  <div
                    className={`flex items-center gap-8 rounded font-semibold transition ${
                      active ? "text-[#33B37E]" : "text-black/50"
                    }`}
                  >
                    <img
                      src={active ? navItems.overviewActive : navItems.overview}
                      className="w-5 h-5"
                      alt="overview"
                    />
                    <span className="hidden md:block">Overview</span>
                  </div>
                );
              }}
            </NavLink>

            {/* ACCOUNTS */}
            <NavLink to="/dashboard/accounts">
              {({ isActive }) => {
                const active = isActive;

                return (
                  <div
                    className={`flex items-center gap-8  rounded font-semibold transition ${
                      active ? "text-[#33B37E]" : "text-black/50"
                    }`}
                  >
                    <img
                      src={active ? navItems.accountsActive : navItems.accounts}
                      className="w-5 h-5"
                      alt="accounts"
                    />
                    <span className="hidden md:block">Accounts</span>
                  </div>
                );
              }}
            </NavLink>

            {/* TRANSACTIONS */}
            <NavLink to="/dashboard/transactions">
              {({ isActive }) => {
                const active = isActive;

                return (
                  <div
                    className={`flex items-center gap-8 rounded font-semibold transition ${
                      active ? "text-[#33B37E]" : "text-black/50"
                    }`}
                  >
                    <img
                      src={
                        active
                          ? navItems.transactionsActive
                          : navItems.transactions
                      }
                      className="w-5 h-5"
                      alt="transactions"
                    />
                    <span className="hidden md:block">Transactions</span>
                  </div>
                );
              }}
            </NavLink>

            {/* PROFILE */}
            <NavLink to="/dashboard/profile">
              {({ isActive }) => {
                const active = isActive;

                return (
                  <div
                    className={`flex items-center gap-8 rounded font-semibold transition ${
                      active ? "text-[#33B37E]" : "text-black/50"
                    }`}
                  >
                    <img
                      src={active ? navItems.profileActive : navItems.profile}
                      className="w-5 h-5"
                      alt="profile"
                    />
                    <span className="hidden md:block">Profile</span>
                  </div>
                );
              }}
            </NavLink>
          </div>

          {/* LOGOUT */}
          <button className="py-2 text-black/50 flex flex-row items-center justify-start gap-8 font-semibold cursor-pointer">
              <img src={assets.arrowLeft} alt="logout" className="w-4 h-4 inline-block" />
              logout
          </button>
        </aside>

        <section className="flex-1 overflow-y-auto min-h-0 p-6">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
