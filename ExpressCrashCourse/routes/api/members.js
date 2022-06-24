const express = require("express");
const router = express.Router();
const members = require("../../Members");
const uuid = require("uuid");

//ROUTING with express
//gets all members
router.get("/", function (req, res) {
  res.json(members);
});

//get single member
router.get("/:id", (req, res) => {
  //   res.send(req.params.id);

  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `Member not found id of: ${req.params.id}` });
  }
});

//Create Members
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include name and email" });
  }

  members.push(newMember);

  res.json(members);
});

//Update member
router.put("/:id", (req, res) => {
  //   res.send(req.params.id);

  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const updMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;

        res.json({ msg: "Member Updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `Member not found id of: ${req.params.id}` });
  }
});

//Delete member
router.delete("/:id", (req, res) => {
  //   res.send(req.params.id);

  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: "Member deleted",
      members: members.filter(
        (member) => member.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `Member not found id of: ${req.params.id}` });
  }
});
module.exports = router;
