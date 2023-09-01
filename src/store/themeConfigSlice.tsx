import { createSlice } from '@reduxjs/toolkit';
import themeConfig from '../theme.config';

const defaultState = {
    isDarkMode: false,
    mainLayout: 'app',
    theme: 'light',
    layout: 'full',
    animation: '',
    navbar: 'navbar-sticky',
    sidebar: false,
    pageTitle: '',
    semidark: false,
};

const initialState = {
    theme: localStorage.getItem('theme') || themeConfig.theme,
    layout: localStorage.getItem('layout') || themeConfig.layout,
    animation: localStorage.getItem('animation') || themeConfig.animation,
    navbar: localStorage.getItem('navbar') || themeConfig.navbar,
    isDarkMode: false,
    sidebar: localStorage.getItem('sidebar') || defaultState.sidebar,
};

const themeConfigSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        toggleTheme(state, { payload }) {
            payload = payload || state.theme; // light | dark | system
            localStorage.setItem('theme', payload);
            state.theme = payload;
            if (payload === 'light') {
                state.isDarkMode = false;
            } else if (payload === 'dark') {
                state.isDarkMode = true;
            } else if (payload === 'system') {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    state.isDarkMode = true;
                } else {
                    state.isDarkMode = false;
                }
            }

            if (state.isDarkMode) {
                document.querySelector('body')?.classList.add('dark');
            } else {
                document.querySelector('body')?.classList.remove('dark');
            }
        },
        toggleLayout(state, { payload }) {
            payload = payload || state.layout; // full, boxed-layout
            localStorage.setItem('layout', payload);
            state.layout = payload;
        },
        toggleAnimation(state, { payload }) {
            payload = payload || state.animation; // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
            payload = payload?.trim();
            localStorage.setItem('animation', payload);
            state.animation = payload;
        },
        toggleNavbar(state, { payload }) {
            payload = payload || state.navbar; // navbar-sticky, navbar-floating, navbar-static
            localStorage.setItem('navbar', payload);
            state.navbar = payload;
        },
        toggleSidebar(state) {
            state.sidebar = !state.sidebar;
        },
        setPageTitle(state, { payload }) {
            document.title = `${payload} | VRISTO - Multipurpose Tailwind Dashboard Template`;
        },
    },
});

export const { toggleTheme, toggleLayout, toggleAnimation, toggleNavbar, toggleSidebar, setPageTitle } = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
