const Leaderboards = () => {
  const data = [
    {
      id: "00156G",
      name: "Mursalin Hossain",
      donationAmount: "8000",
      cityCode: "DHK",
    },
    {
      id: "00234A",
      name: "Sarah Johnson",
      donationAmount: "5000",
      cityCode: "NYC",
    },
    {
      id: "00389B",
      name: "Alex Rodriguez",
      donationAmount: "12000",
      cityCode: "LAX",
    },
    {
      id: "00472C",
      name: "Emily White",
      donationAmount: "3000",
      cityCode: "CHI",
    },
    {
      id: "00561D",
      name: "John Smith",
      donationAmount: "10000",
      cityCode: "SFO",
    },
    {
      id: "00628E",
      name: "Aisha Khan",
      donationAmount: "7000",
      cityCode: "ISB",
    },
    {
      id: "00743F",
      name: "Michael Brown",
      donationAmount: "9000",
      cityCode: "ATL",
    },
    {
      id: "00897G",
      name: "Lily Davis",
      donationAmount: "6000",
      cityCode: "LON",
    },
    {
      id: "00914H",
      name: "Ryan Anderson",
      donationAmount: "11000",
      cityCode: "MIA",
    },
    {
      id: "01032I",
      name: "Sophia Patel",
      donationAmount: "4000",
      cityCode: "DEL",
    },
    {
      id: "01125J",
      name: "David Wilson",
      donationAmount: "7500",
      cityCode: "TOR",
    },
    {
      id: "01249K",
      name: "Emma Lee",
      donationAmount: "9500",
      cityCode: "SYD",
    },
    {
      id: "01358L",
      name: "Christopher Chen",
      donationAmount: "8200",
      cityCode: "HKG",
    },
    {
      id: "01476M",
      name: "Grace Taylor",
      donationAmount: "5000",
      cityCode: "RIO",
    },
    {
      id: "01584N",
      name: "Daniel Garcia",
      donationAmount: "8800",
      cityCode: "BCN",
    },
    {
      id: "01693O",
      name: "Olivia Moore",
      donationAmount: "6500",
      cityCode: "PAR",
    },
    {
      id: "01747P",
      name: "Matthew Brown",
      donationAmount: "12000",
      cityCode: "BER",
    },
    {
      id: "01862Q",
      name: "Ella Johnson",
      donationAmount: "3000",
      cityCode: "AMS",
    },
    {
      id: "01975R",
      name: "Jackson Davis",
      donationAmount: "9700",
      cityCode: "DUB",
    },
    {
      id: "02081S",
      name: "Isabella Martinez",
      donationAmount: "5500",
      cityCode: "MEX",
    },
  ];

  const sortedData = [...data].sort(
    (a, b) => parseInt(b.donationAmount) - parseInt(a.donationAmount)
  );
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-semibold mb-6 text-blue-600">Leaderboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-blue-200 rounded">
          <thead className="bg-blue-200">
            <tr>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Donation Amount</th>
              <th className="py-2 px-4 border-b text-left">City Code</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={item.id} className="hover:bg-blue-100">
                <td className="py-2 px-4 border-b text-left ">
                  {item.name} {index < 3 && " 👑"}
                </td>
                <td className="py-2 px-4 border-b text-left">
                  {item.donationAmount}
                </td>
                <td className="py-2 px-4 border-b text-left">
                  {item.cityCode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboards;
