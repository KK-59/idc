const mongoose = require('mongoose')
const {Schema, model, Types}=mongoose

const schema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        userId:{
            type:Types.ObjectId,
            required:true,
            ref:"users"
        }
    }
)

schema.virtual("cards", {
    ref:"cards",
    localField:"_id",
    foreignField:"deck",
    justOne:false
})

module.exports=model("decks", schema)