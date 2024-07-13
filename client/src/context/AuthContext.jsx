import { createContext, useContext, useState } from "react";

//create a new context
export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

//context provider component
export const AuthContextProvider = ({ children })  => {
  //Initialize state for authUser
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
