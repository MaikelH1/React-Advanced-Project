import { Grid, FormLabel, Input } from "@chakra-ui/react";

export const InputField = ({ labelText, nameText, screenSize }) => {
  return (
    <Grid
      gridTemplateColumns={screenSize.width <= 700 ? 300 : "110px 300px"}
      alignItems={"center"}
    >
      <FormLabel>{labelText}</FormLabel>
      <Input
        type="text"
        bg={"white"}
        name={nameText}
        focusBorderColor="fuchsia"
      />
    </Grid>
  );
};
