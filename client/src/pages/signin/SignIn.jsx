import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import FormField from "../../components/FormField";
import AuthContainer from "../../components/AuthContainer";
export default function SignIn() {
  return (
    <AuthContainer header="Login">
      <form>
        <div>
          <FormField
            label="Username"
            placeholder="Enter Username"
            type="text"
          />
        </div>
        <div>
          <FormField
            label="Password"
            placeholder="Enter Password"
            type="password"
          />
        </div>

        <a href="#" className="text-sm mt-2 inline-block text-white">
          Don't have an account?
        </a>
        <div>
          <Button title="Login" />
        </div>
      </form>
    </AuthContainer>
  );
}
