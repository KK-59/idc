const cardModel = require('../models/card')

/* const test = (req, res)=> {
    res.send("server has responded")
} */

const newCard = async(req, res) => {
    const {front, back, deck}=req.body

    if (!front || !back || !deck) {
        return res.status(404).json({message:"front and back required"})
    }

    const card = await cardModel.create({front, back, deck})
    console.log("successfully created card")
    res.status(200).json(card)

}

module.exports = {newCard}