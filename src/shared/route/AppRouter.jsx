import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home.jsx';
import Post from '@pages/Post/Post.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
