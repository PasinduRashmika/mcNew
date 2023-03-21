import React, { useState, useContext, createContext } from "react";

//creating context
const StateContext = createContext();

//Context provider
//children return underling componnet below the context
export const ContextProvider = ({ children }) => {
  //states that going to use in the app
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [authUser, setAuthUser] = useState("doctor");
  const [showModal, setShowModal] = useState(false);

  const [showRightSidebar, setShowRightSidebar] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const toggleRightSidebar = () => {
    setShowRightSidebar((prev) => !prev);
  };

  return (
    /* values that you need to use in the app */
    <StateContext.Provider
      value={{
        showNotification,
        setShowNotification,
        showProfile,
        setShowProfile,
        authUser,
        setAuthUser,
        showModal,
        closeModal,
        openModal,
        showRightSidebar,
        toggleRightSidebar,
        setShowRightSidebar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//Context consumer {acctually customizing Provider and the useContext for own function}
export const useStateContext = () => useContext(StateContext);
