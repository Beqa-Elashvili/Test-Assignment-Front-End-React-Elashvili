import { MenuItem } from "../../providers/globalContext";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { useGlobalProvider } from "../../providers";

function Menu() {
  const { Menu, isModalOpen, IsSearchResults, isSidebarOpen } =
    useGlobalProvider();
  return (
    <>
      <div
        className={`menu   ${
          isModalOpen || IsSearchResults || isSidebarOpen
            ? "blured-background"
            : ""
        }`}
      >
        {Menu.map((item: MenuItem, index: number) => (
          <div key={index}>
            <div className="menuItem">
              <h1 className="menuItemTitle">{item.name}</h1>
              <BiChevronDown />
            </div>
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
          </div>
        ))}
      </div>
      <hr />
    </>
  );
}

export default Menu;
