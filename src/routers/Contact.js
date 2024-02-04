const express = require("express");
const router = express.Router();
const Contact = require("../controllers/Contact");

router.post("/", Contact.post);

module.exports = router;