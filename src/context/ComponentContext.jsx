import React, { createContext, useState } from "react";

export const ComponentContext = createContext();

export const ComponentProvider = ({ children }) => {
  const [componentState, setComponentState] = useState(1);

  return (
    <ComponentContext.Provider value={{ componentState, setComponentState }}>
      {children}
    </ComponentContext.Provider>
  );
};
