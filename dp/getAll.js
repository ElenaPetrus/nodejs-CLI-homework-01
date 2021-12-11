const fs = require("fs/promises");
const contactsPath = require("./contactPath");

const getAll = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAll;
