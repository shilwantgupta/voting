import React, { useEffect, useState } from "react";
import api from "/src/api/interceptor";
import RadioButton from "../components/RadioButton";
const Voting = () => {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState({ message: "", color: "red" });
  const [candidate, setCandidate] = useState("");
  useEffect(() => {
    api.get("/candidates").then((res) => {
      const data = res.data;
      if (data.success) {
        setCandidates(data.data);
      } else {
        setError({ ...error, message: data.message });
      }
    });
  }, []);
  const onChangeHandler = (e) => {
    setCandidate(e.target.value);
  };
  const onVote = () => {
    api
      .post("/vote", { candidate })
      .then((res) => {
        const { success, message } = res.data;
        setError({
          message: message,
          color: success ? "green" : "red",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-md">
          {error.message ? (
            <div
              className={`bg-${error.color}-100 border border-${error.color}-400 text-${error.color}-700 px-4 py-3 rounded relative`}
              role="alert"
            >
              <strong className="font-bold flex items-center justify-between">
                {error.message}
              </strong>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center">
                Vote one Candidate
              </h2>
              <ul className="list-none">
                {candidates &&
                  candidates?.map((candidate) => {
                    return (
                      <li className="text-gray-800 mb-2" key={candidate._id}>
                        <RadioButton
                          id={candidate._id}
                          name="candidate"
                          onChange={onChangeHandler}
                          value={candidate._id}
                          label={candidate.name}
                        />
                      </li>
                    );
                  })}
              </ul>

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={onVote}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Vote
                </button>
              </div>
            </>
          )}
      
        </div>
      </div>
    </>
  );
};

export default Voting;
