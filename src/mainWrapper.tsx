import Header from "./(components)/Header.tsx/Header";
import Menu from "./(components)/Menu/Menu";
import SideBar from "./(components)/sideBar/SideBar";
import { useEffect, useState } from "react";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const threshold = 200;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop && currentScrollTop > threshold) {
        setMenuVisible(false);
      } else if (currentScrollTop < lastScrollTop) {
        setMenuVisible(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <div className="MainWrapper">
      <Header />
      <SideBar />
      <div className="StickyMenu" style={{ top: menuVisible ? "0" : "-100px" }}>
        <Menu />
      </div>
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default MainWrapper;
