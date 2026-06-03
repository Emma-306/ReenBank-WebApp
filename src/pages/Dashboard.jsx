import { assets, navItems } from "../assets/assets";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const Dashboard = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const getPageTitle = () => {
    const path = location.pathname;

    if (path.includes("accounts")) return "Accounts";
    if (path.includes("transactions")) return "Transactions";
    if (path.includes("profile")) return "Profile";

    return "Overview";
  };
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <div className="h-screen flex flex-col">
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
      <header className="w-full px-4 md:px-8 xl:px-24 py-4 md:py-6 xl:py-10">
        {/* MOBILE HEADER */}
        <div className="flex flex-col gap-4 md:hidden">
          <div className="flex items-center justify-between">
            {/* LEFT: hamburger + logo */}
            <div className="flex items-center gap-5">
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex flex-col gap-1 cursor-pointer"
              >
                <span className="w-5 h-0.5 bg-black"></span>
                <span className="w-5 h-0.5 bg-black"></span>
                <span className="w-5 h-0.5 bg-black"></span>
              </button>

              <img src={assets.logo} alt="logo" className="h-8 w-auto" />
            </div>

            {/* RIGHT: notifications + profile */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={assets.bell} className="h-5 w-5 object-contain" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>

              <img
                src={assets.profileImage}
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>
          </div>

          {/* USER INFO */}
          <div className="flex items-center justify-between w-full">
             <h1 className="text-2xl xl:text-4xl font-semibold">
              {getPageTitle()}
            </h1>
            <div>
            <span className="text-[#33B37E] text-sm font-medium block">
              Maureen Oguche
            </span>
            <span className="font-bold text-sm block">1234567890</span>
          </div>
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
        <div className="hidden md:flex items-center gap-6 xl:gap-20 w-full">
          <img
            src={assets.logo}
            alt="logo"
            className="h-10 xl:h-12 w-auto shrink-0"
          />

          <div className="flex flex-[60] items-center justify-between min-w-0">
            <h1 className="text-2xl xl:text-4xl font-semibold">
              {getPageTitle()}
            </h1>

            <div className="flex flex-col text-right">
              <span className="text-[#33B37E] font-medium">Maureen Oguche</span>
              <span className="font-bold text-xl xl:text-2xl scale-y-125">
                1234567890
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-[40] justify-end items-center gap-3 xl:gap-8 pr-5">
            {/* SEARCH */}
            <div className="relative w-full">
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

      <main className="flex flex-1 min-h-0 px-4 md:px-8 xl:px-24 gap-6 py-4 md:py-6 xl:py-10">
        <aside
          className={`
    fixed md:static top-0 left-0 z-50

    w-64 md:w-52 xl:w-60
    h-screen md:h-auto

    bg-white

    flex flex-col justify-between

    pt-40 md:pt-3 xl:pt-4  pl-8 md:pl-3 xl:pl-4

    pb-4

    transition-transform duration-300

    md:translate-x-0

    ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
        >
          <div className="flex flex-col gap-12">
            {/* OVERVIEW */}
            <NavLink to="/dashboard" end onClick={closeSidebar}>
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
                    <span className="block">Overview</span>
                  </div>
                );
              }}
            </NavLink>

            {/* ACCOUNTS */}
            <NavLink to="/dashboard/accounts" onClick={closeSidebar}>
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
                    <span className="block">Accounts</span>
                  </div>
                );
              }}
            </NavLink>

            {/* TRANSACTIONS */}
            <NavLink to="/dashboard/transactions" onClick={closeSidebar}>
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
                    <span className="block">Transactions</span>
                  </div>
                );
              }}
            </NavLink>

            {/* PROFILE */}
            <NavLink to="/dashboard/profile" onClick={closeSidebar}>
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
                    <span className="block">Profile</span>
                  </div>
                );
              }}
            </NavLink>
          </div>

          {/* LOGOUT */}
          <button className="py-2 text-black/50 flex-row items-center justify-start gap-3 md:gap-8 font-semibold cursor-pointer inline-flex max-sm:text-sm">
            <img
              src={assets.arrowLeft}
              alt="logout"
              className="w-4 h-4 inline-block"
            />
            logout
          </button>
        </aside>

        <section className="flex-1 overflow-y-auto min-h-0">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
