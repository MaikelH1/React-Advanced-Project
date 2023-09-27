import { useState, useEffect } from "react";
import { ACTIONS } from "../eventReducer";
import { useEvent } from "../EventContext";
import { useLoaderData } from "react-router-dom";
import { Stack, Checkbox, Text } from "@chakra-ui/react";

export const loader = async () => {
  const categories = await fetch(`http://localhost:3000/categories`);

  return {
    categories: await categories.json(),
  };
};

export const EventEditSubCategories = ({ eventItem, direction }) => {
  const { dispatch } = useEvent();
  const { categories } = useLoaderData();
  const [selectedCategories, setSelectedCategories] = useState(
    new Set(eventItem)
  );
  const [editCats, setEditCats] = useState(false);

  const toggleCategory = (categoryId) => {
    if (selectedCategories.has(categoryId)) {
      selectedCategories.delete(categoryId);
    } else {
      selectedCategories.add(categoryId);
    }
    setSelectedCategories(new Set(selectedCategories));
  };

  const catsToShow = [];

  useEffect(() => {
    setEditCats(Array.from(selectedCategories));
    dispatch({ type: ACTIONS.EDIT_CATS, payload: editCats });
  }, [dispatch, selectedCategories, setSelectedCategories, editCats]);

  return (
    <Stack direction={direction}>
      {editCats ? (
        categories.map((category) => {
          const isChecked = selectedCategories.has(category.id);

          return (
            <Checkbox
              colorScheme="green"
              key={category.id}
              name="categoryIds"
              value={Array.from(selectedCategories)}
              onChange={() => toggleCategory(category.id)}
              isChecked={isChecked}
              sx={{
                borderColor: "grey",
                backgroundColor: "white",
                paddingLeft: "5px",
                borderRadius: "20px",
              }}
            >
              {category.name}
            </Checkbox>
          );
        })
      ) : (
        <Text cursor={"crosshair"} onClick={() => setEditCats(!editCats)}>
          {eventItem.map((catId) => {
            const category = categories.find((cat) => cat.id === catId);
            catsToShow.push(category.name);
          })}

          {catsToShow.join(", ")}
        </Text>
      )}
    </Stack>
  );
};
