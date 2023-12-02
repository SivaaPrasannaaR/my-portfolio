import mongoose, { Schema, Document } from "mongoose"

export interface IUser extends Document {
  name: string
  email: string
  password: string
  role: string
}

const userSchema: Schema = new Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: String,
})

const UserModel = mongoose.model<IUser>("User", userSchema)
export default UserModel
