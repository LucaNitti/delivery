"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors");
require("dotenv/config");
var express = require("express");
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var PORT = process.env.PORT || 3001;
app.get('/api', function (_req, res) {
    res.status(200).json({ message: 'Hello from the server!' });
});
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
