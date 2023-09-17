exports.CreateProfile=async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"UserLogin"
    })
}

// exports.ReadProfile=async (req,res)=>{
//   let email= req.headers.email
//     return res.status(200).json({
//         success:true,
//         message:"email"
//     })
// }
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

