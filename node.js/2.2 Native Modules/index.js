// const fs = require("fs");

// fs.writeFile("message.txt", "Hello M!!", (err) => {
//     if (err) {
//         console.error("Error saving the file:", err);
//         return;
//     }
//     console.log("The file has been saved successfully!");
// });

const fs = require('fs');

try {
  const data = fs.readFileSync('./message.txt','utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}