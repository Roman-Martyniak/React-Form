export interface UseInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  reset: () => void;
  value: string;
  hasError: boolean;
}
