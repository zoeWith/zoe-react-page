import { lazy } from 'react';
import Todolist from '../pages/Tasks/Todolist';

const Index = lazy(() => import('../pages/Index'));
const Profile = lazy(() => import('../pages/Users/Profile'));

const routes = [
    {
        path: '/',
        element: <Profile />,
    },
    {
        path: '/dashboard',
        element: <Index />,
        layout: 'blank', //TODO 삭제
    },
    {
        path: '/tasks/todolist',
        element: <Todolist />,
    },
];

export { routes };
