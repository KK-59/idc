const mongoose = require('mongoose')
const {Schema, model, Types}=mongoose

const schema = new Schema(
    {
        front:{
            type:String
        },
        back:{
            type:String
        },
        deck:{
            type:Types.ObjectId,
            required:true,
            ref:"decks"
        }
    }
)

module.exports=model("cards", schema)