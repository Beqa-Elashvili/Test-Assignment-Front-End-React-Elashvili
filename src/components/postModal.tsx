import { Post } from "../providers/globalContext";
import { IoClose } from "react-icons/io5";

type Props = {
  post: Post | null;
  onClose: () => void;
};

function PostModal({ post, onClose }: Props) {
  return (
    <>
      {post && (
        <div className="modalItem">
          <div className="postItem">
            <img
              className="postImg"
              src={post.img}
              srcSet={post.img_2x}
              alt="postImg"
            />
            <h1 className="postH1">{post.title}</h1>
            <p className="postP">Lifestyle</p>
            <div className="postInfo">
              <p className="infoT">{post.autor}</p>
              <p>{post.date}</p>
              <p>{post.views} views</p>
            </div>
            <p className="postText">{post.text}</p>
          </div>
          <IoClose onClick={onClose} size={24} className="closeModal" />
        </div>
      )}
    </>
  );
}
export default PostModal;
