import { styled, Box, Button, Modal, Input } from "@mui/material";

export const ModalWrapper = styled(Box)(() => ({
  backgroundColor: "#FFF",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  border: "2px solid #000",
  borderRadius: 5,
  padding: "3%",
  p: 4,
  alignItems: "center",
  maxWidth: "28rem",
}));

export const BlueButton = styled(Button)(() => ({
  backgroundColor: "#9d9dff",
  color: "#FFF",
  margin: "5px",
}));
