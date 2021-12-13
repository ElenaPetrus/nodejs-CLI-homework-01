const getContactsList = require("./getContactsList");
const undateContacts = require("./updateContacts");

async function removeContact(id) {
  try {
    const contacts = await getContactsList();
    const idx = contacts.findIndex((item) => item.id === id);
    if (idx === -1) {
      return null;
    }
    const removeContacts = contacts.splice(idx, 1);
    await undateContacts(contacts);
    console.table(contacts);
    return removeContacts;
  } catch (error) {
    console.log(error);
  }
}
module.exports = removeContact;
