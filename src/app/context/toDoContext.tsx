import useLocalStorage from "../hooks/useLocalStorage";
import { createContext } from "react";
import { Item } from "../types/list";

interface Context {
  storage: Item[];
  handleStorage: (value: Item[]) => void;
}

type Props = {
  children: React.ReactNode;
};

export const ToDoContext = createContext({} as Context);

const ToDoContextProvider: React.FC<Props> = ({ children }) => {
  const [storage, handleStorage] = useLocalStorage("supermarket", [] as Item[]);

  console.log(typeof storage);
  return (
    <ToDoContext.Provider value={{ storage, handleStorage }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
