import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from './store';
import { toggleLayout } from './store/themeConfigSlice';
import store from './store';

function App({ children }: PropsWithChildren) {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleLayout(localStorage.getItem('layout') || themeConfig.layout));
    }, [dispatch, themeConfig.layout]);

    return (
        <div
            className={`${themeConfig.layout}
                vertical ltr main-section antialiased relative font-nunito text-sm font-normal`}
        >
            {children}
        </div>
    );
}

export default App;
