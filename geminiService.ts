
import { GoogleGenAI } from "@google/genai";

// Always use the API key directly from process.env.API_KEY as per coding guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStatusSummary = async (members: any[], submissions: any[]) => {
  try {
    const prompt = `
      Based on the following ASC Community assignment data, provide a 3-sentence executive summary for the administrator.
      Focus on submission rates, which tracks are lagging, and any immediate actions needed (reminders).
      
      Members count: ${members.length}
      Submissions (last 7 days): ${submissions.filter(s => s.status === 'submitted').length}
      Missed (last 7 days): ${submissions.filter(s => s.status === 'missed').length}
      
      Tracks: ${Array.from(new Set(members.map(m => m.track))).join(', ')}
    `;

    // Using gemini-3-flash-preview for basic summarization task
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    // Directly access the .text property from the response
    return response.text;
  } catch (error) {
    console.error("Gemini analysis error:", error);
    return "현재 데이터를 분석할 수 없습니다. 잠시 후 다시 시도해주세요.";
  }
};
