const Footer = () => {
  return (
    <div className="  py-8  border-t container">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <div className=" flex flex-col justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfz4gBB6dnwQ-nq1etaQI-dTIKXoiNPheAw&usqp=CAU"
            alt="Logo"
            className="h-10 object-scale-down rounded-full"
          />
          <h1>Donate Ease</h1>
        </div>
        <div className="mb-4 lg:mb-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fb/UNICEF_Logo_%28cropped%29.png"
            alt="Logo"
            className="h-10 rounded-full"
          />
          <h1>UNICEF</h1>
        </div>
        <div className="mb-4 lg:mb-0 flex justify-center flex-col">
          <img
            src="https://seeklogo.com/images/G/govt-of-bangladesh-logo-065AA3B482-seeklogo.com.png"
            alt="Logo"
            className="h-10 rounded-full object-contain"
          />
          <h1>Bangladesh Govt</h1>
        </div>
        <div className="mb-4 lg:mb-0 flex justify-center flex-col">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FAO_logo.svg/1200px-FAO_logo.svg.png"
            alt="Logo"
            className="h-10 rounded-full object-contain"
          />
          <h1>FAO</h1>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row lg:space-x-16">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Company Info</h3>
            <p>123 Main Street</p>
            <p>Dhaka, Bangladesh</p>
            <p>Phone: +880 123 456 789</p>
            <p>Email: info@example.com</p>
          </div>

          {/* Services */}
          <div className="mt-4 lg:mt-0">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul>
              <li>Donations</li>
              <li>Volunteer Opportunities</li>
              <li>Events</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t">
        <p className="text-sm opacity-75 pt-4">
          &copy; {new Date().getFullYear()} Your Organization. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
