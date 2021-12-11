const contactsOperations = require("./dp");

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "getAll":
        const contacts = await contactsOperations.getAll();
        console.log(contacts);
        break;
      case "getById":
        const contact = await contactsOperations.getById(id);
        console.log(contact);
        break;
      case "add":
        const newContact = await contactsOperations.add({ name, email, phone });
        console.log(newContact);
        break;
      case "updateById":
        const updateContacts = await contactsOperations.updateById({
          id,
          name,
          email,
          phone,
        });
        console.log(updateContacts);
        break;
      default:
        console.log("Unknown operation");
    }
  } catch (error) {
    console.log(error.message);
  }
};

// // invokeAction({action:"getAll"});

// const id="3"
// invokeAction({ action: "getById", id });

// const contactData = {
//   name: "Elena Bird",
//   email: "bird@vestibul.co.uk",
//   phone: "(999) 915-3892",
// };
// invokeAction({ action: "add", ...contactData });

// const updateData = {
//   name: "Alec Howard",
//   email: "alec@gmail.com",
//   phone: "(048) 200-0000",
// };
// const updateId = "10";
// invokeAction({ action: "updateById", ...updateData, id: updateId });
