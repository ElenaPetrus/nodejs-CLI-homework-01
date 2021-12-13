const getContactsList = require("./getContactsList");

async function getContactById(id) {
  try {
    const contacts = await getContactsList();
    const result = contacts.find((item) => item.id === id);
    if (!result) {
      return null;
    }
    return console.table(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = getContactById;
