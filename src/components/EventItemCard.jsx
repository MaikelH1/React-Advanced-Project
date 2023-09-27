import { getTime } from "./getTime";
import { getDate } from "./getDate";
import {
  Card,
  CardBody,
  Image,
  Text,
  Stack,
  Heading,
  Tag,
  Center,
} from "@chakra-ui/react";

export const EventItemCard = ({ event, categories }) => {
  return (
    <Card
      mt={8}
      width={["300px", "340px"]}
      boxShadow="2xl"
      bg="#65a2ba"
      cursor={"pointer"}
      _hover={{
        opacity: 0.6,
        transform: "scale(.95)",
        filter: "auto",
        blur: "0.5px",
      }}
    >
      <CardBody>
        <Center>
          <Image
            src={event.image}
            height={200}
            width={"80%"}
            borderRadius={"xl"}
          />
        </Center>
        <Stack mt="6" spacing="3" alignItems={"center"}>
          <Heading size="md" textAlign={"center"} color="white">
            {event.title}
          </Heading>
          <Stack direction={"row"}>
            <Text color="black" fontSize="sm">
              Description:
            </Text>
            <Text color="black" fontSize="sm" fontWeight={"semibold"}>
              {" "}
              {event.description}
            </Text>
          </Stack>
          <Stack direction={"row"} color="black" fontSize="sm">
            <Text>Date:</Text>
            <Text color="black" fontSize="sm" fontWeight={"semibold"}>
              {getDate(event.startTime).props.children ===
              getDate(event.endTime).props.children
                ? `${getDate(event.startTime).props.children}`
                : `${getDate(event.startTime).props.children} - ${
                    getDate(event.endTime).props.children
                  }`}
            </Text>
          </Stack>
          <Stack direction={"row"} color="black" fontSize="sm">
            <Text>Time:</Text>
            <Text color="black" fontSize="sm" fontWeight={"semibold"}>
              {" "}
              {getDate(event.startTime).props.children ===
              getDate(event.endTime).props.children
                ? `${getTime(event.startTime).props.children} - ${
                    getTime(event.endTime).props.children
                  }`
                : `${getTime(event.startTime).props.children} (startdate) - ${
                    getTime(event.endTime).props.children
                  } (enddate)`}
            </Text>
          </Stack>
        </Stack>
        <Center mt={3}>
          {categories.map((category) => (
            <Tag
              key={category.id}
              size={"sm"}
              maxBlockSize={2}
              bg="#33ab63"
              m={2}
              textAlign={"center"}
              color="black"
              fontWeight={"semibold"}
              py={1}
              textTransform={"uppercase"}
            >
              {category.name}
            </Tag>
          ))}
        </Center>
      </CardBody>
    </Card>
  );
};
