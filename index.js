const { Command } = require("commander");

const {
  listContacts,
  getById,
  add,
  updateById,
  removeById,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      listContacts();
      break;
    case "get":
      getById(id);
      break;
    case "add":
      add(name, email, phone);
      break;
    case "update":
      updateById(id, name, email, phone);
      break;
    case "remove":
      removeById(id);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);
