import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));

const routes = [
    {
        path: '/',
        element: <Index />,
        layout: 'blank', //TODO 삭제
    },
];

export { routes };
