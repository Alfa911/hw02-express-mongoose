import mongoose from "mongoose";
import { createError } from '../helpers/index.js'
const { isValidObjectId } = mongoose;
const isValidId = (req, res, next) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
        return next(createError(404))
    }
    next();
}
export default isValidId;