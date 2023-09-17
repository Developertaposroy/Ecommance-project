const UserModel = require("../../models/UserModel");
const UserOtpService =async (code,email,DataModule)=>{

    await DataModule.updateOne(
        {email:email}, {$set:{otp:code}}, {upsert:true})
}

module.exports=UserOtpService