// const Person = require("./person");

// const person1 = new Person("John Doe", 30);

// // console.log(__dirname, __filename);

// person1.greeting();

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((request, response) => {
  // console.log(request.url)

  //non rest api
  //   if (request.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, contentData) => {
  //         if (err) throw err;
  //         response.writeHead(200, { "Content-Type": "text/html" });
  //         response.end(contentData);
  //       }
  //     );
  //   } else if (request.url === "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "about.html"),
  //       (err, contentData) => {
  //         if (err) throw err;
  //         response.writeHead(200, { "Content-Type": "text/html" });
  //         response.end(contentData);
  //       }
  //     );
  //     //rest api (no html is sent, just json)
  //   } else if (request.url === "/api/users") {
  //     // we would retrieve this from database
  //     const users = [
  //       { name: "Bob Smith", age: 40 },
  //       { name: "Bob Smith", age: 40 },
  //     ];
  //     response.writeHead(200, { "Content-Type": "application/json" });
  //     response.end(JSON.stringify(users));
  //   }

  //Build file path
  let filePath = path.join(
    __dirname,
    "public",
    request.url === "/" ? "index.html" : request.url
  );

  //extension of file
  let extensionName = path.extname(filePath);

  //initial content type
  let contentType = "text/html";

  //check extension and set content type
  switch (extensionName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case "jpg":
      contentType = "image/jpg";
      break;
  }

  //read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      //code for page is not found
      if (err.code == "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, contentData) => {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(contentData, "utf8");
          }
        );
      } else {
        //some server error
        response.writeHead(500);
        response.end(`Server Error: ${err.code}`);
      }
    } else {
      //success
      response.writeHead(200, { "Content-Type": contentType });
      response.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
