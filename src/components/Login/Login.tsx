import Input from "../Input/Input.tsx";
import { isEmail, isNotEmpty, hasMinLength } from "../../util/validation.ts";
import { useInput } from "../../hooks/useInput.ts";

export default function Login() {
  const {
    value: emailValue,
    handleChange: handleEmailChange,
    handleInputBlur: handleEmailBlue,
    hasError: emailHasError,
    reset: emailReset,
  } = useInput("", (value: string) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: passwordValue,
    handleChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
    reset: passwordReset,
  } = useInput("", (value: string) => hasMinLength(value, 6));

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
  }

  function handleReset() {
    emailReset();
    passwordReset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlue}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
