import express from "express";
const router = express.Router();
import Donation from "../models/DonationSchema.js";

// Get all donations (find)
router.get(
  "/",
  async (req, res) => res.status(200).send("Donations List")
  // {
  //   try {
  //     const donations = await Donation.find();
  //     res.json(donations);
  //   } catch (err) {
  //     res.json({ message: err });
  //   }
  // }
);

// Post a donation
router.post("/post/newDonation", async (req, res) => {
  const donation = new Donation({
    itemName: req.body.itemName,
    itemDescription: req.body.itemDescription,
    itemLocation: req.body.itemLocation,
    userAddress: req.body.userAddress,
    userContactInformation: req.body.userContactInformation,
    image: req.body.image,
    user: req.body.user,
  });
  console.log(req.body);
  try {
    const savedDonation = await donation.save();
    res.json(savedDonation);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
