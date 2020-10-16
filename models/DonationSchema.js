import mongoose from "mongoose";

// Example
const DonationSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },
  itemLocation: {
    type: String,
    required: true,
  },
  userAddress: {
    type: String,
    required: true,
  },
  userContactInformation: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    displayName: String,
    email: String,
    photo: String,
    uid: String,
  },
});

export default mongoose.model("Donations", DonationSchema);
