import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    user_id: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    is_admin: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

export default UserModel;
