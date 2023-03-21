import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Box } from "@mui/material";
//targeting the div in the modal
const modalRoot = document.querySelector("#modal");

//children is the passed jsx syntax
const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    //refer to the same div every time modal shows
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    //when the component mount to the dom same div attached
    modalRoot.appendChild(elRef.current);

    //to unmount the component
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  //creating portal with the same div
  return createPortal(
    <Box
      sx={{
        backgroundColor: "modal.main",
        position: "fixed",
        left: "0",
        right: "0",
        bottom: "0",
        top: "0",
        zIndex: "10",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ":empty": {
          display: "none",
        },
      }}
    >
      {children}
    </Box>,
    elRef.current
  );
};

export default Modal;
