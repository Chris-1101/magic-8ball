const router = require('express').Router();

// GET Home Page
router.get('/', (req, res) => res.render('index', { appName: "Magic 8-Ball" }));

module.exports = router;
