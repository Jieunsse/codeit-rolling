import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/Home.jsx';
import DropdownPage from '@/pages/DropdownPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dropdown" element={<DropdownPage />} />
      </Routes>
    </BrowserRouter>
  );
}
