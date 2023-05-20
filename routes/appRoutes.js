const express = require('express');
const appRoutes = express.Router();
const appController = require('../controller/appController');





appRoutes.get('/',appController.home);
appRoutes.post('/',appController.generateId);
appRoutes.post("/get-uniqueId",appController.getUniqueId);



module.exports = appRoutes