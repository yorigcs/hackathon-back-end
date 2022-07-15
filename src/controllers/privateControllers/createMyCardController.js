import mongoDB from "../../database/mongoDB.js";

const createMyCardController = async (req, res) => {
    const { cardData } = res.locals;
    try {
        await mongoDB.collection("cards").insertOne(cardData);
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Houve um erro ao criar o card!")
    }
}
export default createMyCardController