import { useState } from "react";
import { createContext } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedinUser")),
  );
  // console.log("registered useers", registeredUsers);
  // console.log("loggedinuser useers", loggedInUser);

  const [usersData, setUsersData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
        usersData,
        setUsersData,
        productsData,
        setProductsData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
