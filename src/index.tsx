import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const appEl = document.getElementById('app') as HTMLDivElement;
const root = ReactDOM.createRoot(appEl);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
