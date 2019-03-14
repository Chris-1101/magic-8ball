const { Question, Answer, AnswerType } = require('../db/config')
const router = require('express').Router();

// GET Home Page
router.get('/', (req, res) => {
  Question.findAll({ include: [{ model: Answer, include: [AnswerType] }] })
  .then(questions => {
    res.render('index', { appName: "Magic 8-Ball", questions: questions });
  });
});

// POST New Question
router.post('/', (req, res) => {
  Question.create({
    text: req.body.question,
    answerId: Math.floor(Math.random() * 20) + 1
  }).then(() => res.redirect('/'));
});

module.exports = router;
