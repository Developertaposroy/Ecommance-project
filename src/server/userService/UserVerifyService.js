
const UserVerifyService = async (code, email, DataModel) => {
    if (code===0){
        return 0;
    }
    else {
        const count = await DataModel.countDocuments({ email: email, otp: code });
        console.log(count);
        return count;
    }

};

 module.exports=UserVerifyService


