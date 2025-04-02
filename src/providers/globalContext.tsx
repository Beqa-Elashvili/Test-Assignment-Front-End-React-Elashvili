import { createContext } from "react";

export interface MenuItem {
  name: string;
  childrens: { [key: number]: string };
}
export interface Post {
  title: string;
  autor: string;
  date: string;
  img: string;
  img_2x: string;
  tags: string;
  text: string;
  views: string;
}

interface GlobalContextProps {
  Menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  Post: Post[];
  setPost: React.Dispatch<React.SetStateAction<Post[]>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  IsSearchResults: boolean;
  setIsSearchResults: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  Menu: [],
  setMenu: () => {},
  Post: [],
  setPost: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
  IsSearchResults: false,
  setIsSearchResults: () => {},
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
});
