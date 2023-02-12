import {lazy} from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // just for suspense fallback check
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));