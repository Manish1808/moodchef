import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

export const generateRecipe = async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Missing prompt parameter" });
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        res.status(200).json({ recipe: responseText });
    } catch (error) {
        console.error("Error generating recipe:", error);
        res.status(500).json({ error: "Failed to generate recipe" });
    }
};
