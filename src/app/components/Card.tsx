import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ToDoContext } from "../context/toDoContext";
import { Item } from "../types/list";

const Card: React.FC = () => {
  const { storage, handleStorage } = useContext(ToDoContext);

  const handleClick = (itemId: string) => {
    const storageCopy: Item[] = [...storage];
    const storageUpdated: Item[] = storageCopy.filter(
      (item: Item) => item.id !== itemId
    );
    handleStorage([...storageUpdated]);
  };

  return (
    <Box
      p="1rem"
      border={storage.length > 0 ? "1px solid grey" : undefined}
      borderRadius="10px"
      w="100%"
    >
      {storage.map((listItem: Item) => {
        return (
          <Stack
            key={listItem.id}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="3rem"
            p="1rem"
          >
            <Text fontSize="1.5em" textTransform="uppercase" fontWeight="600">
              {listItem.item}
            </Text>
            <Text
              fontSize="1.5em"
              textTransform="uppercase"
              fontWeight="600"
              color={listItem.category === "super" ? "red.500" : "green.700"}
            >
              {listItem.category}
            </Text>
            <Button
              type="button"
              onClick={() => handleClick(listItem.id)}
              bgColor="tomato"
              borderRadius={999}
            >
              X
            </Button>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Card;
