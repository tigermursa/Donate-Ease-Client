import { useGetDonationDataQuery } from "@/redux/api/api";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const DonationPosts = () => {
  const initialVisiblePosts = 6;
  const [visiblePosts, setVisiblePosts] = useState(initialVisiblePosts);
  // const donations = [
  //   {
  //     id: 1,
  //     imageUrl:
  //       "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  //     title: "More money has been donated",
  //     category: "Food",
  //     amount: 5000,
  //   },
  //   {
  //     id: 2,
  //     imageUrl:
  //       "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  //     title: "More money has been donated",
  //     category: "Food",
  //     amount: 5000,
  //   },

  //   // Add more donations as needed
  // ];

  //from server
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading } = useGetDonationDataQuery(" ");

  //console.log(data);

  const showMoreButton = data?.data.length > initialVisiblePosts;

  const handleShowMore = () => {
    setVisiblePosts(
      (prevVisiblePosts) => prevVisiblePosts + initialVisiblePosts
    );
  };

  const handleSeeLess = () => {
    setVisiblePosts(initialVisiblePosts);
  };

  return (
    <div className="mx-auto flex flex-col" id="all-donations">
      <h1 className="mt-10 mb-10 text-center text-xl md:text-3xl lg:text-5xl font-semibold">
        Donations
      </h1>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
        {data?.data
          .slice(0, visiblePosts)
          .map(
            (donation: {
              _id: unknown;
              image: string | undefined;
              id: React.Key | null | undefined;
              imageUrl: string | undefined;
              title:
                | string
                | number
                | boolean
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<unknown>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
              category:
                | string
                | number
                | boolean
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<unknown>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
              amount:
                | string
                | number
                | boolean
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<unknown>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <div
                key={donation.id}
                className="shadow-md shadow-black p-4 max-w-[400px] rounded-xl"
              >
                <img
                  className="rounded-md w-[320px]  h-[250px]"
                  src={donation.image}
                  alt=""
                />
                <p className="mt-5 mb-2 text-xl font-semibold">
                  Title: {donation.title}
                </p>
                <p className="text- font-semibold">
                  Category: {donation.category}
                </p>
                <p className="text- font-semibold">
                  Amount: ${donation.amount}
                </p>
                <div className="flex justify-center">
                  <NavLink to={`/donations/details/${donation?._id}`}>
                    <button className="btn-primary mt-5 mb-3">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>
            )
          )}
      </div>
      {showMoreButton && (
        <div className="flex justify-center">
          {visiblePosts > initialVisiblePosts ? (
            <button
              className="bg-black p-2 text-white rounded-3xl mt-5 mb-3 hover:text-gray-300"
              onClick={handleSeeLess}
            >
              See Less
            </button>
          ) : (
            <button
              className="bg-black p-2 text-white rounded-3xl mt-5 mb-3 hover:text-gray-300"
              onClick={handleShowMore}
            >
              Show More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DonationPosts;
