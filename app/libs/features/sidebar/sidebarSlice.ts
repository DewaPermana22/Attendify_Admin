import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  isOpen: boolean;
  activeMenu: { category: string; index: number | null };
  customMenu : React.ComponentType | null
}

const initialState: SidebarState = {
  isOpen: true,
  activeMenu: { category: '', index: null },
  customMenu : null
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
      state.customMenu = null
    },
    setCustomMenu : (state, action) => {
      state.customMenu = action.payload
    }
  },
});

export const { toggleSidebar, setActiveMenu, setCustomMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
