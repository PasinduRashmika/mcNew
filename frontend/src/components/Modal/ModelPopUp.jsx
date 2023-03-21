import Modal from "./Modal";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../utils/ContextProvider";

export const ModelPopUp = () => {
  const navigate = useNavigate();
  const { setShowModal } = useStateContext();
  return (
    <Modal>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          width: "250px",
          height: "150px",
          backgroundColor: "modal.secondary",
          borderRadius: "12px",
          border: "2px solid red",
          boxShadow: "2px 2px red",
        }}
      >
        <Typography variant="h5" sx={{ color: "text.main" }}>
          {" "}
          Are You Sure ?
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            "> button": {
              ":hover ": {
                transform: "scale(1.1)",
              },
            },
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setShowModal(false)}
          >
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
