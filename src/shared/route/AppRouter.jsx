import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home/Home.jsx';
import PostIdPage from '@/pages/postId/PostIdPage';

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
