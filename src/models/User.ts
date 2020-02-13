import mongoose, { Schema } from "mongoose";
import timestamp from "mongoose-timestamp";

export interface UserModel extends mongoose.Document {
  user_id: string;
  user_pw: string;

  createAt: Date;
  updateAt: Date;
}

const UserSchema: Schema<UserModel> = new Schema({});

UserSchema.plugin(timestamp);

export default mongoose.model<UserModel>("User", UserSchema);
