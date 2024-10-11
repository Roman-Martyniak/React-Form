export interface UseInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  hasError: boolean;
}
