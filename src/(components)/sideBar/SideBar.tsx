import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { useGlobalProvider } from "../../providers";
import { MenuItem } from "../../providers/globalContext";
import { RiSidebarFoldFill } from "react-icons/ri";
import { useState } from "react";

function SideBar() {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalProvider();
  const { Menu } = useGlobalProvider();

  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleMenuClick = (index: number) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
    }
  };
  return (
    <div className={`sideBar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sideBar-Header">
        <h1>
          <img src="/images/Logotype.png" alt="logo" />
        </h1>
        <RiSidebarFoldFill onClick={() => setIsSidebarOpen(false)} size={24} />
      </div>
      <hr />
      <div className="SidebarMenu">
        {Menu.map((item: MenuItem, index: number) => (
          <div key={index}>
            <div className="menuItem" onClick={() => handleMenuClick(index)}>
              <h1 className="menuItemTitle">{item.name}</h1>
              <BiChevronDown />
            </div>
            {openMenuIndex === index && (
              <div className="menuChild">
                {Object.values(item.childrens).map((child, idx) => (
                  <div key={idx}>
                    <div className="child" key={idx}>
                      <p className="menuP">{child}</p>
                      <BiChevronRight />
                    </div>
                    {idx !== Object.values(item.childrens).length - 1 && <hr />}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
