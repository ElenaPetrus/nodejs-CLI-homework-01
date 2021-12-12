const getContactsList = require("./getContactsList");

const listContacts = async () => {
  const contactsListArr = await getContactsList();
  if (contactsListArr) {
    console.table(contactsListArr);
  }
  return;
};

module.exports = listContacts;
