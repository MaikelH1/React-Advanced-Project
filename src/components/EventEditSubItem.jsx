import { Stack, Image, Center, Tooltip, Editable } from "@chakra-ui/react";
import { TYPES } from "../pages/EventPage";
import { EventEditSubDescription } from "./EventEditSubItems/Description";
import { EventEditSubLocation } from "./EventEditSubItems/Location";
import { EventEditSubDateStart } from "./EventEditSubItems/DateStart";
import { EventEditSubDateEnd } from "./EventEditSubItems/DateEnd";
import { EventEditSubCategories } from "./EventEditSubItems/Categories";

export const EventEditSubItem = ({
  eventItem,
  imgUrl,
  typeInput,
  width,
  direction,
}) => {
  return (
    <Stack direction="row">
      <Center>
        <Tooltip label={typeInput}>
          <Image src={imgUrl} height={10} p={2} mr={5} alt={typeInput} />
        </Tooltip>
        <Editable textAlign={"center"} color="black" defaultValue={eventItem}>
          {typeInput === TYPES.DESCRIPTION ? (
            <EventEditSubDescription eventItem={eventItem} width={width} />
          ) : typeInput === TYPES.LOCATION ? (
            <EventEditSubLocation eventItem={eventItem} width={width} />
          ) : typeInput === TYPES.DATE_START ? (
            <EventEditSubDateStart eventItem={eventItem} />
          ) : typeInput === TYPES.DATE_END ? (
            <EventEditSubDateEnd eventItem={eventItem} />
          ) : (
            typeInput === TYPES.CATEGORIES && (
              <EventEditSubCategories
                eventItem={eventItem}
                direction={direction}
              />
            )
          )}
        </Editable>
      </Center>
    </Stack>
  );
};
