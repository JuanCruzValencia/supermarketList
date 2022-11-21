import { useState } from "react";
import { Item } from "../types/list";

const useForm = (value: Item) => {
  const [form, setForm] = useState({} as Item);

  const handleForm = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    const { target } = event;
    setForm({ ...form, [target.name]: target.value });
  };

  return {
    form,
    handleForm,
  };
};

export default useForm;
