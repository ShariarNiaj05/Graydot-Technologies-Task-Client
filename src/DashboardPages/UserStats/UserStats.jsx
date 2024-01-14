import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const UserStats = () => {
  const [userCount, setUserCount] = useState(null);
  const [userData, setUserData] = useState([]);
  const [selectedUserType, setSelectedUserType] = useState("phone");

  useEffect(() => {
    fetch("https://graydot-technologies-task-server.vercel.app/all-users")
      .then((res) => res.json())
      .then((data) => setUserCount(data.usersCount));
  }, []);

  useEffect(() => {
    fetch("https://graydot-technologies-task-server.vercel.app/all-users")
      .then((res) => res.json())
      .then((data) => setUserData(data.result));
  }, []);

  const handleSelectChange = (e) => {
    // Update the selectedUserType state when the option changes
    setSelectedUserType(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Selected User Type:", selectedUserType);
  };
  return (
    <div>
      <marquee direction="right">
        <h2 className=" font-bold text-3xl">
          Total Users: <span className=" text-[#33547D]">{userCount}</span>
        </h2>
      </marquee>

      <p className=" mt-5 mb-3 font-bold">
        Select Option to View Different Data!
      </p>
      <form className=" border-[#33547D]" onSubmit={handleForm}>
        <select
          id="userType"
          name="userType"
          onChange={handleSelectChange}
          value={selectedUserType}
        >
          <option value="phone">Phone</option>
          <option value="website">Website</option>
          <option value="email">Email</option>
        </select>
        <button
          className="bg-[#33547D] text-white p-3 rounded-xl"
          type="submit"
        >
          Submit
        </button>
      </form>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={userData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={selectedUserType} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={selectedUserType}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserStats;
