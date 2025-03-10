import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/libs/store';
import { setActiveMenu } from '@/app/libs/features/sidebar/sidebarSlice';
import { MenuRegions } from '@/app/constants/RegionMenu';
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from 'react-icons/md';

const BreadCrumbsComponent: React.FC = () => {
  const dispatch = useDispatch();
  const activeMenu = useSelector((state: RootState) => state.sidebar.activeMenu) || {};
  const customPage = useSelector((state: RootState) => state.sidebar.customMenu) || null;

  interface Breadcrumb {
    label: string;
    category?: string;
    index?: number;
    icon?: React.ReactNode;
    isCurrent?: boolean;
    isCustom?: boolean;
  }

  const generateBreadcrumbs = (): Breadcrumb[] => {
    const breadcrumbs: Breadcrumb[] = [
      {
        label: 'Home',
        category: 'Master',
        index: 0,
        icon: <FaHome size={20}/>,
      },
    ];

    if (activeMenu.category) {
      breadcrumbs.push({
        label: activeMenu.category,
        category: activeMenu.category,
      });

      const categoryMenus = MenuRegions[activeMenu.category as keyof typeof MenuRegions] ?? [];
      const currentPage = activeMenu.index !== undefined && activeMenu.index !== null ? categoryMenus[activeMenu.index] : undefined;

      if (currentPage?.title) {
        breadcrumbs.push({
          label: currentPage.title,
          category: activeMenu.category,
          index: activeMenu.index !== null ? activeMenu.index : undefined,
          isCurrent: true,
        });
      }
    }

    if (customPage) {
      const customPageName = (customPage as any).displayName || 'Custom Page';
      breadcrumbs.push({
        label: customPageName,
        isCustom: true,
        isCurrent: true,
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  const handleBreadcrumbClick = (item: Breadcrumb) => {
    if (item.isCustom) return;
    if (item.category && item.index !== undefined) {
      dispatch(setActiveMenu({ category: item.category, index: item.index }));
    }
  };

  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li key={item.label} className={isLast ? "" : "inline-flex items-center"}>
              {index === 0 ? (
                <button
                  onClick={() => handleBreadcrumbClick(item)}
                  style={{fontFamily: "'Poppins', sans-serif"}}
                  className="inline-flex gap-2 items-center text-sm font-medium text-text hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.icon}
                  {item.label}
                </button>
              ) : (
                <div className="flex items-center">
                  <MdKeyboardArrowRight size={20} />
                  {isLast ? (
                    <span
                      style={{fontFamily: "'Poppins', sans-serif"}}
                      className="ms-1 text-sm font-medium text-text md:ms-2 dark:text-gray-400">
                      {item.label}
                    </span>
                  ) : (
                    <button
                      onClick={() => handleBreadcrumbClick(item)}
                      style={{fontFamily: "'Poppins', sans-serif"}}
                      className="ms-1 text-sm font-medium text-text hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbsComponent;
