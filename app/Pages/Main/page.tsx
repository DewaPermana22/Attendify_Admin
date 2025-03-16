'use client'

import React, { useEffect } from 'react'
import SideBar from '../../components/ui/SideBar'
import Navbar from '../../components/ui/Navbar'
import { useSelector } from 'react-redux'
import { RootState } from '../../libs/store'
import { MenuRegions } from '../../constants/RegionMenu'
import BreadCrumbsComponent from '../../components/Atoms/BreadCrumbs'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const activeMenu = useSelector((state: RootState) => state.sidebar.activeMenu);
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const customPage = useSelector((state: RootState) => state.sidebar.customMenu);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>loading......</div>
  }
  const { category, index } = activeMenu;
  const activeRegion = MenuRegions[category as keyof typeof MenuRegions] ?? [];

  let mainContent = null;
  if (customPage) {
    const renderCustomPage = customPage;
    mainContent = React.createElement(customPage);
  } else {
    const ActivePage = activeRegion[index ?? 0]?.component || (() => <div>Pilih menu</div>);
    mainContent = React.createElement(ActivePage);
  }

  return (
    <section className="bg-background dark:bg-darkBackground flex h-screen">
      <div className="fixed h-full z-10">
        <SideBar />
      </div>
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-[355px]' : 'ml-16'}`}>
        <div className="shadow-md dark:shadow-lg dark:border-b-gray-900 border-b-white border-b-2 bg-white dark:bg-darkBackground p-5">
          <Navbar />
        </div>
        <div className="p-6">
          <BreadCrumbsComponent />
          {mainContent}
        </div>
      </div>
    </section>
  );
}

export default Page;