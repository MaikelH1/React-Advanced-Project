import React, { useState, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Menu } from "../components/Menu";
import { Box, Stack, Flex } from "@chakra-ui/react";
import { EventProvider } from "./EventContext";
import { Footer } from "./Footer";
import { getCurrentDimension } from "./getCurrentDimension";

export const loader = async () => {
  const categories = await fetch(`http://localhost:3000/categories`);

  return {
    categories: await categories.json(),
    screenSize: getCurrentDimension(),
  };
};

export const Root = () => {
  const { categories } = useLoaderData();
  const [showMenu, setShowMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return (
    <EventProvider>
      <Flex
        direction={"row"}
        alignItems={"center"}
        transform={screenSize.width <= 700 && "translate(10%, -5%)"}
      >
        <Stack
          direction={"column"}
          mt={5}
          transform={
            screenSize.width <= 700
              ? "translate(-10%)"
              : screenSize.width > 1024
              ? "translate(-10%)"
              : "translate(-22%)"
          }
        ></Stack>
      </Flex>
      <Box>
        <Navigation toggleMenu={() => setShowMenu(!showMenu)} />
        {showMenu && <Menu categories={categories} />}
        <Outlet screenSize={screenSize} />
        <Footer screenSize={screenSize} />
      </Box>
    </EventProvider>
  );
};
