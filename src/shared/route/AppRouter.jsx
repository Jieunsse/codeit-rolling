import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home.jsx';
<<<<<<< HEAD
import Post from '@pages/Post/Post.jsx';
=======
import ListPage from '@pages/list/ListPage.jsx';
import PostIdPage from '@pages/postId/PostIdPage.jsx';
>>>>>>> dev

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/post" element={<Post />} />
=======
        <Route path="/list" element={<ListPage />} />
        <Route path="/post/:recipientId" element={<PostIdPage />} />
>>>>>>> dev
      </Routes>
    </BrowserRouter>
  );
}
