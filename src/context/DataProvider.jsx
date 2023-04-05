import { useState, createContext } from "react";

export const DataContext = createContext();
function DataProvider({ children }) {
  const [User, setUser] = useState(null);

  return (
    <DataContext.Provider
      value={{
        User,
        setUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
