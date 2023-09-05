import { lazy } from 'react';

const Index = lazy(() => import('../pages/Index'));
const Profile = lazy(() => import('../pages/Users/Profile'));

const routes = [
    {
        path: '/',
        element: <Profile />,
    },
    {
        path: '/',
        element: <Index />,
        layout: 'blank', //TODO 삭제
    },
];

export { routes };
