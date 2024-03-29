
import express from "express";
import {ctrlWrapper} from '../../helpers/index.js'
import controllerContacts from "../../controllers/contacts.js";
import {validateId,validateBody} from './../../middlewares/index.js';
const router =express.Router();
router.get('/',ctrlWrapper(controllerContacts.getAll));
router.get('/:id',validateId,ctrlWrapper(controllerContacts.getById));
router.post('/',validateBody,ctrlWrapper(controllerContacts.addContact));
router.put('/:id',validateId,validateBody,ctrlWrapper(controllerContacts.updateById));
router.delete('/:id',validateId,ctrlWrapper(controllerContacts.deleteById));
router.patch('/:id/favorite',validateId,ctrlWrapper(controllerContacts.updateFavoriteById));
export default router; 