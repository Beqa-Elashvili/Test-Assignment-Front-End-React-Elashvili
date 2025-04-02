import { useGlobalProvider } from "../../providers";
import { useEffect, useRef, useState } from "react";
import { Post } from "../../providers/globalContext";
import { RiSidebarUnfoldFill } from "react-icons/ri";
import useGetFilteredPosts from "../../hooks/useGetFilteredPosts";
function Header() {
  const {
    Post,
    isModalOpen,
    setIsSearchResults,
    IsSearchResults,
    setPost,
    setIsSidebarOpen,
    isSidebarOpen,
  } = useGlobalProvider();
  const modalRef = useRef<HTMLDivElement>(null);

  const { getFilteredPosts, filteredPosts, value, setValue } =
    useGetFilteredPosts();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getFilteredPosts();
    }, 500);
    return () => clearTimeout(timeOut);
  }, [value]);

  useEffect(() => {
    if (IsSearchResults) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [IsSearchResults]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsSearchResults(false);
      }
    };
    if (IsSearchResults) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [IsSearchResults]);

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      if (filteredPosts.length !== 0) {
        setIsSearchResults(false);
        setPost(filteredPosts);
      }
    }
  };

  return (
    <div className="searchContainer">
      <div
        className={`header ${
          IsSearchResults || isModalOpen || isSidebarOpen
            ? "blured-background"
            : ""
        }`}
      >
        <RiSidebarUnfoldFill
          onClick={() => setIsSidebarOpen(true)}
          size={24}
          className="side"
        />
        <img
          onClick={() => window.location.reload()}
          className="logo"
          src="/images/Logotype.png"
          alt="logo"
        />
        <div
          className="search-container"
          ref={modalRef}
          onClick={() => setIsSearchResults(true)}
        >
          <div className="search-item">
            <img className="search" src="images/B.png" alt="search icon" />
            <div className="hover-overlay"></div>
          </div>
        </div>
      </div>
      {IsSearchResults && (
        <div className="searchInput">
          <div ref={modalRef}>
            <input
              className="container-Input"
              value={value}
              placeholder="search posts"
              onChange={(e) => setValue(e.target.value)}
              type="text"
              onKeyDown={handleKeyPress}
            />
            <div className="insideResult">
              {filteredPosts?.map((post: Post, index: number) => (
                <div className="result" key={index}>
                  <p className="resultP">{post.title}</p>
                  {index !== filteredPosts.length - 1 && (
                    <hr className="resultHr" />
                  )}
                </div>
              ))}
              {filteredPosts.length === 0 && <p>write something</p>}
            </div>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
}

export default Header;
