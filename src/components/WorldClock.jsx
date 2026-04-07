import React, { useEffect, useState } from "react";

const allCities = [
  { name: "New York", zone: "America/New_York" },
  { name: "London", zone: "Europe/London" },
  { name: "Tokyo", zone: "Asia/Tokyo" },
  { name: "Sydney", zone: "Australia/Sydney" },
  { name: "Abidjan", zone: "Africa/Abidjan" },
  { name: "Accra", zone: "Africa/Accra" },
  { name: "Addis Ababa", zone: "Africa/Addis_Ababa" },
];

function WorldClock() {
  const [time, setTime] = useState(new Date());
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddCity = () => {
    if (!selectedCity) return;

    const city = allCities.find((c) => c.zone === selectedCity);

    if (!cities.some((c) => c.zone === city.zone)) {
      setCities([...cities, city]);
    }
  };

  const formatDate = (date, zone) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: zone,
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center bg-[#C2EEC7] rounded-2xl">
      <h1 className="text-3xl font-bold mb-4">🌍 World Clock</h1>

      {/* Add City */}
      <div className="flex gap-2 justify-center mb-6">
        <select
          onChange={(e) => setSelectedCity(e.target.value)}
          className="border p-2 rounded bg-amber-50"
        >
          <option value="">Select City</option>
          {allCities.map((city, index) => (
            <option key={index} value={city.zone}>
              {city.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleAddCity}
          className="bg-blue-400 text-white px-4 rounded"
        >
          Add
        </button>
      </div>


      {/* Local Time */}
      <div className="mb-6 p-4 bg-gray-100 rounded-xl">
        <h2 className="font-semibold">📍 My Time</h2>
        <p className="text-2xl font-bold">
          {time.toLocaleTimeString()}
        </p>
        <p className="text-gray-500">
          {formatDate(time)}
        </p>
      </div>



      {/* Cities */}
      <div className="space-y-4">
        {cities.map((city, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-xl">
            <h3 className="font-semibold">{city.name}</h3>

            <p className="text-xl text-blue-600">
              {time.toLocaleTimeString("en-US", {
                timeZone: city.zone,
              })}
            </p>

            <p className="text-gray-500">
              {formatDate(time, city.zone)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorldClock;