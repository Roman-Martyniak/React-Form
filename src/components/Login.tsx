import { useState } from "react";

export default function Login() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  function handleChange(identifier, value: string) {
    setValue((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleChange("email", event.target.value)}
            value={value.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleChange("password", event.target.value)}
            value={value.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
