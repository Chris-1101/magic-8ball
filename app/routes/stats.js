const router = require('express').Router();

// GET Statistics
router.get('/stats', (req, res) => res.render('stats'));

module.exports = router;
