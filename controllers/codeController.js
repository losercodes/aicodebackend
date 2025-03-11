const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const generateCode = async (req, res) => {
  const { prompt } = req.body;
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
    });
    res.json({ code: chatCompletion.choices[0]?.message?.content || '' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { generateCode };