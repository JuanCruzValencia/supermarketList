import { Container } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <Container minW="100%" bgColor="green.300" minH="100vh">{children}</Container>;
};

export default Layout;
