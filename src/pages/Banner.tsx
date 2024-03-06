const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-10">
      {/* text */}
      <div className="text-center space-y-6 mb-5" >
        <p className="text-lg md:text-2xl font-semibold">
          Donate Ease Specially Created for
        </p>
        <h2 className="text-xl  md:text-5xl font-semibold">
          Charity, Nonprofit, Fundraising & Crowdfunding
        </h2>
        <button className="btn-primary">Contact now</button>
      </div>
      {/* Hero Image */}
      <div>
        <img
          src="https://www.thknh.org.sg/wp-content/uploads/2021/10/Donation-in-kind-1-scaled-e1635155009580.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
