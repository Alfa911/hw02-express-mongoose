import { createError } from '../helpers/index.js'
import Contact from '../models/contact.js';
const validateBody = (req, res, next) => {
    let newContact=new Contact(req.body);
    let error = newContact.validateSync();
    if (error) {
        for (var field in error.errors) {
            let erorrField = error.errors[field];
            if (erorrField.kind === 'required') {
                next(createError(400, `missing required ${field} field`));
            } else {
                next(createError(400, erorrField.message));
            }

        }
    }
    next();
}
export default validateBody;