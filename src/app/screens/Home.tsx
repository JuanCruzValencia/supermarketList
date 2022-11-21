import {
  Flex,
  Heading,
  Box,
  Spacer,
  Stack,
  Divider,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import supermarketHero from "../../assets/supermarket.jpg";
import Card from "../components/Card";
import InputForm from "../components/InputForm";
import MessageBox from "../components/WhatsAppMessage";

const Home: React.FC = () => {
  return (
    <Box>
      <Flex
        bgImage={supermarketHero}
        w="100%"
        h="300px"
        bgSize="cover"
        bgRepeat="no-repeat"
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h1" fontSize="7em" fontWeight="600">
          Supermarket List
        </Heading>
      </Flex>
      <Spacer h="50px" />
      <Flex
        justifyContent="space-evenly"
        direction="row"
        gap={10}
        w="100%"
        alignItems="flex-start"
        pb="1rem"
      >
        <Stack gap="2rem" justifyContent="center" alignItems="center">
          <Heading color="blackAlpha.700">Enter products:</Heading>
          <InputForm />
          <Card />
        </Stack>
        <Divider orientation="vertical" h="300px" />
        <Stack gap="2rem" justifyContent="flex-start" alignItems="center">
          <MessageBox />
        </Stack>
      </Flex>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="1rem"
        borderTop="1px solid black"
      >
        <Text>
          Dev by Juan Cruz Valencia with <Icon as={FaHeart} color="tomato" />
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
