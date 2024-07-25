import React from "react";
import AuthContainer from "../../components/AuthContainer";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import GenderCheckbox from "../../components/GenderCheckbox";

export default function SignUp() {
  return (
    <AuthContainer header="SignUp">
      <form>
        <div>
          <FormField
            label="Fullname"
            placeholder="Enter Fullname"
            type="text"
          />
        </div>
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
        <div>
          <FormField
            label="Confirm Password"
            placeholder="Re-enter Password"
            type="password"
          />
        </div>
        <GenderCheckbox />

        <a href="#" className="text-sm  inline-block text-white">
          Already have an account?
        </a>
        <div>
          <Button title="Signup" />
        </div>
      </form>
    </AuthContainer>
  );
}
