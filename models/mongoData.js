import mongoose from "mongoose";

const DonationSchema = mongoose.Schema({
  channelName: String,
  donation: [
    {
      itemName: String,
      itemDescription: String,
      itemLocation: String,
      userAddress: String,
      userContactInformation: String,
      image: String,
      user: {
        displayName: String,
        email: String,
        photo: String,
        uid: String,
      },
    },
  ],
});

export default mongoose.model("donations", DonationSchema);
