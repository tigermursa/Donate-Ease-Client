import About from "../../pages/About";
import Banner from "../../pages/Banner";
import DonationPosts from "../../pages/DonationPosts";
import FAQ from "../../pages/FAQ";
import Fact from "../../pages/Fact";
import Gallery from "../../pages/Gallery";
import TopDonations from "../../pages/TopDonations";

const Home = () => {
  return (
    <div>
      <Banner />
      <DonationPosts />
      <TopDonations />
      <Gallery />
      <Fact />
      <FAQ />
      <About />
    </div>
  );
};

export default Home;
