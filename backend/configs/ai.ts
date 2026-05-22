// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//     apiKey: process.env.GEMINI_API_KEY as string
// })

// export default ai;


import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenAI } from "@google/genai";
// console.log(process.env.GOOGLE_CLOUD_PROJECT);
const ai = new GoogleGenAI({
  vertexai: true,
  project: process.env.GOOGLE_CLOUD_PROJECT,
  location: "us-east5",
});

export default ai;