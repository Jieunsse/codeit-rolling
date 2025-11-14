import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/Home.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:recipientId" element={<PostIdPage />} />
      </Routes>
    </BrowserRouter>
  );
}
