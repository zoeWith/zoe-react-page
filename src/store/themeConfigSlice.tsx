import { createSlice } from '@reduxjs/toolkit';
import themeConfig from '../theme.config';

const defaultState = {
    mainLayout: 'app',
    layout: 'full',
    sidebar: false,
    pageTitle: '',
};

const initialState = {
    layout: localStorage.getItem('layout') || themeConfig.layout,
    sidebar: localStorage.getItem('sidebar') || defaultState.sidebar,
};

const themeConfigSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        toggleLayout(state, { payload }) {
            payload = payload || state.layout; // full, boxed-layout
            localStorage.setItem('layout', payload);
            state.layout = payload;
        },
        toggleSidebar(state) {
            state.sidebar = !state.sidebar;
        },
        setPageTitle(state, { payload }) {
            document.title = `${payload}`;
        },
    },
});

export const { toggleLayout, toggleSidebar, setPageTitle } = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
