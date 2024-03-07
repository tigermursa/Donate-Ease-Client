import React, { useState } from "react";
import Modal from "react-modal";
import {
  useDeleteDataMutation,
  useGetDonationDataQuery,
} from "@/redux/api/api";
import AddDonationPost from "./AddDonationPost";
import Swal from "sweetalert2";
import UpdateDonationPost from "./UpdateDonationPost";
import { FaCircleNotch } from "react-icons/fa6";

Modal.setAppElement("#root"); // Set the root element for accessibility

interface DonationData {
  _id: string;
  id: string;
  title: string;
  category: string;
  amount: number;
}

const DonationTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<DonationData | null>(
    null
  );
  // Fetch donation data from the server
  const { data ,isFetching,isLoading } = useGetDonationDataQuery("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openUpdateModal = (donation: DonationData) => {
    setSelectedDonation(donation);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedDonation(null);
    setIsUpdateModalOpen(false);
  };

  const [deleteThis] = useDeleteDataMutation();

  const deleteTask = (donationId: string) => {
    // Show a confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, perform the deletion
        deleteThis({ id: donationId });
        Swal.fire("Deleted!", "Your donation has been deleted.", "success");
      }
    });
  };


  if (isLoading) {
    return (
      <div className="flex justify-center h-screen items-center  ">
        <h1 className="flex items-center gap-2 text-xl text-blue-700 font-semibold">
          Loading <FaCircleNotch className="animate-spin" />{" "}
        </h1>
      </div>
    );
  } else if (isFetching) {
    <div className="flex justify-center  h-screen items-center ">
      <h1 className="flex items-center gap-2 text-xl text-blue-700 font-semibold">
        Fetching <FaCircleNotch className="animate-spin" />{" "}
      </h1>
    </div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Title</th>
            <th className="py-2 px-4 border-b text-left">Category</th>
            <th className="py-2 px-4 border-b text-left">Amount</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((donation: DonationData) => (
            <tr key={donation.id}>
              <td className="py-2 px-4 border-b text-left">{donation.title}</td>
              <td className="py-2 px-4 border-b text-left">
                {donation.category}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {donation.amount}
              </td>
              <td className="py-2 px-4 border-b text-left">
                <button
                  onClick={() => openUpdateModal(donation)}
                  className="mr-2 text-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(donation._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={openModal}
        >
          Add Donation Post
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Donation Post Modal"
      >
        <AddDonationPost closeModal={closeModal} />
        <button
          className="bg-red-500 text-white py-1 px-2  fixed top-6 right-6 rounded-2xl"
          onClick={closeModal}
        >
          X
        </button>
      </Modal>
      {/* UPDATE MODAL */}
      <Modal
        isOpen={isUpdateModalOpen}
        onRequestClose={closeUpdateModal}
        contentLabel="Update Donation Post Modal"
      >
        {selectedDonation && (
          <UpdateDonationPost
            closeModal={closeUpdateModal}
            data={selectedDonation}
          />
        )}
        <button
          className="bg-red-500 text-white py-1 px-2  fixed top-6 right-6 rounded-2xl"
          onClick={closeUpdateModal}
        >
          X
        </button>
      </Modal>
    </div>
  );
};

export default DonationTable;
