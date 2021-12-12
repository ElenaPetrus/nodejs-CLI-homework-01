const getContactsList = require("./dp/getContactsList");
const getById = require("./dp/getById");
const add = require("./dp/add");
const updateById = require("./dp/updateById");
const removeById = require("./dp/removeById");
const listContacts = require("./dp/listContacts");

module.exports = {
  getContactsList,
  listContacts,
  getById,
  add,
  updateById,
  removeById,
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

// function addContact(name, email, phone) {
//   // ...твой код
// }
