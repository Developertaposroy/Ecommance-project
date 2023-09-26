const {UserProfileSave} = require("../server/UserService");

exports.CreateProfile=async (req,res)=>{
    let result=  await UserProfileSave(req)
    return res.status(200).json(result)
}


exports.ReadProfile = async (req, res) => {
    try {
        let email = req.headers.email;
        const userProfile = {
            email,
        };

        return res.status(200).json({
            success: true,
            message: "User profile retrieved successfully",
            profile: userProfile
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching the user profile",
            error: error.message
        });
    }
};

exports.UpdateProfile=async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"UserLogin"
    })
}

