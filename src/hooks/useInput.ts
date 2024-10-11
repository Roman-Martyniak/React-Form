import { useState } from "react";
import { UseInputProps } from "./useInput.props";

export function useInput(
  defaultValue: string,
  validationFn: (value: string) => boolean
): UseInputProps {
  const [value, setValue] = useState<string>(defaultValue);
  const [didEdit, setDidEdit] = useState<boolean>(false);

  const valueIsValid = validationFn(value);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: value,
    handleChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
