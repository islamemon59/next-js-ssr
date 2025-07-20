import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

const Register = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const password = form.password.value;
    const payload = { userName, password };
    console.log(payload);
    const result = await registerUser(payload);
    console.log(result);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleRegister} className="flex flex-col max-w-xs gap-1">
        <legend>UserName</legend>
        <input className="border p-1 rounded" name="userName" type="text" />
        <legend>Password</legend>
        <input className="border p-1 rounded" name="password" type="password" />
        <button className="border rounded mt-4 p-1" type="submit">
          Signin
        </button>
      </form>
    </div>
  );
};

export default Register;
