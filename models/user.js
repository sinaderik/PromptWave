import { Schema, model, models } from 'mongoose'
import Email from 'next-auth/providers/email'

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exist !"],
        required: [true, "Email is required"]
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
})

// to prevent re-compilation of the model.
// If models.User doesn’t exist, it creates a new model called "User" using the UserSchema.
const User = models.User || model("User", UserSchema);

export default User;