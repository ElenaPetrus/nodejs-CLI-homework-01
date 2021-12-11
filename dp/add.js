const shortid = require("shortid");

const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const add = async (contactData) => {
  const newContact = { ...contactData, id: shortid.generate() };
  const contacts = await getAll();
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = add;
