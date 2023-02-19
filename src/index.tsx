import {render} from 'react-dom';
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import './shared/config/i18n/i18n';
import {PageError} from 'widgets/PageError';
import {ErrorBoundary} from 'react-error-boundary';
import React from 'react';


render(
    <BrowserRouter>
        <ErrorBoundary FallbackComponent={PageError} >
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
);