const deckModel = require('../models/deck')

/* const test = (req, res)=> {
    res.send("server has responded")
} */

const newDeck = async(req, res) => {
    const {name, userId}=req.body

    if (!name || !userId) {
        return res.status(404).json({message:"deck name required"})
    }

    const deck = await deckModel.create({name, userId})
    console.log("successfully created deck")
    res.status(200).json(deck)
    

}

module.exports = {newDeck}