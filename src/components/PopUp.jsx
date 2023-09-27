import React from "react";
import { Box, Image, Center, Tooltip } from "@chakra-ui/react";

const popupStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "50px",
  zIndex: 1000,
  color: "#202721",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(128, 124, 124, 0.60)",
  zIndex: 1000,
};

export const PopUp = ({
  children,
  show,
  onClose,
  borderStyle,
  borderRad,
  height,
  showClose,
}) => {
  if (!show) return null;

  return (
    <>
      <Box style={overlayStyle} />
      <Center
        style={{ ...popupStyle, border: borderStyle }}
        borderRadius={borderRad}
        h={height}
      >
        {showClose && (
          <Tooltip label="Click to cancel">
            <Image
              bg="#a62e36"
              onClick={onClose}
              src="/src/assets/Cancel.png"
              h={"30px"}
              p={2}
              cursor={"pointer"}
              borderRadius={"25%"}
              _hover={{ backgroundColor: "#c2999c" }}
              position="absolute"
              top="20px"
              right="30px"
            />
          </Tooltip>
        )}
        {children}
      </Center>
    </>
  );
};
