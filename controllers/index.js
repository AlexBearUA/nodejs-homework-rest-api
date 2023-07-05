const { ctrlWrapper } = require("../helpers");
const contacts = require("./contacts");
const user = require("./user");
const auth = require("./auth");

module.exports = {
  register: ctrlWrapper(auth.register),
  verifyEmail: ctrlWrapper(auth.verifyEmail),
  resendVerifyEmail: ctrlWrapper(auth.resendVerifyEmail),
  login: ctrlWrapper(auth.login),
  logout: ctrlWrapper(auth.logout),
  getCurrent: ctrlWrapper(user.getCurrent),
  changeSubscription: ctrlWrapper(user.changeSubscription),
  updateAvatar: ctrlWrapper(user.updateAvatar),
  getAllContacts: ctrlWrapper(contacts.getAllContacts),
  getContactById: ctrlWrapper(contacts.getContactById),
  addContact: ctrlWrapper(contacts.addContact),
  deleteContact: ctrlWrapper(contacts.deleteContact),
  updateContact: ctrlWrapper(contacts.updateContact),
  updateStatusContact: ctrlWrapper(contacts.updateStatusContact),
};
