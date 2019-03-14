const Sequelise = require('sequelize');
const db = new Sequelise('sqlite:./app/db/history.db')

const QuestionModel = require('../models/question');
const AnswerModel = require('../models/answer');
const AnswerTypeModel = require('../models/answer-type');

const Question = QuestionModel(db, Sequelise);
const Answer = AnswerModel(db, Sequelise);
const AnswerType = AnswerTypeModel(db, Sequelise);

Question.belongsTo(Answer);
// Answer.belongsToMany(Question);
Answer.belongsTo(AnswerType);
// AnswerType.belongsToMany(Answer);

db.sync({ force: true }).then(() => {
  // Answer Types
  AnswerType.create({ name: 'affirmative' });
  AnswerType.create({ name: 'non-committal' });
  AnswerType.create({ name: 'negative' });

  // Affirmative Answers
  Answer.create({ text: 'It is certain.'     , answerTypeId: 1 });
  Answer.create({ text: 'It is decidedly so.', answerTypeId: 1 });
  Answer.create({ text: 'Without a doubt.'   , answerTypeId: 1 });
  Answer.create({ text: 'Yes - definitely.'  , answerTypeId: 1 });
  Answer.create({ text: 'You may rely on it.', answerTypeId: 1 });
  Answer.create({ text: 'As I see it, yes.'  , answerTypeId: 1 });
  Answer.create({ text: 'Most likely.'       , answerTypeId: 1 });
  Answer.create({ text: 'Outlook good.'      , answerTypeId: 1 });
  Answer.create({ text: 'Yes.'               , answerTypeId: 1 });
  Answer.create({ text: 'Signs point to yes.', answerTypeId: 1 });

  // Non-Committal Answers
  Answer.create({ text: 'Reply hazy, try again.'    , answerTypeId: 2 });
  Answer.create({ text: 'Ask again later.'          , answerTypeId: 2 });
  Answer.create({ text: 'Better not tell you now.'  , answerTypeId: 2 });
  Answer.create({ text: 'Cannot predict now.'       , answerTypeId: 2 });
  Answer.create({ text: 'Concentrate and ask again.', answerTypeId: 2 });

  // Negative Answers
  Answer.create({ text: 'Don\'t count on it.' , answerTypeId: 3 });
  Answer.create({ text: 'My reply is no.'     , answerTypeId: 3 });
  Answer.create({ text: 'My sources say no.'  , answerTypeId: 3 });
  Answer.create({ text: 'Outlook not so good.', answerTypeId: 3 });
  Answer.create({ text: 'Very doubtful.'      , answerTypeId: 3 });

  // Dummy Questions
  Question.create({ text: 'Will I survive this?'   , answerId:  8 });
  Question.create({ text: 'Will I ever find a job?', answerId: 11 });

  console.log("Database and tables created!");
});

module.exports = { Question, Answer, AnswerType };
