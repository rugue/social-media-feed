import axios from "axios";
import { Post } from "../../constants/type";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async (
  page: number,
  limit: number = 10
): Promise<Post[]> => {
  const response = await axios.get(`${API_URL}?_page=${page}&_limit=${limit}`);
  return response.data.map((post: any) => ({
    id: post.id,
    username: `User ${post.userId}`,
    description: post.body,
    imageUrl: `https://picsum.photos/seed/${post.id}/400/300`,
  }));
};
