


var express = require("express");
var router = express.Router();

var IndexController = require("../application/controller/indexController");  //import controller


//display registration form
router.get("/", IndexController.getHomeView);

//go to save page
router.get("/save", IndexController.savePage);

//save data
router.post("/save-new-student", IndexController.saveNewStudent);

//delete student and stay on that (table) page
router.get("/delete/:id", IndexController.deleteStudent);

//go to update page
router.get("/update/:id", IndexController.editStudentView);

//update student and go to table page
router.post("/update-data", IndexController.updateStudent);





module.exports = router;