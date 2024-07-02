import Candidate from "../model/candidate.model";
import Vote from "../model/vote.model";
export const addCandidate = async (req, res) => {
  try {
    const { name, about } = req.body;
    const created = await Candidate.create({ name, about });
    if (created) {
      return res.status(201).json({
        message: "Candidate created successfully",
        json: created,
      });
    }
    return res.status(400).json({
      message: "Something went wrong",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getCandidates = async (req, res) => {
  try {
    const user = req.user;
    const voted = await Vote.findOne({ user: user.id });
    if (voted) {
      return res.status(200).json({
        message: "You already voted",
      });
    }
    const candidates = await Candidate.find();
    if (candidates) {
      return res.status(200).json({
        message: "Candidates",
        data: candidates,
      });
    }
    return res.status(400).json({ message: "Something went wrong" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getCandidate = async (req, res) => {
  try {
    const id = req.params.id;
    const candidate = await Candidate.findOne({ _id: id });
    if (candidate) {
      return res.status(200).json({
        message: "Candidate",
        data: candidate,
      });
    }
    return res.status(400).json({ message: "Something went wrong" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateCandidate = async (req, res) => {
  try {
    const { name, about } = req.body;
    const id = req.params.id;
    const updated = await Candidate.updateOne(
      { _id: id },
      { $set: { name: name, about: about } }
    );
    if (updated.matchedCount > 0) {
      return res.status(200).json({
        message: "Updated",
      });
    }
    return res.status(400).json({ message: "Something went wrong" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteCandidate = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Candidate.deleteOne({ _id: id });
    if (deleted.deletedCount > 0) {
      return res.status(200).json({
        message: "Deleted",
      });
    }
    return res.status(400).json({ message: "Something went wrong" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
