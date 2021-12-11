const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const updateById = require("./updateById");

module.exports = {
  getAll,
  getById,
  add,
  updateById,
};

// const fileOperation = async (action, filePath, data) => {
//   switch (action) {
//     case "read":
//       const dataFile = await fs.readFile(filePath, "utf-8");
//       console.log(dataFile);
//       break;

//     case "add":
//       await fs.appendFile(filePath, data);
//       break;
//     case "replace":
//       await fs.writeFile(filePath, data);
//     default:
//       console.log("Unknown operation");
//   }
// };
// const filePath = "dp/file.txt";
// // fileOperation("read", filePath);
// // fileOperation("add", filePath, " Elena");
// // fileOperation("replace", filePath, "Я все перезаписал");
