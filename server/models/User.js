const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require:true,
        },
        lastName: {
            type: String,
            require:true,
        },
        email: {
            type: String,
            require: true,
            unique:true,
        },
        password: {
            type: String,
            require:true,
        },
        tripList: {
            type: Array,
            default:[],
        },
        wishList: {
            type: Array,
            default:[],
        },
        propertyList: {
            type: Array,
            default:[],
        },
        reservationList: {
            type: Array,
            default:[],
        }
    },
    {timestamps: true}
)

const User = mongoose.model('User', UserSchema)
module.exports = User