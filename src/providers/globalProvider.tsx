import { PropsWithChildren, useEffect, useState } from "react";
import { GlobalContext, Post } from "./globalContext";
import { MenuItem } from "./globalContext";
import axios from "axios";

export function GlobalProvider({ children }: PropsWithChildren) {
  const menu: MenuItem[] = [
    {
      name: "Post",
      childrens: {
        1: "Post Header",
        2: "Post Layout",
        3: "Share Button",
        4: "Gallery Post",
        5: "Video Post",
      },
    },
    {
      name: "Demos",
      childrens: {
        1: "Demo Template A",
        2: "Demo Template B",
        3: "Demo Template C",
        4: "Demo Template D",
        5: "Demo Template E",
      },
    },
    {
      name: "Features",
      childrens: {
        1: "Advanced Search",
        2: "User Profiles",
        3: "Infinite Scroll",
        4: "Custom Widgets",
        5: "Notifications",
      },
    },
    {
      name: "Categories",
      childrens: {
        1: "Technology",
        2: "Lifestyle",
        3: "Fashion",
        4: "Health & Fitness",
        5: "Travel",
      },
    },
    {
      name: "Shop",
      childrens: {
        1: "Electronics",
        2: "Clothing",
        3: "Home Goods",
        4: "Toys",
        5: "Books",
      },
    },
    {
      name: "Buy Now",
      childrens: {
        1: "Special Offer 1",
        2: "Special Offer 2",
        3: "Special Offer 3",
        4: "Flash Sale 1",
        5: "Flash Sale 2",
      },
    },
  ];

  useEffect(() => {
    async function getData() {
      const resp = await axios.get(
        "https://cloud.codesupply.co/endpoint/react/data.json"
      );
      setPost(resp.data);
    }
    getData();
  }, []);

  const [Menu, setMenu] = useState(menu);
  const [Post, setPost] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [IsSearchResults, setIsSearchResults] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        Menu,
        setMenu,
        Post,
        setPost,
        isModalOpen,
        setIsModalOpen,
        IsSearchResults,
        setIsSearchResults,
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
