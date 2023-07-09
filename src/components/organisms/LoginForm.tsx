import React from "react";
import FormInput from "../molecules/FormInput";

export default function LoginForm() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <FormInput
            label="Email"
            type="text"
            nameProp="email"
            id="email"
            placeholder="login@example.com"
          ></FormInput>
        </div>
        <div className="mt-5">
          <FormInput
            label="Password"
            type="password"
            nameProp="password"
            id="password"
            placeholder="password"
          ></FormInput>
        </div>
        <div className="mt-5 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}