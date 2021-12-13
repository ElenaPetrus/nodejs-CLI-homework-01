const getContactsList = require("./getContactsList");

const listContacts = async () => {
 try { const contactsListArr = await getContactsList();
  if (contactsListArr) {
    console.table(contactsListArr);
  }
  return;
}catch (error) {
  console.log(error);
}
};

module.exports = listContacts;
