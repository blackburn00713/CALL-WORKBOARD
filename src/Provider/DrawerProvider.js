import React, { createContext, useContext, useState } from 'react';

export const DrawerContext = createContext();

const DrawerProvider = ({children}) => {
  const [drawer, setDrawer] = useState(false);

  return ( 
    <DrawerContext.Provider value={[drawer, setDrawer]}>
      {children}
    </DrawerContext.Provider>
   );
}

export default DrawerProvider;

export const useDrawer = () => {
  return useContext(DrawerContext);
}