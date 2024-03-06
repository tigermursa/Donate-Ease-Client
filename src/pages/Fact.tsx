const Fact = () => {
  return (
    <div>
      {/* Section Facts */}
      <section>
        {/* Facts Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* Facts Title */}
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            Our Achievements
          </h2>
          <p className="mx-auto mb-10 mt-4 max-w-lg text-center text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
          {/* Facts Content */}
          <div className="mx-auto grid max-w-4xl gap-6 bg-[#f2f2f7] rounded-2xl mt-10 px-16 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Facts Item */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm  text-blue-500 uppercase">Village</p>
              <h4 className="text-2xl font-bold text-[#276ef1] md:text-3xl">
                200+
              </h4>
            </div>
            {/* Facts Item */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-blue-500 uppercase">OFFICES</p>
              <h4 className="text-2xl font-bold text-[#276ef1] md:text-3xl">
                45
              </h4>
            </div>
            {/* Facts Item */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-blue-500 uppercase">DONAR</p>
              <h4 className="text-2xl font-bold text-[#276ef1] md:text-3xl">
                1500+
              </h4>
            </div>
            {/* Facts Item */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-blue-500 uppercase">COMPANIES</p>
              <h4 className="text-2xl font-bold text-[#276ef1] md:text-3xl">
                890+
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fact;
