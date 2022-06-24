const fs = require("fs");
const path = require("path");

//Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
//   if (err) throw err;
//   console.log("folder created...");
// });

//Create and write to file
//if already created it will overwrite previous file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World",
//   function (err) {
//     if (err) throw err;
//     console.log("File created and written to");

//     //append file
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "I love Node.js",
//       function (err) {
//         if (err) throw err;
//         console.log("File created and written to");
//       }
//     );
//   }
// );

//read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//rename file
// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "helloworld.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("File renamed...");
//   }
// );
