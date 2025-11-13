import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home.jsx';
import ListPage from '@pages/list/ListPage.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
