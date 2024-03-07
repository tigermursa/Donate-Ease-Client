import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("https://donate-simple-server.vercel.app/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle successful login
        console.log(result.message);
        // Store the JWT token in localStorage
        localStorage.setItem("token", result.token);
        // Display SweetAlert2 success alert
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: result.message,
        });

        // Redirect to the home ("/") route
        navigate("/");
      } else {
        // Handle login error
        console.error(result.message);

        // Display SweetAlert2 error alert
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: result.message,
        });
      }
    } catch (error) {
      console.error("Error during login:", error);

      // Display SweetAlert2 error alert
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text: "An error occurred during login. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-8 shadow-md rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            id="email"
            defaultValue={"test@gmail.com"}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            id="password"
            defaultValue={"123456"}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className="btn-primary">
          Login
        </button>
        <div>
          <p className="text-sm text-gray-400 mt-5">Don't have account?</p>
          <div className=" flex gap-3 items-center ">
            <NavLink
              to={"/register"}
              className={"text-blue-600 font-semibold mt-4"}
            >
              Sign Up
            </NavLink>

            <NavLink to={"/"} className={"text-blue-600 font-semibold mt-4"}>
              Home
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
