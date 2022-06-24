// const { application } = require("express");
const express = require("express");
const path = require("path");
// const { nextTick } = require("process");
// const members = require("./Members");
const app = express();
const logger = require("./middleware/logger");
const memberRoutes = require("./routes/api/members");
const exphbs = require("express-handlebars");
//middleware

//NODE
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

//init middleware
// app.use(logger);

// //ROUTING with express
// //gets all members
// app.get("/api/members", function (req, res) {
//   res.json(members);
// });

// //get single member
// app.get("/api/members/:id", (req, res) => {
//   //   res.send(req.params.id);

//   const found = members.some((member) => member.id === parseInt(req.params.id));

//   if (found) {
//     res.json(members.filter((member) => member.id === parseInt(req.params.id)));
//   } else {
//     res.status(400).json({ msg: `Member not found id of: ${req.params.id}` });
//   }
// });

//Handlebars Middleware
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//homepage route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
  })
);

//set Static Folder EXPRESS
app.use(express.static(path.join(__dirname, "public")));

//Members API Routes
app.use("/api/members", memberRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
