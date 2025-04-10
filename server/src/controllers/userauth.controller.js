import AsyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import bcrypt from "bcrypt";
import { User } from "../models/Usermodel.js";

const registerUser = AsyncHandler(async (req, res) => {
    const { fullname, password, confirmPassword } = req.body;

    // Validate input
    const fields = { fullname, password, confirmPassword };
    for (const [key, value] of Object.entries(fields)) {
        if (!value) {
            throw new ApiError(400, `${key} is required`);
        }
    }

    if (password !== confirmPassword) {
        throw new ApiError(400, "Passwords do not match");
    }

    // Check if user already exists (based on fullname for now)
    const existingUser = await User.findOne({ fullname });
    if (existingUser) {
        console.log("User already exists");
        throw new ApiError(400, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        fullname,
        password: hashedPassword,
    });

    await user.save();

    const createdUser = await User.findOne({ fullname }).select("-password -refreshtoken");

    if (!createdUser) {
        console.log("User not created");
        throw new ApiError(500, "Internal Server Error");
    }

    console.log(`User: ${user._id} created successfully`);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: createdUser
    });
});

const loginUser = AsyncHandler(async (req, res) => {
    const { fullname, password } = req.body;

    if (!fullname || !password) {
        throw new ApiError(400, "All fields are mandatory");
    }

    const existingUser = await User.findOne({ fullname });
    if (!existingUser) {
        throw new ApiError(404, "User not found");
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
        throw new ApiError(400, "Invalid credentials");
    }

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
    loginUser,
};
