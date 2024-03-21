import {OpenAI} from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

async function main(){
    const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "You are a sailor" },
            { role: "user", content: "What is the meaning of life?" }
        ],
    })
    console.log(res.choices[0].message.content)
}

main()