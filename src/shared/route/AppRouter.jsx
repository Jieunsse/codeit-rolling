import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home.jsx';
import ListPage from '@pages/list/ListPage.jsx';
import PostPage from '@/pages/post/PostPage';
import PostIdPage from '@pages/postId/PostIdPage.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/:recipientId" element={<PostIdPage />} />
      </Routes>
    </BrowserRouter>
  );
}
