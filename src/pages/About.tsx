import { useGetVolunteerDataQuery } from "@/redux/api/api";
import { Key } from "react";
import { FaCircleNotch } from "react-icons/fa6";

const About = () => {
  const { data, isFetching, isLoading } = useGetVolunteerDataQuery("");
  const volunteerData = data?.data || [];
  if (isLoading) {
    return (
      <div className="flex justify-center  ">
        <h1 className="flex items-center gap-2 text-xl text-blue-700 font-semibold">
          Loading <FaCircleNotch className="animate-spin" />{" "}
        </h1>
      </div>
    );
  } else if (isFetching) {
    <div className="flex justify-center  ">
      <h1 className="flex items-center gap-2 text-xl text-blue-700 font-semibold">
        Fetching <FaCircleNotch className="animate-spin" />{" "}
      </h1>
    </div>;
  }
  return (
    <div id="about">
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14">
            About Us
          </h2>
          <p className="mb-8 max-w-lg text-sm text-[#808080] sm:text-base lg:mb-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <img
              src="https://www.eardleyelementaryhs.ca/wp-content/uploads/2022/09/hub_12_18_charity-Hero-1200x900-1.jpeg"
              alt=""
              className="inline-block h-full w-full rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
              <h2 className="text-3xl font-bold md:text-5xl">Our Mission</h2>
              <p className="text-sm text-[#808080] sm:text-base">
                {" "}
                Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
                bibendum ut. Vestibulum lorem sed risus ultricies tristique
                nulla. Vitae et leo duis ut diam quam. Bibendum arcu vitae
                elementum curabitur vitae nunc. Dictumst vestibulum rhoncus est
                pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus.
                <br />
                <br />
                Massa id neque aliquam vestibulum morbi blandit. Nulla
                pellentesque dignissim enim sit amet venenatis.
              </p>
            </div>
            <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
              <h2 className="text-3xl font-bold md:text-4xl">
                Digital Volunteers
              </h2>
              <table className="min-w-full  border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left align-middle">
                      Name
                    </th>
                    <th className="py-2 px-4 border-b text-left align-middle">
                      Email
                    </th>
                    <th className="py-2 px-4 border-b text-left align-middle">
                      Age
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {volunteerData.map(
                    (volunteer: {
                      _id: Key | null | undefined;
                      name: string;
                      email: string;
                      age: string;
                    }) => (
                      <tr key={volunteer._id}>
                        <td className="py-2 px-4 border-b">{volunteer.name}</td>
                        <td className="py-2 px-4 border-b">
                          {volunteer.email}
                        </td>
                        <td className="py-2 px-4 border-b">{volunteer.age}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <img
              src="https://www.verywellfamily.com/thmb/UbunHMxsiCkTP0fascQ__UALBAg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1306629971-ac046b93a1f74306b65b079aed470cf6.jpg"
              alt=""
              className="inline-block h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
