const mongoose = require('mongoose')
const {Schema, model, Types}=mongoose

const schema = new Schema(
    {
        username:{
            type:String,
            unique:true,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

schema.virtual("decks", {
    ref:"decks",
    localField:"_id",
    foreignField:"user",
    justOne:false
})

module.exports=model("users", schema)