import React, { useEffect, useState } from "react";
import api from "/src/api/interceptor";
const Votings = () => {
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    api
      .get("/votes")
      .then((res) => setVotes(res.data.data))
      .catch((err) => console.log(err));
  }, []);
 

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Sr. No.</th>
              <th className="py-3 px-6 text-left">Candidate</th>
              <th className="py-3 px-6 text-left">Voter</th>
              <th className="py-3 px-6 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {votes && votes.map((vote,index) => (
              <tr
                key={vote._id}
                className="border-b border-gray-300 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{++index}</td>
                <td className="py-3 px-6 text-left">{vote.candidate.name}</td>
                <td className="py-3 px-6 text-left">{vote.user.username}</td>
                <td className="py-3 px-6 text-left">{vote.createdAt}</td>
     
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Votings;
