const mongoose=require("mongoose")

const noticeSchema= new mongoose.Schema(
    {
      text: {type: String, required:true,maxlength: 100},
      userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user", required:true
        },
        name:String
    },
    {
      versionKey: false,
      timestamps: true, 
    }
  );

  const noticeData=mongoose.model("notice", noticeSchema)
  module.exports=noticeData