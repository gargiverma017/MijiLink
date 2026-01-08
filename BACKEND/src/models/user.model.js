import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    type: String,
    required: false,
    default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
  },
});

//to compare the password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//to remove password from the response in console
userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.__v;
    return ret;
  },
});

//to bycrypt the password before saving it
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

function getGravatarUrl(email) {
  const hash = require('crypto')
    .createHash('md5')
    .update(email.trim().toLowerCase())
    .digest('hex');

  return `https://www.gravatar.com/avatar/${hash}?d=mp`;
}

const User = mongoose.model("User", userSchema);

export default User;