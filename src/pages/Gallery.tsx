import PhotoAlbum from "react-photo-album";

const photos = [
  // First Column
  {
    src: "https://hips.hearstapps.com/hmg-prod/images/teamwork-in-homeless-shelter-royalty-free-image-1608327313.?crop=1xw:0.84415xh;center,top&resize=1200:*",
    width: 128,
    height: 192,
  },
  {
    src: "https://images.pexels.com/photos/6646947/pexels-photo-6646947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    width: 128,
    height: 212,
  },

  // Second Column
  {
    src: "https://www.savethechildren.org/content/dam/usa/images/blog/health-benefits-2-rec.jpg/_jcr_content/renditions/original.img.jpg",
    width: 128,
    height: 171,
  },
  {
    src: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?cs=srgb&dl=pexels-julia-m-cameron-6994982.jpg&fm=jpg",
    width: 160,
    height: 255,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY46ayH3iEbY0uCTpm0IjuoHJc5GRQAGAyVg&usqp=CAU",
    width: 128,
    height: 215,
  },

  // Third Column
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkX71x3KNmToRpPGJHcZashqiTwmzdJ3HA0w&usqp=CAU",
    width: 128,
    height: 244,
  },

  {
    src: "https://imageio.forbes.com/specials-images/imageserve/6384c484480bedd3b1459796/Volunteering--giving-back--Giving-Tuesday--charitable-donations--generosity--do-young/960x0.jpg?height=474&width=711&fit=bounds",
    width: 128,
    height: 160,
  },
  {
    src: "https://www.shutterstock.com/image-photo/you-need-it-nice-joyful-600nw-1298862457.jpg",
    width: 172,
    height: 258,
  },

  // Fourth Column
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT701nlFSd-fszjhLhTOLDXwMfQ1Up2QJzDA&usqp=CAU",
    width: 128,
    height: 215,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6BYO2qNyQG3dFMy9LNFWGgqkk7jnM_Y_5rA&usqp=CAU",
    width: 128,
    height: 215,
  },
];

const GalleryComponent = () => {
  return (
    <div className="max-w-[700px] mx-auto">
      <div className="mx-auto w-full max-w-3xl text-center">
        <h2 className="text-3xl font-semibold md:text-5xl">
          Our Photo Gallery
        </h2>
        <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
          <p className="text-[#636262]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
            purus sit amet luctus magna fringilla urna
          </p>
        </div>
      </div>
      <PhotoAlbum layout="columns" photos={photos} columns={4} padding={8} />;
    </div>
  );
};

export default GalleryComponent;
