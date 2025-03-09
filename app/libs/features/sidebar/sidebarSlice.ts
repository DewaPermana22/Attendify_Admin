import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  isOpen: boolean;
  activeMenu: { category: string; index: number | null };
}

const initialState: SidebarState = {
  isOpen: true,
  activeMenu: { category: '', index: null },
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
    },
  },
});

export const { toggleSidebar, setActiveMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
