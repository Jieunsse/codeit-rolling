import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from '@shared/route/AppRouter.jsx';
import '@shared/styles/reset.css';
import '@shared/styles/color.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
