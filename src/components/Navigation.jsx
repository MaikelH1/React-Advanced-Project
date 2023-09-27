import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useEvent } from "./EventContext";
import { ACTIONS } from "./eventReducer";
import { Text, Tooltip, Input, Stack, Image, Flex } from "@chakra-ui/react";

export const Navigation = ({ toggleMenu }) => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { dispatch } = useEvent();
  const [searchText, setSearchText] = useState("");

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    dispatch({ type: ACTIONS.FILTER_EVENTS, payload: searchText });
  }, [searchText, dispatch]);

  return (
    <Flex
      bg="#171c24"
      height={10}
      fontSize="xl"
      color="white"
      boxShadow={"base"}
      justifySelf={"right"}
      pr={2}
      alignItems={"center"}
      justify={"space-between"}
    >
      <Text fontWeight={"bold"} paddingLeft={3} justifySelf={"flex-start"}>
        Winc Academy events
      </Text>

      {screenSize.width <= 700 ? (
        <Image
          justifySelf={"flex-end"}
          pr={2}
          src="/src/assets/Menu.png"
          height={8}
          p={1}
          _hover={{
            background: "e5bc19",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            toggleMenu(setIsMenuOpen(!isMenuOpen));
          }}
        />
      ) : (
        <>
          <Flex>
            <Stack direction={"row"} height={8} mr={10}>
              <Flex justify={"space-between"}>
                <Tooltip label="Go to the list of events">
                  <Text height={8} _hover={{ color: "green" }} mr={5}>
                    <Link to="/">Events</Link>
                  </Text>
                </Tooltip>
                <Tooltip label="Go to an event">
                  <Text height={8} _hover={{ color: "green" }} mr={5}>
                    <Link to="/event/1">Event</Link>
                  </Text>
                </Tooltip>
              </Flex>
              <Input
                type="text"
                placeholder="Search..."
                bg="white"
                height={6}
                fontSize={"sm"}
                color="black"
                focusBorderColor="#BA51A3"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                alignSelf={"center"}
              />
              <Tooltip label="Click to search">
                <Image
                  src="/src/assets/Search.png"
                  height={8}
                  p={1}
                  alignSelf={"center"}
                  _hover={{
                    background: "green",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
            </Stack>
          </Flex>
        </>
      )}
    </Flex>
  );
};
