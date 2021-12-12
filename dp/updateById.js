const updateContacts = require("./updateContacts");
const getContactsList = require("./getContactsList");

const updateById = async ({ id, name, email, phone }) => {
  const contacts = await getContactsList();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { id, name, email, phone };
  await updateContacts(contacts);
  console.table(contacts);
  return contacts[idx];
};

module.exports = updateById;
