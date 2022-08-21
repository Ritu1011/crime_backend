const express =require("express")
const Notice=require("../models/notice.model")

const router=express.Router()

router.get("", async (req, res) => {
    try {
      const notice = await Notice.find().populate('userId')
      return res.status(200).send(notice); 
    } catch (err) {
      return res
        .status(500)
        .send({ message:err.message });
    }
  });
  
  router.post("", async (req, res) => {
    try {
      const notice = await Notice.create(req.body);
      return res.status(201).send(notice );
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  

module.exports=router