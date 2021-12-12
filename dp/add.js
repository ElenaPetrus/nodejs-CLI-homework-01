const shortid = require("shortid");

const getContactsList = require("./getContactsList");
const updateContacts = require("./updateContacts");

const add = async (data) => {
  const newContact = { ...data, id: shortid.generate() };
  const contacts = await getContactsList();
  contacts.push(newContact);
  await updateContacts(contacts);
  console.table(contacts);
  return newContact;
};

module.exports = add;
