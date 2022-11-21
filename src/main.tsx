import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./app/App";
import ToDoContextProvider from "./app/context/toDoContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <ToDoContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ToDoContextProvider>
  </ChakraProvider>
);
