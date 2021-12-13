const shortid = require("shortid");

const getContactsList = require("./getContactsList");
const updateContacts = require("./updateContacts");

async function addContact(name, email, phone) {
  try {
    const newContact = { id: shortid.generate(), name, email, phone };
    const contacts = await getContactsList();
    contacts.push(newContact);
    await updateContacts(contacts);
    console.table(contacts);
    return newContact;
  } catch (error) {
    console.log(error);
  }
}

module.exports = addContact;
