const ProdsModel=require('../models/prod')
const ObjectId = require('mongoose').Types.ObjectId; 

class ContenedorMongo {

    constructor(model) {
        this.model = model
    }

    async save(obj) {
        const newProduct = new this.model(obj);
        await newProduct.save(ProdsModel)

        return newProduct
    }

    async getByID(id) {
        return this.model.find({_id: new ObjectId(id)})
    }

    async getAll(id) {
        return this.model.find({})
    }

    async editById(obj, id) {
        const objUpdated = await this.model.updateOne(
            { _id: new ObjectId(id)},
            { $set: obj }
        )
        return objUpdated
    }

    async deleteByID(id) {
        const userDelete = await this.model.deleteOne({_id: new ObjectId(id)})
        return true
    }


}

module.exports = ContenedorMongo;
