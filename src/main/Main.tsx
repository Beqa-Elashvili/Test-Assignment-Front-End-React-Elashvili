import { Post } from "../providers/globalContext";
import { useGlobalProvider } from "../providers";
import PostModal from "../components/postModal";
import { useState, useEffect, useRef } from "react";

function Main() {
  const { Post, isModalOpen, setIsModalOpen, IsSearchResults, isSidebarOpen } =
    useGlobalProvider();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  const handlePost = (post: Post) => {
    setIsModalOpen(true);
    setSelectedPost(post);
  };

  return (
    <div>
      <div
        className={`${
          isModalOpen || IsSearchResults || isSidebarOpen ? "blured-background" : ""
        }`}
      >
        <div className="mainWrapper">
          {Post?.map((post: Post, idx: number) => (
            <div
              key={idx}
              onClick={() => handlePost(post)}
              className="postItem"
            >
              <img
                className="postImg"
                src={post.img}
                srcSet={post.img_2x}
                alt=""
              />
              <h1 className="postH1">{post.title}</h1>
              <p className="postP">Lifestyle</p>
              <div className="postInfo">
                <p>{post.date}</p>
                <p>{post.views} views</p>
              </div>
              <p className="postText">{post.text.slice(0, 40)}...</p>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="modalCenter">
          <div ref={modalRef}>
            <PostModal
              onClose={() => setIsModalOpen(false)}
              post={selectedPost}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
