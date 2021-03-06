const updateContacts = require("./updateContacts");
const getContactsList = require("./getContactsList");

async function updateById({ id, name, email, phone }) {
  try {
    const contacts = await getContactsList();
    const idx = contacts.findIndex((item) => item.id === id);
    if (idx === -1) {
      return null;
    }
    contacts[idx] = { id, name, email, phone };
    await updateContacts(contacts);
    console.table(contacts);
    return contacts[idx];
  } catch (error) {
    console.log(error);
  }
}

module.exports = updateById;
