import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "app/providers/router/config/routerConfig";

const AppRouter = () => {
    return (
        <React.Suspense fallback={<div style={{padding: "20px"}}>Loading</div>} >
            <Routes>
                {routerConfig.map(({element, path}) => {
                    return <Route
                        key={path}
                        path={path}
                        element={
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        }
                    />
                })}
            </Routes>
        </React.Suspense>
    );
};

export default AppRouter;