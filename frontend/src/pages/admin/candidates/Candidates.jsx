import React, { useEffect, useState } from "react";
import api from "/src/api/interceptor";
const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    api
      .get("/candidates")
      .then((res) => setCandidates(res.data.data))
      .catch((err) => console.log(err));
  }, []);
 

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Sr. No.</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Vote Count</th>
              <th className="py-3 px-6 text-left">About</th>
              <th className="py-3 px-6 text-left">Sign</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {candidates && candidates.map((candidate,index) => (
              <tr
                key={candidate._id}
                className="border-b border-gray-300 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{++index}</td>
                <td className="py-3 px-6 text-left">{candidate.name}</td>
                <td className="py-3 px-6 text-left">{candidate.count}</td>
                <td className="py-3 px-6 text-left">{candidate.about?candidate.about:'-'}</td>
                <td className="py-3 px-6 text-left">{candidate.sign?candidate.sign:'-'}</td>
     
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Candidates;
