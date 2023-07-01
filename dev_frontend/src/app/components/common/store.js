"use client";

import { createContext, useContext, useState } from "react";

const globalContext = createContext({
  theme: false,
  navbar: false,
  showSidebar:false
});

export const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [navbarstate, setNavbarState] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <globalContext.Provider
      value={{ theme, setTheme, navbarstate, setNavbarState,showSidebar, setShowSidebar }}
    >
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(globalContext);
