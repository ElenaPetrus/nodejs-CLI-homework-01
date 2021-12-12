const getContactsList = require("./getContactsList");
const undateContacts = require("./updateContacts");

const removeById = async (id) => {
  const contacts = await getContactsList();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const removeContacts = contacts.splice(idx, 1);
  await undateContacts(contacts);
  console.table(contacts);
  return removeContacts;
};
module.exports = removeById;
