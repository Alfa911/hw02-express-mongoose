import createError from '../helpers/createError.js';
import Contact from '../models/contact.js';
let controllerContacts = {};
controllerContacts.getAll = async (req, res) => {
    let list = await Contact.find();
    res.json(list)
}
controllerContacts.getById = async (req, res) => {
    const { id } = req.params;
    let result = await Contact.findById(id);
    if (!result) {
        throw createError(404);
    }
    res.json(result)
}
controllerContacts.addContact = async (req, res) => {

    let newModel = new Contact(req.body);
    let result = await newModel.save();
    res.status(201).json(result)
}
controllerContacts.updateById = async (req, res) => {
    const { id } = req.params;
    let result = await Contact.findOneAndUpdate({ "_id": id }, req.body, { new: true });
    if (!result) {
        throw createError(404);
    }
    res.json(result)
}
controllerContacts.deleteById = async (req, res) => {
    const { id } = req.params;
    let result = await Contact.findByIdAndRemove({ "_id": id });
    if (!result) {
        throw createError(404);
    }

    res.json(result)

}
controllerContacts.updateFavoriteById = async (req, res) => {
    const { id } = req.params;
    let { favorite = undefined } = req.body;
    if (favorite === undefined || 'boolean' !==typeof favorite) {
        throw createError(400, "missing field favorite");
    }
    let result = await Contact.findOneAndUpdate({ "_id": id }, { favorite: favorite }, { new: true });
    if (!result) {
        throw createError(404);
    }
    res.json(result)

}
export default controllerContacts;