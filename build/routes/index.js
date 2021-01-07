"use strict";
/*
FileName : Index.js
Date : 4th Sep 2019
Description : This file consist of list of routes for the APIs
*/
/* DEPENDENCIES */
const express = require("express");
const router = express.Router();
const homeCtrl = require("./../controllers/home");
router.get("/", homeCtrl.get);
module.exports = router;
