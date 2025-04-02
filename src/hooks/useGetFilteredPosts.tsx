import { useState } from "react";
import { useGlobalProvider } from "../providers";
import { Post } from "../providers/globalContext";

function useGetFilteredPosts() {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [value, setValue] = useState<string>("");
  const { Post } = useGlobalProvider();
  function getFilteredPosts() {
    const filteredPosts = Post.filter(
      (post) =>
        post.title.toLowerCase().includes(value.toLowerCase()) ||
        post.text.toLowerCase().includes(value.toLowerCase())
    );
    if (value === "") {
      setFilteredPosts([]);
      return;
    }
    setFilteredPosts(filteredPosts);
    return filteredPosts;
  }
  return { getFilteredPosts, filteredPosts, value, setValue };
}

export default useGetFilteredPosts;
