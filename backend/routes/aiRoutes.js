const express = require("express");

const { GoogleGenAI } = require("@google/genai")  //gemini SDK

const router = express.Router();

const ai = new GoogleGenAI({                //genimi client creation
    apiKey: process.env.GEMINI_API_KEY,
});

router.get("/test", async (req, res) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: "i have salary 15k , how much i save",
        });

        res.status(200).json({
            success: true,
            message: response.text,
        });

    } catch (error) {
        console.error("Gemini Error:", error);

        res.status(500).json({
            success: false,
            message: "AI request failed",
        });
    }
});



module.exports = router;