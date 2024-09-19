import { useState, useEffect, useCallback } from "react";
import { fetchPosts } from "../app/services/api";
import { Post } from "../constants/type";

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const loadPosts = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const newPosts = await fetchPosts(page);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      setError("Failed to load posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [page, loading]);

  useEffect(() => {
    loadPosts();
  }, []);

  return { posts, loading, error, loadMore: loadPosts };
};

export default usePosts;
