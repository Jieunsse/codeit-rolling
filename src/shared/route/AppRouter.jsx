import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home.jsx';
import ListPage from '@pages/list/ListPage.jsx';
import PostIdPage from '@pages/postId/PostIdPage.jsx';
import PostMessagePage from '@pages/postMessage/PostMessagePage.jsx';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post/:recipientId" element={<PostIdPage />} />
        <Route path="/post/:id/message" element={<PostMessagePage />} />
      </Routes>
    </BrowserRouter>
  );
}
