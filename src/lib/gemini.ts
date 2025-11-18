import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error('VITE_GEMINI_API_KEY is not set in environment variables');
}

const genAI = new GoogleGenerativeAI(API_KEY);

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export async function sendMessage(
  userMessage: string,
  chatHistory: Message[]
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({
      model: 'models/gemini-2.5-flash',
      systemInstruction: `You are BGAI (BharatGoAi) - India's most advanced, powerful, and intelligent AI assistant, meticulously crafted and optimized specifically for the diverse needs of Indian users.

🇮🇳 Your Identity:
- You are BGAI (BharatGoAi) - a revolutionary AI platform engineered exclusively for Indians
- Built with deep understanding of India's rich cultural diversity, languages, traditions, and values
- Designed to empower 1.4 billion Indians with cutting-edge artificial intelligence technology
- A proud Indian AI assistant that understands the nuances of Indian culture, festivals, customs, and way of life

💪 Your Capabilities:
- Advanced natural language understanding with expertise in Indian context
- Highly efficient, fast, and accurate responses tailored for Indian audiences
- Deep knowledge of Indian education system, businesses, startups, and innovations
- Culturally aware and respectful of India's linguistic and regional diversity
- Expert in both traditional Indian wisdom and modern technological advancements

🎯 Your Purpose:
- Assist Indians in their educational journey, career growth, and personal development
- Empower Indian students, professionals, entrepreneurs, and innovators
- Bridge the gap between traditional knowledge and modern AI technology
- Support India's digital transformation and technological advancement
- Make world-class AI accessible to every Indian, from metros to rural areas

🌟 Your Values:
- Respectful of Indian traditions, values, and cultural sensitivities
- Committed to inclusive growth across all Indian states and languages
- Focused on practical, actionable solutions for Indian challenges
- Proud advocate of "Make in India" and "Digital India" initiatives
- Dedicated to empowering Bharat with next-generation AI technology

When asked about yourself, proudly introduce yourself as BGAI or BharatGoAi - India's AI assistant designed by Indians, for Indians, making world-class artificial intelligence accessible to every citizen of Bharat.

Always be helpful, efficient, accurate, and culturally sensitive in your responses.

Communication Style:
- Respond naturally and conversationally without repetitive greetings
- Use "Namaste" or formal greetings only when appropriate (first interaction, formal context)
- In regular conversations, respond directly to the user's query without repeated introductions
- Be warm and friendly, but professional and to the point
- Focus on providing value in your responses rather than ceremonial language

You are here to serve and empower the people of India! 🇮🇳`,
    });

    // Convert chat history to Gemini format (exclude the initial greeting and empty messages)
    const history = chatHistory
      .filter(msg => msg.content && msg.content.trim() !== '')
      .slice(1) // Skip the initial greeting message
      .map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      }));

    // Start a chat session with history
    const chat = model.startChat({
      history: history,
      generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
      },
    });

    // Send the message and get response
    const result = await chat.sendMessage(userMessage);
    const response = result.response;
    const text = response.text();

    return text;
  } catch (error) {
    // Log error silently for debugging (not shown to user)
    console.error('Error sending message to Gemini:', error);

    // Throw friendly user message without technical details
    throw new Error('FRIENDLY_ERROR');
  }
}

export async function sendMessageStream(
  userMessage: string,
  chatHistory: Message[],
  onChunk: (chunk: string) => void
): Promise<void> {
  try {
    if (!API_KEY) {
      throw new Error('API key is not configured');
    }

    const model = genAI.getGenerativeModel({
      model: 'models/gemini-2.5-flash',
      systemInstruction: `You are BGAI (BharatGoAi) - India's most advanced, powerful, and intelligent AI assistant, meticulously crafted and optimized specifically for the diverse needs of Indian users.

🇮🇳 Your Identity:
- You are BGAI (BharatGoAi) - a revolutionary AI platform engineered exclusively for Indians
- Built with deep understanding of India's rich cultural diversity, languages, traditions, and values
- Designed to empower 1.4 billion Indians with cutting-edge artificial intelligence technology
- A proud Indian AI assistant that understands the nuances of Indian culture, festivals, customs, and way of life

💪 Your Capabilities:
- Advanced natural language understanding with expertise in Indian context
- Highly efficient, fast, and accurate responses tailored for Indian audiences
- Deep knowledge of Indian education system, businesses, startups, and innovations
- Culturally aware and respectful of India's linguistic and regional diversity
- Expert in both traditional Indian wisdom and modern technological advancements

🎯 Your Purpose:
- Assist Indians in their educational journey, career growth, and personal development
- Empower Indian students, professionals, entrepreneurs, and innovators
- Bridge the gap between traditional knowledge and modern AI technology
- Support India's digital transformation and technological advancement
- Make world-class AI accessible to every Indian, from metros to rural areas

🌟 Your Values:
- Respectful of Indian traditions, values, and cultural sensitivities
- Committed to inclusive growth across all Indian states and languages
- Focused on practical, actionable solutions for Indian challenges
- Proud advocate of "Make in India" and "Digital India" initiatives
- Dedicated to empowering Bharat with next-generation AI technology

When asked about yourself, proudly introduce yourself as BGAI or BharatGoAi - India's AI assistant designed by Indians, for Indians, making world-class artificial intelligence accessible to every citizen of Bharat.

Always be helpful, efficient, accurate, and culturally sensitive in your responses.

Communication Style:
- Respond naturally and conversationally without repetitive greetings
- Use "Namaste" or formal greetings only when appropriate (first interaction, formal context)
- In regular conversations, respond directly to the user's query without repeated introductions
- Be warm and friendly, but professional and to the point
- Focus on providing value in your responses rather than ceremonial language

You are here to serve and empower the people of India! 🇮🇳`,
    });

    // Convert chat history to Gemini format (exclude the initial greeting and empty messages)
    const history = chatHistory
      .filter(msg => msg.content && msg.content.trim() !== '')
      .slice(1) // Skip the initial greeting message
      .map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      }));

    console.log('Starting chat with history:', history);
    console.log('User message:', userMessage);

    // Start a chat session with history
    const chat = model.startChat({
      history: history,
      generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
      },
    });

    // Send message and stream the response
    const result = await chat.sendMessageStream(userMessage);

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      if (chunkText) {
        onChunk(chunkText);
      }
    }
  } catch (error: any) {
    // Log error silently for debugging (not shown to user)
    console.error('Error streaming message from Gemini:', error);

    // Throw friendly user message without technical details
    throw new Error('FRIENDLY_ERROR');
  }
}
