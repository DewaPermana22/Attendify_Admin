'use client'

import React from 'react'
import SideBar from '../components/ui/SideBar'
import Navbar from '../components/ui/Navbar'
import { useSelector } from 'react-redux'
import { RootState } from '../libs/store'
import { MenuRegions } from '../constants/RegionMenu'

const Page = () => {
  const activeMenu = useSelector((state: RootState) => state.sidebar.activeMenu);
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen); // Ambil status sidebar (open/minimize)
  
  const { category, index } = activeMenu;
  const activeRegion = MenuRegions[category as keyof typeof MenuRegions] ?? [];

  const ActiveComponent = activeRegion[index ?? 0 ]?.component || (() => <div>Pilih menu</div>);

  return (
    <section className="bg-white dark:bg-darkBackground flex h-screen">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'} fixed h-full`}>
        <SideBar />
      </div>

      {/* Konten */}
      <div className={`transition-all duration-300 flex-1 ml-${isSidebarOpen ? '64' : '16'}`}>
        {/* Navbar */}
        <div className="shadow-sm bg-white dark:bg-darkBackground p-5">
          <Navbar />
        </div>
        {/* Konten Aktif */}
        <div className="p-5">
          <ActiveComponent />
        </div>
      </div>
    </section>
  );
}

export default Page;
