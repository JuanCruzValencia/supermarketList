import { useState } from "react";
import { Item } from "../types/list";

const useLocalStorage = (key: string, value: Item[]) => {
  const [storage, setStorage] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch {
      return value;
    }
  });

  const handleStorage = (newValue: Item[]) => {
    try {
      setStorage(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log(error);
    }
  };

  return [storage, handleStorage];
};

export default useLocalStorage;
