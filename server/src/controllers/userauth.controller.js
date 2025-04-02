import AsyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";

import bcrypt from "bcrypt";
import { User } from "../models/Usermodel.js";

const registerUser = AsyncHandler(async (req, res) => {
    const { fullname, password, mobile} = req.body;
    
    // Validate required fields
    const fields = { fullname, password, mobile};
    for (const [key, value] of Object.entries(fields)) {
        if (!value) {
            throw new ApiError(400, `${key} is required`);
        }
    }

    // Check if user already exists
    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
        console.log("User already exists");
        throw new ApiError(400, "User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new user
    const user = new User({
        fullname,
        mobile,
        password: hashedPassword,
    });

    // Save user to database
    const createdUser = await user.save();

    if (!createdUser) {
        console.log("User not created");
        throw new ApiError(500, "Internal Server Error");
    }

    console.log(`User: ${createdUser._id} created successfully`);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: {
            _id: createdUser._id,
            fullname: createdUser.fullname,
            mobile: createdUser.mobile,
        }
    });
});

const loginUser = AsyncHandler(async (req, res) => {
    const { mobile, password } = req.body;
    
    // Validate required fields
    if (!mobile || !password) {
        throw new ApiError(400, "All fields are mandatory");
    }

    // Check if user exists
    const existingUser = await User.findOne({ mobile });
    if (!existingUser) {
        throw new ApiError(404, "User not found");
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
        throw new ApiError(400, "Invalid credentials");
    }

    // Get user details without password
    const user = await User.findById(existingUser._id).select("-password -refreshtoken");
    if (!user) {
        throw new ApiError(500, "Internal Server Error");
    }

    console.log(`User: ${user._id} logged in successfully`);
    
    res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: user
    });
});

export {
    registerUser,
    loginUser
};
