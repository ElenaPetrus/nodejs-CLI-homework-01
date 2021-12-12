const getContactsList = require("./getContactsList");

const getById = async (id) => {
  const contacts = await getContactsList();
  const result = contacts.find((item) => item.id === id);
  if (!result) {
    return null;
  }
  return console.table(result);
};

module.exports = getById;
