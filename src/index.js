const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())

const NoticeController=require("./controllers/notice.controller")
const LoginController=require("./controllers/user.controller")
app.use(express.json())


app.use("/notice",NoticeController)
app.use("/user",LoginController)

module.exports=app

