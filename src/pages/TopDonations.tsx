import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetTestimonialDataQuery } from "@/redux/api/api";

const TopDonations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { data } = useGetTestimonialDataQuery("");
 
  

  return (
    <div className="mx-auto">
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mx-auto w-full max-w-3xl text-center">
            <h2 className="text-3xl font-semibold md:text-5xl">
              Top Donations
            </h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit amet luctus magna fringilla urna
              </p>
            </div>
          </div>

          <Slider {...settings}>
            {data?.data?.map((card: any, index: any) => (
              <div
                key={index}
                className="cursor-grab relative mb-4 flex flex-col items-center justify-between gap-6 rounded-2xl border border-solid border-[#636262] bg-white px-8 pb-8 pt-16 max-[767px]:mt-4 md:mb-8 md:px-6 md:pb-8 md:pt-16 lg:mb-4 mt-10"
              >
                <div className="mb-4 flex flex-col items-center">
                  <h6 className="text-gray-500 font-semibold">{card.name}</h6>
                  <p className="text-sm text-[#636262]">{card.profession}</p>
                </div>
                <p className="mb-4 text-[#636262]">{card.comment}</p>
                <div className="flex">{/* Add your rating icons here */}</div>
                <div className="absolute bottom-[auto] left-[auto] right-[50%] top-[-32px] flex h-16 w-16 translate-x-1/2 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white shadow-md mt-4 md:mt-0">
                  <img
                    src={card.img}
                    alt=""
                    className="inline-block h-full w-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <img
          src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639174a3de7d11bdf3ccbf01_Frame%20427322885.svg"
          alt=""
          className="absolute bottom-[auto] left-[auto] right-[15%] top-[0%] -z-10 inline-block max-[767px]:hidden"
        />
      </section>
    </div>
  );
};

export default TopDonations;
