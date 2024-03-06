import { useGetDonationDataQuery } from "@/redux/api/api";
import { useParams } from "react-router-dom";

const DonationsDetails = () => {
  const { id } = useParams();

  // Fetch donation data from the server
  const { data, isLoading } = useGetDonationDataQuery("");
  // console.log(data);
  // Check for loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Find the donation with the matching id
  const selectedDonation = data?.data.find(
    (donation: { _id: string }) => donation._id === id!.toString()
  );

  // Check if the donation is found
  if (!selectedDonation) {
    return (
      <div>
        <p>No donation found for id: {id}</p>
      </div>
    );
  }

  // Render the component using the selected donation
  return (
    <div className="border-2 border-blue-500">
      <div className="grid grid-rows-1 md:grid-cols-2 p-2 gap-4">
        <div className="border">
          <img className="w-full" src={selectedDonation.image} alt="" />
        </div>
        <div className="">
          <h4 className="text-xl md:text-3xl font-bold">
            Title: {selectedDonation.title}
          </h4>
          <p className="text-xl md:text-xl text-gray-900 mb-2 mt-2">
            Description: {selectedDonation.description}
          </p>
          <h4 className="text-xl md:text-2 font-semibold">
            Amount: {selectedDonation.amount}$
          </h4>
          <h4 className="text-xl md:text-2 font-semibold">
            Category: {selectedDonation.category}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DonationsDetails;
