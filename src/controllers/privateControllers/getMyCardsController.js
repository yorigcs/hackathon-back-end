import { ObjectId } from "mongodb";
import mongoDB from "../../database/mongoDB.js";
const getMyCardsController = async (req, res) => {
    const { numLastCards } = req.query;
    const limitCards = Number(numLastCards) || 50;
    const { userId } = res.locals;
    try {
        const lastCards = await mongoDB
            .collection('cards')
            .find({ userId })
            .sort({ $natural: -1 })
            .limit(limitCards)
            .toArray();
        res.send(lastCards);

    } catch (error) {
        console.error(err);
        return res.status(500).send("Houve um erro ao encontrar os cards!")
    }

}

export default getMyCardsController;