const { ctrlWrapper } = require("../helpers");
const contacts = require("./contacts");
const user = require("./user");
const auth = require("./auth");

module.exports = {
  getAllContacts: ctrlWrapper(contacts.getAllContacts),
  getContactById: ctrlWrapper(contacts.getContactById),
  addContact: ctrlWrapper(contacts.addContact),
  deleteContact: ctrlWrapper(contacts.deleteContact),
  updateContact: ctrlWrapper(contacts.updateContact),
  updateStatusContact: ctrlWrapper(contacts.updateStatusContact),
  register: ctrlWrapper(auth.register),
  login: ctrlWrapper(auth.login),
  getCurrent: ctrlWrapper(user.getCurrent),
  logout: ctrlWrapper(auth.logout),
  changeSubscription: ctrlWrapper(user.changeSubscription),
  updateAvatar: ctrlWrapper(user.updateAvatar),
};
