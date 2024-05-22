import { useState } from "react";
import AllBlogPosts from "./pages/AllBlogPosts";
import NewBlogPosts from "./pages/NewBlogPosts";
import FavorateBlogPosts from "./pages/FavorateBlogPosts";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllBlogPosts />} />
        <Route path="/favorite" element={<FavorateBlogPosts />} />
        <Route path="/new" element={<NewBlogPosts />} />
      </Routes>
    </Layout>
  );
}

export default App;
