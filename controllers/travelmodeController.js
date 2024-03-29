import travelmodes from "../models/travelmodes.js";

export const t_modes = async (req, res) => {
  const inputCity = req.query.city;
  console.log(req);
  const regex = new RegExp(`^${inputCity}`, "i");

  try {
    const results = await travelmodes.find({ to_place: regex });
    console.log(results)
    res.json(results);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};
