const CodeSnippet = require('../models/CodeSnippet');

const saveSnippet = async (req, res) => {
  const { userId, code, language } = req.body;
  try {
    const snippet = new CodeSnippet({ userId, code, language });
    await snippet.save();
    res.status(201).json(snippet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getHistory = async (req, res) => {
  const { userId } = req.params;
  try {
    const snippets = await CodeSnippet.find({ userId });
    res.json(snippets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { saveSnippet, getHistory };