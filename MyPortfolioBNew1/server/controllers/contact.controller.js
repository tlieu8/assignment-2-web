import Contact from '../models/contact.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

// Create a new contact
const create = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    return res.status(201).json({ message: 'Successfully created!', contact });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Get a list of all contacts
const list = async (req, res) => {
  try {
    const contacts = await Contact.find().select('firstname lastname email');
    return res.json(contacts);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Middleware to find a contact by ID
const contactByID = async (req, res, next, id) => {
  try {
    const contact = await Contact.findById(id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    req.contact = contact;
    next();
  } catch (err) {
    return res.status(400).json({ error: 'Could not retrieve contact' });
  }
};

// Get a single contact (read)
const read = (req, res) => {
  return res.json(req.contact);
};

// Update a contact by ID
const update = async (req, res) => {
  try {
    let contact = req.contact;
    contact = extend(contact, req.body);
    contact.updated = Date.now();
    await contact.save();
    return res.json(contact);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Delete a contact by ID
const remove = async (req, res) => {
  try {
    await req.contact.deleteOne();
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Delete all contacts
const deleteAllContacts = async (req, res) => {
  try {
    await Contact.deleteMany();
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// Exporting all methods
export default {
  create,
  list,
  contactByID,
  read,
  update,
  remove,
  deleteAllContacts,
};
