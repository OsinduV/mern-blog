import mongoose from "mongoose";

//Schema : kind of rules,conditions for our user

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, //all the users should be unique. mongoDB checks the usernames before adding a new one
    },
    email: {
        type: String,
        required: true,
        unique: true, //all the users should be unique. mongoDB checks the usernames before adding a new one
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    isAdmin:{
        type: Boolean,
        default: false,
    }
}, {timestamps:true}//mongo db auto saving time of create and time of update
);

//model name : first letter capital, mongodb automatically add the s to the name
const User = mongoose.model('User', userSchema);

export default User;