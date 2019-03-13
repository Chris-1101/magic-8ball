const router = require('express').Router();

// GET Statistics
router.get('/stats', (req, res) => res.render('stats', { appName: "Magic 8-Ball" }));

module.exports = router;
