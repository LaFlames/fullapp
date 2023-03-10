import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {routerConfig} from 'shared/config/routeConfig/routerConfig';
import {PageLoader} from 'widgets/PageLoader/PageLoader';

const AppRouter = () => {
    return (
        <Routes>
            {routerConfig.map(({element, path}) => {
                return <Route
                    key={path}
                    path={path}
                    element={
                        <React.Suspense fallback={<PageLoader />} >
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        </React.Suspense>
                    }
                />;
            })}
        </Routes>

    );
};

export default AppRouter;