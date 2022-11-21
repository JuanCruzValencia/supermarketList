import { Box, Button, Heading, Input, Link, Stack } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { ToDoContext } from "../context/toDoContext";

// https://wa.me/whatsappnumber/?text=Add%your%text%here

type Message = {
  number: string;
  message: string;
};

const MessageBox: React.FC = () => {
  const [message, setMessage] = useState({} as Message);
  const { state } = useContext(ToDoContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setMessage({
      number: target.value,
      message: JSON.stringify(state.map((item) => item.item)),
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const whatsApp = `https://wa.me/send?phone=${message.number}/?text=${message.message}`;
  };

  return (
    <Box display="flex" gap="2rem" flexDirection="column">
      <Heading color="blackAlpha.700">Send your list to WhatsApp</Heading>
      <Stack direction="row">
        <Input
          placeholder="5411XXXX-XXXX"
          type="number"
          name="DestNum"
          onChange={(e) => handleChange(e)}
        />
        <Link
          href={`https://wa.me/${message.number}/?text=${message.message}`}
          isExternal
        >
          <Button bgColor="green.600" type="button">
            Send
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default MessageBox;
