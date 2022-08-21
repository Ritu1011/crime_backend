const express =require("express")

const { body, validationResult } = require("express-validator");
const User=require("../models/user.model")

const router=express.Router()

router.get("", async (req, res) => {
    try {
      const user = await User.find().lean().exec();
      return res.status(200).send(user); 
    } catch (err) {
      return res
        .status(500)
        .send({ message:err.message });
    }
  });
  
  router.post("", 
  body("name")
    .not()
    .isEmpty()
    .withMessage("name is required")
    .custom((value) => {
      const passw =/^[a-z0-9]+$/i;
      if (!value.match(passw)) {
        throw new Error(
          "name should be alphanumeric."
        );
      }
      return true;
    })
    ,
  async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let newErrors;
            newErrors = errors.array().map((err) => {
              console.log("err", err);
      
              return { key: err.param, message: err.msg };
            });
            return res.status(400).send({ errors: newErrors });
          }
      const user = await User.create(req.body);
      return res.status(201).send(user );
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  

  
module.exports=router