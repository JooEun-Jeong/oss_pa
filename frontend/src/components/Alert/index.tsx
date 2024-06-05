import React, { useState } from "react";

import { Box, Button, Modal } from "@mui/material";
import { BlueButton, ModalWrapper } from "./styled";

interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AlertModal: React.FC<AlertProps> = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };
  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <ModalWrapper>
          {/* <BlueButton disabled>사진 업로드하기</BlueButton> */}
          배경 변경하기
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ width: "50%", marginTop: "5px" }}
          />
        </ModalWrapper>
      </Modal>
    </>
  );
};
