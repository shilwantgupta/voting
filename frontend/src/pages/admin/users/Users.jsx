import React, { useEffect, useState } from "react";
import api from "/src/api/interceptor";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api
      .get("/users")
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Sr. No.</th>
              <th className="py-3 px-6 text-left">Username</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Is_Voted</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users &&
              users.map((user, index) => (
                <tr
                  key={user._id}
                  className="border-b border-gray-300 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{++index}</td>
                  <td className="py-3 px-6 text-left">{user.username}</td>
                  <td className="py-3 px-6 text-left">{user.email}</td>
                  <td className="py-3 px-6 text-left">{user.phone}</td>
                  <td className="py-3 px-6 text-left">{user.role}</td>
                  <td className="py-3 px-6 text-left">
                    {user.isVoted ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
