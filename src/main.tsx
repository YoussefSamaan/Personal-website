import { StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'
import {BrowserRouter, HashRouter} from 'react-router-dom';
import App from './App.tsx'
import './index.css'

const rootElement: HTMLElement = document.getElementById('root')!;

const root: Root = createRoot(rootElement);

root.render(
    <StrictMode>
        {/*<BrowserRouter basename={import.meta.env.BASE_URL}>*/}
        <HashRouter>
            <App />
        </HashRouter>
        {/*</BrowserRouter>*/}
    </StrictMode>
);
