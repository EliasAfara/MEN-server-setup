import express from "express";
const router = express.Router();
import RequestDonation from "../models/requestDonationSchema.js";

// Get all donation requests (find)
router.get(
  "/",
  async (req, res) => res.status(200).send("Request List")
  // {
  //   try {
  //     const request = await RequestDonation.find();
  //     res.json(request);
  //   } catch (err) {
  //     res.json({ message: err });
  //   }
  // }
);

// Post a donation request
router.post("/post/newRequest", async (req, res) => {
  const request = new RequestDonation({
    itemName: req.body.itemName,
    itemDescription: req.body.itemDescription,
    userAddress: req.body.userAddress,
    userContactInformation: req.body.userContactInformation,
    user: req.body.user,
  });
  console.log(req.body);
  try {
    const savedDonationRequest = await request.save();
    res.json(savedDonationRequest);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
