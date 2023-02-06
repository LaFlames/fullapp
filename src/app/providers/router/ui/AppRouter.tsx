import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "app/providers/router/config/routerConfig";

const AppRouter = () => {
    return (
        <React.Suspense fallback={<div>Loading</div>}>
            <Routes>
                {routerConfig.map(({element, path}) => {
                    return <Route key={path} path={path} element={element}/>
                })}
            </Routes>
        </React.Suspense>
    );
};

export default AppRouter;