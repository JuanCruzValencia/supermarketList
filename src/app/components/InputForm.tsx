import { Flex, Stack, Input, Button, Select } from "@chakra-ui/react";
import { useContext } from "react";
import { ToDoContext } from "../context/toDoContext";
import useForm from "../hooks/useForm";
import { Item } from "../types/list";

const InputForm: React.FC = () => {
  const { form, handleForm } = useForm({
    id: "",
    category: "",
    item: "",
  } as Item);
  
  const { storage, handleStorage } = useContext(ToDoContext);

  const getItemId = () => {
    const index = storage.length;
    const id = index > 0 ? index + 1 : 1;
    return id.toString();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    storage.push({ ...form, id: getItemId() });
    handleStorage([...storage]);
  };

  return (
    <Flex
      direction="column"
      w="100%"
      alignItems="center"
      justifyContent="center"
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <Stack direction="row" w="100%">
          <Input
            type="text"
            isRequired
            name="item"
            placeholder="Banana"
            onChange={(e) => handleForm(e)}
            minW="50%"
            bgColor="transparent"
            autoFocus
          />
          <Select
            value={form.category}
            name="category"
            onChange={(e) => handleForm(e)}
            placeholder="Category"
            isRequired
            minW="50%"
            bg="transparent"
          >
            <option value="super">Supermarket</option>
            <option value="verdu">Fruits & Vegetables</option>
            <option value="otros">Others</option>
          </Select>
          <Button
            type="submit"
            bgColor="green"
            borderRadius={999}
            fontSize={12}
          >
            Add
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};

export default InputForm;
