import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddVolunteerMutation } from "@/redux/api/api";
import Swal from "sweetalert2";
import { FaCircleNotch } from "react-icons/fa6";

// Define the types for your form data
interface FormData {
  name: string;
  age: string;
  email: string;
  location: string;
}

const VolunteerForm: React.FC = () => {
  const [addData, { isLoading }] = useAddVolunteerMutation();
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      name: "John Doe",
      age: "25",
      email: "john@example.com",
      location: "Cityville",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      await addData(formData);

      // Handle any success logic here
      console.log("Data added successfully!");

      // Show SweetAlert2 success alert
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Data added successfully!",
      });

      // Reset the form after successful submission
      reset();
    } catch (error) {
      // Handle error logic here
      console.error("Error adding data:", error);

      // Show SweetAlert2 error alert
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to add data. Please try again.",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center h-screen items-center  ">
        <h1 className="flex items-center gap-2 text-xl text-blue-700 font-semibold">
          Loading <FaCircleNotch className="animate-spin" />{" "}
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md  ">
      <h2 className="text-2xl font-bold mb-6">Volunteer Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-600"
          >
            Age
          </label>
          <input
            type="text"
            id="age"
            {...register("age", { required: true })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-600"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            {...register("location", { required: true })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
