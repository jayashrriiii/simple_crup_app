

const attenModel = require("../model/studentModel");      //import model


var IndexController = {
                          //display main page (table)
                          getHomeView: async function (req, res) 
                                       {
                                            var result = await attenModel.find({});
                                            res.render("index", { list: result });
                                       },

                          //go to save page
                          savePage: function (req, res) 
                                    {
                                        res.render("save");
                                    },

                          //save new student and go to table page
                          saveNewStudent: async function (req, res) 
                                          {
                                            var data = req.body;
                                            var atten = new attenModel ({
                                                stud_name: data.studName,
                                                stud_gen: data.studGen,
                                                stud_email: data.studEmail,
                                                stud_con: data.studCon
                                            });
                                            try 
                                            {
                                                var result = await atten.save();
                                                res.redirect("/");
                                            } 
                                            catch (error) 
                                            {
                                                res.status(500).send({ call: 0, data: error });
                                            }
                                          },


                          //delete student and stay on that (table) page
                          deleteStudent: async function (req, res) 
                                         {
                                              var delete_id = req.params.id;
                                              var result = await attenModel.deleteOne({ _id: delete_id });
                                              if (result.deletedCount > 0) 
                                              {
                                                  res.redirect("/");
                                              } 
                                              else 
                                              {
                                                  res.send({ call: "0", message: "Unable to delete" });
                                              }
                                          },

                          //go to update page
                          editStudentView: async function (req, res) 
                                           {
                                              var edit_id = req.params.id;
                                              var result = await attenModel.findById(edit_id);
                                              res.render("edit", {student: result});
                                           },

                          //update student and go to table page
                          updateStudent: async function (req, res) 
                                         {
                                             var updateData = req.body;
                                             var result = await attenModel.updateOne({'_id': updateData.studentId}, {$set: {stud_name: updateData.studName, stud_gen: updateData.studGen, stud_email: updateData.studEmail, stud_con: updateData.studCon}});
                                             res.redirect("/");
                                         },
                      };


                      

module.exports = IndexController;

