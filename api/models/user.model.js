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
}, {timestamps:true}//mongo db auto saving time of create and time of update
);

//model name : first letter capital, mongodb automatically add the s to the name
const User = mongoose.model('User', userSchema);

export default User;