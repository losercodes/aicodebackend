const express = require('express');
const { generateCode } = require('../controllers/codeController');
const router = express.Router();

router.post('/generate', generateCode);

module.exports = router;