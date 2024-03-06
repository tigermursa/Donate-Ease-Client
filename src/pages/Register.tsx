import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Display SweetAlert2 success alert
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "User registered successfully",
        });

        // Reset the form
        reset();

        // Redirect to login page
        navigate("/login");
      } else {
        // Display SweetAlert2 error alert with proper error message
        Swal.fire({
          icon: "error",
          title: "Registration Error",
          text: result.error || "An error occurred during registration",
        });
      }
    } catch (error) {
      // Handle network errors separately
      console.error("Network error during registration:", error);

      // Display SweetAlert2 error alert for network errors
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Failed to connect to the server. Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-8 shadow-md rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            id="name"
            className="mt-1 p-2 border rounded-md w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
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
            className="mt-1 p-2 border rounded-md w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className="btn-primary">
          Register
        </button>
        <div>
          <p className="text-sm text-gray-400 mt-5">Already have an account?</p>
          please{" "}
          <NavLink to={"/login"} className={"text-blue-600 font-semibold mt-4"}>
            Sign in
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
