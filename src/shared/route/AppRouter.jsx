import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/Home.jsx';
import Card from '@/components/card/Card';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}
