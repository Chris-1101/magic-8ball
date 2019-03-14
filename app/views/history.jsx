const React = require('react');

// Questions History
class History extends React.Component
{
  get questions()
  {
    const arr = [];

    this.props.questions.forEach((question, i) => {
      arr.unshift(<HistoryItem key={ i } question={ question } />);
    });

    return (arr.length) ? arr : "Nothing here, yet...";
  }

  render()
  {
    return (
      <div>
        <h3>Previously Asked Questions</h3>
        <div>{ this.questions }</div>
      </div>
    );
  }
}

// History Item
class HistoryItem extends React.Component
{
  render()
  {
    const question = this.props.question;

    return (
      <p>
        Q: { question.text }<br />
        A: { question.answer.text } ({ question.answer.answerType.name })
      </p>
    );
  }
}

module.exports = History;
