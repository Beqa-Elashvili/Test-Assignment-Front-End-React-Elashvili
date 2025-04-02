import Header from "./(components)/Header.tsx/Header";
import Menu from "./(components)/Menu/Menu";
import SideBar from "./(components)/sideBar/SideBar";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="MainWrapper">
      <Header />
      <SideBar />
      <div className="StickyMenu">
        <Menu />
      </div>
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default MainWrapper;
