const getContactsList = require("./dp/getContactsList");
const getContactById = require("./dp/getContactById");
const addContact = require("./dp/addContact");
const updateById = require("./dp/updateById");
const removeContact = require("./dp/removeContact");
const listContacts = require("./dp/listContacts");

module.exports = {
  getContactsList,
  listContacts,
  getContactById,
  addContact,
  updateById,
  removeContact,
};

// /*
//  * Раскомментируй и запиши значение
//  * const contactsPath = ;
//  */

// // TODO: задокументировать каждую функцию
// function getContactsListContacts() {
//   // ...твой код
// }

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContactContact(name, email, phone) {
//   // ...твой код
// }
