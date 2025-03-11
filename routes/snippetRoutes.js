const express = require('express');
const { saveSnippet, getHistory } = require('../controllers/snippetController');
const router = express.Router();

router.post('/save', saveSnippet);
router.get('/history/:userId', getHistory);

module.exports = router;