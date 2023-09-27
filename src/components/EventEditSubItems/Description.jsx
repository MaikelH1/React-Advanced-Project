import { useState, useEffect } from "react";
import { ACTIONS } from "../eventReducer";
import { useEvent } from "../EventContext";
import { EditableTextarea, EditablePreview } from "@chakra-ui/react";

export const EventEditSubDescription = ({ eventItem, width }) => {
  const { dispatch } = useEvent();
  const [editDescription, setEditDescription] = useState(eventItem);

  useEffect(() => {
    dispatch({ type: ACTIONS.EDIT_DESCR, payload: editDescription });
  }, [editDescription, dispatch, eventItem]);

  return (
    <>
      <EditablePreview cursor={"crosshair"} width={width} />
      <EditableTextarea
        bg="white"
        value={editDescription}
        onChange={(e) => {
          setEditDescription(e.target.value);
        }}
      />
    </>
  );
};
