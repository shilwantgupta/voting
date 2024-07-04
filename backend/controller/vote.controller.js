import Candidate from "../model/candidate.model";
import User from "../model/user.model";
import Vote from "../model/vote.model";

export const doVote = async (req, res) => {
  try {
    const candidateid = req.body.candidate;
    const userid = req.user.id;
    const existingUser = await User.findOne({ _id: userid });
    if (existingUser.isVoted) {
      return res.status(200).json({
        message: "You already voted",
        success:false
      });
    }
    const vote = await Vote.create({ candidate: candidateid, user: userid });
    if (vote) {
      await User.updateOne({ _id: userid }, { $set: { isVoted: true } });
      const cand = await Candidate.findOne({ _id: candidateid });
      let count = cand.count + 1;
      await Candidate.updateOne(
        { _id: candidateid },
        { $set: { count: count } }
      );

      return res.status(200).json({
        message: "Thanks for voting!",
        success:true
      });
    }
    return res.status(400).json({ message: "Something went wrong" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const votes = async (req, res) => {
  try {
    const votes = await Vote.find().populate("candidate").populate("user");
    if (votes) {
      return res.status(200).json({
        data: votes,
        message: "Get votes",
      });
    }
    return res.status(400).json({ message: "Something went wrong" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
