import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";

import React from "react";

interface UpdateDonationPostProps {
  closeModal: () => void;
  data: {
    _id: string;
    image: string;
    category: string;
    title: string;
    amount: number;
    description: string;
  };
}

interface FormData {
  image: string;
  category: string;
  title: string;
  amount: number;
  description: string;
}

const UpdateDonationPost: React.FC<UpdateDonationPostProps> = ({
  closeModal,
  data,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  React.useEffect(() => {
    if (data) {
      setValue("image", data.image);
      setValue("category", data.category);
      setValue("title", data.title);
      setValue("amount", data.amount);
      setValue("description", data.description);
    }
  }, [data, setValue]);

  const onSubmit = async (formData: FormData) => {
    try {
      const response = await axios.put(
        `https://l2-b2-frontend-path-assignment-6-server-starter-pack-8shax1ott.vercel.app/api/v1/data/${data._id}`,
        formData
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Update Successful",
          text: "The donation post has been updated successfully!",
        });
        closeModal();
        // Reload the window after a successful update
        window.location.reload();
      } else {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Failed to update the donation post. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error updating donation post:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "An error occurred while updating the donation post. Please try again.",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-600"
          >
            Image
          </label>
          <input
            type="text"
            id="image"
            {...register("image", { required: "Image is required" })}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {errors.image && typeof errors.image === "string" && (
            <p className="text-red-500">{errors.image}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            {...register("category", { required: "Category is required" })}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {errors.category && typeof errors.category === "string" && (
            <p className="text-red-500">{errors.category}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {errors.title && typeof errors.title === "string" && (
            <p className="text-red-500">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-600"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            {...register("amount", {
              required: "Amount is required",
              min: { value: 0, message: "Amount must be a positive number" },
            })}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {errors.amount && typeof errors.amount === "string" && (
            <p className="text-red-500">{errors.amount}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {errors.description && typeof errors.description === "string" && (
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateDonationPost;
