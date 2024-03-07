import { useForm, SubmitHandler } from "react-hook-form";
import { useAddWallMutation, useGetWallDataQuery } from "@/redux/api/api";
import Swal from "sweetalert2";
import Marquee from "react-fast-marquee";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

interface FormData {
  wallText: string;
}

const GratitudeWall: React.FC = () => {
  const { data } = useGetWallDataQuery("");
  const wallData = data?.data || [];
  const [addData, { isLoading }] = useAddWallMutation();
  const { register, handleSubmit, reset } = useForm<FormData>();

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

  return (
    <div className="">
      <div className=" mx-auto mt-10 p-6  rounded-md  flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold mb-20 mt-10">
          Community Gratitude Wall
        </h1>

        <div className="flex flex-col items-center mt-6">
          {/* Marquee for odd indices */}
          <Marquee>
            {wallData
              .filter((_: any, index: number) => index % 2 === 1)
              .map(
                (
                  entry: {
                    wallText:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                  },
                  index: Key | null | undefined
                ) => (
                  <div
                    key={index}
                    className=" mb-2 p-3 text-blue-700 font-bold font-mono text-xl inline-block"
                  >
                    <p>{entry.wallText}</p>
                  </div>
                )
              )}
          </Marquee>

          {/* Marquee for even indices */}
          <Marquee speed={30}>
            {wallData
              .filter((_: any, index: number) => index % 2 === 0)
              .map(
                (
                  entry: {
                    wallText:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                  },
                  index: Key | null | undefined
                ) => (
                  <div
                    key={index}
                    className=" mb-2 p-3 text-blue-700 font-bold text-inherit inline-block"
                  >
                    <p>{entry.wallText}</p>
                  </div>
                )
              )}
          </Marquee>

          {/* Form to add data */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center mt-6"
          >
            <label
              htmlFor="wallText"
              className="mr-2 text-sm font-medium text-gray-600"
            >
              Write on the Gratitude Wall
            </label>
            <input
              type="text"
              id="wallText"
              {...register("wallText", { required: true })}
              className="border border-gray-300 rounded-md p-2 mr-2 text-black"
            />

            <button type="submit" disabled={isLoading} className="btn-primary">
              Done
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GratitudeWall;
