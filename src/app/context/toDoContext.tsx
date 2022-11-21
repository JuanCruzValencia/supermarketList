import useLocalStorage from "../hooks/useLocalStorage";
import { createContext } from "react";
import { Item } from "../types/list";

interface Context {
  state: Item[];
  handleStorage: (value: Item[]) => void;
}

type Props = {
  children: React.ReactNode;
};

export const ToDoContext = createContext({} as Context);

const ToDoContextProvider: React.FC<Props> = ({ children }) => {
  const [storage, handleStorage] = useLocalStorage("supermarket", {} as Item[]);

  const state = storage;
  const actions = handleStorage;
  return (
    <ToDoContext.Provider value={{ state, handleStorage }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
