import { useAddDonationDataMutation } from "@/redux/api/api";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

interface AddDonationPostProps {
  closeModal: () => void;
}

interface FormData {
  image: string;
  category: string;
  title: string;
  amount: number;
  description: string;
}

const AddDonationPost: React.FC<AddDonationPostProps> = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [addData, { isLoading }] = useAddDonationDataMutation();

  const onSubmit = async (formData: FormData) => {
    try {
      await addData(formData);
      // Handle any success logic here
      console.log("Data added successfully!");
      closeModal();
      // Show SweetAlert2 success alert
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Data added successfully!",
      });
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
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDonationPost;
