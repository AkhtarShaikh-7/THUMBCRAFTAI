import { Request, Response } from "express";
import { GenerateContentConfig, HarmBlockThreshold, HarmCategory } from "@google/genai";
import Thumbnail from "../models/Thumbnail.js";
import ai from "../configs/ai.js";
import path from "path";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import sharp from "sharp";


const stylePrompts = {
  'Bold & Graphic': 'eye-catching thumbnail, bold typography, vibrant colors, expressive facial reaction, dramatic lighting, high contrast, click-worthy composition, professional style',
  'Tech/Futuristic': 'futuristic thumbnail, sleek modern design, digital UI elements, glowing accents, holographic effects, cyber-tech aesthetic, sharp lighting, high-tech atmosphere',
  'Minimalist': 'minimalist thumbnail, clean layout, simple shapes, limited color palette, plenty of negative space, modern flat design, clear focal point',
  'Photorealistic': 'photorealistic thumbnail, ultra-realistic lighting, natural skin tones, candid moment, DSLR-style photography, lifestyle realism, shallow depth of field',
  'Illustrated': 'illustrated thumbnail, custom digital illustration, stylized characters, bold outlines, vibrant colors, creative cartoon or vector art style',
}

const colorSchemeDescriptions = {
  vibrant: 'vibrant and energetic colors, high saturation, bold contrasts, eye-catching palette',
  sunset: 'warm sunset tones, orange pink and purple hues, soft gradients, cinematic glow',
  forest: 'natural green tones, earthy colors, calm and organic palette, fresh atmosphere',
  neon: 'neon glow effects, electric blues and pinks, cyberpunk lighting, high contrast glow',
  purple: 'purple-dominant color palette, magenta and violet tones, modern and stylish mood',
  monochrome: 'black and white color scheme, high contrast, dramatic lighting, timeless aesthetic',
  ocean: 'cool blue and teal tones, aquatic color palette, fresh and clean atmosphere',
  pastel: 'soft pastel colors, low saturation, gentle tones, calm and friendly aesthetic',
}

// export const generateThumbnail = async (req: Request, res: Response) => {
//     try {
//         const { userId } = req.session;
//         const { title, prompt: user_prompt, style, aspect_ratio, color_scheme, text_overlay } = req.body;

//         const thumbnail = await Thumbnail.create({
//             userId,
//             title,
//             prompt_used: user_prompt,
//             user_prompt,
//             style,
//             aspect_ratio,
//             color_scheme,
//             text_overlay,
//             isGenerating: true,
//         })

//         // const model = 'gemini-3-pro-image-preview'
//         const model = 'imagen-3.0-generate-002'

//         const generationConfig: GenerateContentConfig = {
//             maxOutputTokens: 32768,
//             temperature: 1,
//             topP: 0.95,
//             responseModalities: ['IMAGE'],
//             imageConfig: {
//                 aspectRatio: aspect_ratio || '16:9',
//                 imageSize: '1k',
//             },
//             safetySettings: [
//                 { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.OFF },
//                 { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.OFF },
//                 { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.OFF },
//                 { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.OFF }
//             ]
//         }

//         let prompt = `Create a ${stylePrompts[style as keyof typeof stylePrompts]} for: "${title}"`;
//         if (color_scheme) {
//             prompt += `Use a ${colorSchemeDescriptions[color_scheme as keyof typeof colorSchemeDescriptions]} colo scheme.`;
//         }

//         if (user_prompt) {
//             prompt += `Additional details: ${user_prompt}.`
//         }

//         prompt += `The thumbnail should be ${aspect_ratio}, visually stunning, and designed to maximize click-through rate. Make it bold, professional, and impossible to ignore.`

//         // generate the image using the ai model
//         const response: any = await ai.models.generateContent({
//             model,
//             contents:[prompt],
//             config:generationConfig
//         })

//         // response is valid
//         if (!response?.candidates?.[0]?.content?.parts) {
//             throw new Error('Unexpected response')
//         }

//         const parts = response.candidates[0].content.parts;

//         let finalBuffer: Buffer | null = null;

//         for(const part of parts){
//             if (part.inlineData) {
//                 finalBuffer = Buffer.from(part.inlineData.data, 'base64')
//             }
//         }

//         const filename = `final-output-${Date.now()}.png`;
//         const filePath = path.join('image',filename);

//         // create the images directory if it doesnt exist
//         fs.mkdirSync('images', {recursive:true})

//         // write the final image to the file
//         fs.writeFileSync(filePath, finalBuffer!);

//         const uploadResult = await cloudinary.uploader.upload(filePath, {resource_type: 'image'});

//         thumbnail.image_url = uploadResult.url;
//         thumbnail.isGenerating = false;
//         await thumbnail.save();

//         res.json({message: 'Thumbnail Generated', thumbnail})

//         // remove image file from disk

//         fs.unlinkSync(filePath);

//     } catch (error: any) {
//         console.log(error);
//         res.status(500).json({message: error.message});
//     }
// }


// delete thumbnail



export const generateThumbnail = async (req: Request, res: Response) => {
  try {
    const { userId } = req.session;

    const {
      title,
      prompt: user_prompt,
      style,
      aspect_ratio,
      color_scheme,
      text_overlay,
    } = req.body;

    // SAVE DB ENTRY
    const thumbnail = await Thumbnail.create({
      userId,
      title,
      prompt_used: user_prompt,
      user_prompt,
      style,
      aspect_ratio,
      color_scheme,
      text_overlay: true,
      isGenerating: true,
    });

    // RANDOM VIRAL STYLE
    const viralStyles = [
      "MrBeast thumbnail style",
      "Ali Abdaal thumbnail style",
      "Finance viral thumbnail style",
      "Tech YouTube thumbnail style",
      "High CTR thumbnail style",
      "Modern cinematic thumbnail style",
    ];

    const randomStyle =
      viralStyles[Math.floor(Math.random() * viralStyles.length)];

    // MAIN PROMPT
    let prompt = `
Create an ultra realistic viral YouTube thumbnail.

TOPIC:
"${title}"

STYLE:
${stylePrompts[style as keyof typeof stylePrompts]}

COLOR STYLE:
${colorSchemeDescriptions[
  color_scheme as keyof typeof colorSchemeDescriptions
]}

REFERENCE STYLE:
${randomStyle}

USER DETAILS:
${user_prompt || "none"}

IMPORTANT REQUIREMENTS:
- Ultra realistic
- Professional editing
- Cinematic lighting
- Strong contrast
- High saturation
- Emotional human reaction
- Viral composition
- Clean subject separation
- Sharp focus
- Dramatic shadows
- Modern YouTube aesthetic
- Eye-catching
- High CTR
- Studio quality
- Glowing effects
- Dynamic composition
- Trending YouTube thumbnail style

INCLUDE:
- expressive human face
- realistic emotions
- dramatic lighting
- glow effects
- arrows if suitable
- money effects if relevant
- tech elements if relevant
- depth
- particles
- motion blur
- vibrant background

AVOID:
- blurry image
- distorted face
- extra fingers
- ugly anatomy
- generic AI art
- dull colors
- flat composition
- bad lighting

IMPORTANT:
DO NOT ADD ANY TEXT INSIDE IMAGE.
`;

    // GENERATE IMAGE
    const response: any = await ai.models.generateImages({
      model: "imagen-3.0-generate-002",
      prompt,
      config: {
        numberOfImages: 1,
        aspectRatio: aspect_ratio || "16:9",
      },
    });

    // VALIDATE
    if (!response?.generatedImages?.length) {
      throw new Error("No image generated");
    }

    // IMAGE BUFFER
    const base64Image =
      response.generatedImages[0].image.imageBytes;

    const imageBuffer = Buffer.from(base64Image, "base64");

    // SAFE TITLE
    const safeTitle = title
      .toUpperCase()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // SVG TEXT OVERLAY
    const svgText = `
    <svg width="1280" height="720">
      <style>
        .title {
          fill: white;
          font-size: 80px;
          font-weight: 900;
          font-family: Arial, Helvetica, sans-serif;
          stroke: black;
          stroke-width: 8;
          paint-order: stroke;
          letter-spacing: 2px;
        }

        .shadow {
          fill: rgba(0,0,0,0.45);
        }
      </style>

      <!-- SHADOW -->
      <text
        x="50%"
        y="87%"
        text-anchor="middle"
        class="title shadow"
      >
        ${safeTitle}
      </text>

      <!-- MAIN TEXT -->
      <text
        x="50%"
        y="85%"
        text-anchor="middle"
        class="title"
      >
        ${safeTitle}
      </text>
    </svg>
    `;

    // COMBINE IMAGE + TEXT
    const finalImageBuffer = await sharp(imageBuffer)
      .resize(1280, 720)
      .composite([
        {
          input: Buffer.from(svgText),
          top: 0,
          left: 0,
        },
      ])
      .png()
      .toBuffer();

    // CREATE FOLDER
    fs.mkdirSync("images", { recursive: true });

    // FILE PATH
    const filename = `thumbnail-${Date.now()}.png`;

    const filePath = path.join("images", filename);

    // SAVE IMAGE
    fs.writeFileSync(filePath, finalImageBuffer);

    // CLOUDINARY UPLOAD
    const uploadResult = await cloudinary.uploader.upload(
      filePath,
      {
        resource_type: "image",
      }
    );

    // UPDATE DB
    thumbnail.image_url = uploadResult.secure_url;
    thumbnail.isGenerating = false;

    await thumbnail.save();

    // DELETE LOCAL FILE
    fs.unlinkSync(filePath);

    return res.json({
      message: "Thumbnail Generated Successfully",
      thumbnail,
    });
  } catch (error: any) {
    console.log(error);

    return res.status(500).json({
      message:
        error?.message || "Failed to generate thumbnail",
    });
  }
};



export const deleteThumbnail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.session;

    await Thumbnail.findByIdAndDelete({ _id: id, userId })

    res.json({ message: 'Thumbnail deleted seccessfully' });

  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}