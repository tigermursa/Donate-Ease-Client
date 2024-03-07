import { useAddTestimonialMutation } from "@/redux/api/api";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

interface FormData {
  img: string;
  name: string;
  profession: string;
  comment: string;
}

const AddTestimonials = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [addData, { isLoading }] = useAddTestimonialMutation();

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      await addData(formData);
      // Handle any success logic here
      console.log("Data added successfully!");
      reset();
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
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl mb-10 font-semibold">ADD Testimonial</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 p-8 bg-white rounded"
      >
        <Controller
          name="img"
          control={control}
          defaultValue=""
          rules={{ required: "Image URL is required" }}
          render={({ field }) => (
            <div>
              <input
                {...field}
                className="w-full mb-4 px-3 py-2 border rounded"
                placeholder="Image URL"
              />
              {errors.img && (
                <p className="text-red-500">{"Image URL is required"}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <div>
              <input
                {...field}
                className="w-full mb-4 px-3 py-2 border rounded"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500">{"Name is required"}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="profession"
          control={control}
          defaultValue=""
          rules={{ required: "Profession is required" }}
          render={({ field }) => (
            <div>
              <input
                {...field}
                className="w-full mb-4 px-3 py-2 border rounded"
                placeholder="Profession"
              />
              {errors.profession && (
                <p className="text-red-500">{"Profession is required"}</p>
              )}
            </div>
          )}
        />

        <Controller
          name="comment"
          control={control}
          defaultValue=""
          rules={{ required: "Comment is required" }}
          render={({ field }) => (
            <div>
              <textarea
                {...field}
                className="w-full mb-4 px-3 py-2 border rounded"
                placeholder="Comment"
              />
              {errors.comment && (
                <p className="text-red-500">{"Comment is required"}</p>
              )}
            </div>
          )}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddTestimonials;
