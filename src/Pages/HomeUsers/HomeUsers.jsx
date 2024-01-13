import { useEffect, useState } from "react";

const HomeUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //   fetching data from mock api

    fetch("./users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // filtering max 9 user at a time for the home page
  const homeUsers = users.slice(0, 9);
  //   console.log(homeUsers);
  return (
    <div>
      <h2 className=" text-center mt-10 font-bold text-4xl text-[#33547D]">
        Our Users
      </h2>
      <div className=" p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* for the initial load, if user get the data will load  */}
        {users &&
          homeUsers.map((user) => (
            <div key={user.id} className="card bg-[#77B7DD] hover:bg-[#33547D] hover:text-white">
              <div className="card-body ">
                <h2 className="card-title">Name: {user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <div className="card-actions justify-end">
                  <button className="btn">Show More</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeUsers;
