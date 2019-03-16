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
      <div className="history">
        <h4>Previously Asked Questions</h4>
        <div>{ this.questions }</div>
      </div>
    );
  }
}

// History Item
class HistoryItem extends React.Component
{
  get dateAndTime()
  {
    const dateTime = new Date(this.props.question.createdAt);
    const date = dateTime.toLocaleString('en-GB', { day: '2-digit', month: 'short' });
    const time = dateTime.toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit' });

    return { date: date, time: time };
  }

  get answerTypeClass()
  {
    const answerType = this.props.question.answer.answerType.name;
    const colours = {
      'affirmative': "success",
      'non-committal': "warning",
      'negative': "danger"
    };
    return "badge badge-" + colours[answerType];
  }

  render()
  {
    const question = this.props.question;
    const dateTime = this.dateAndTime;

    return (
      <div className="h-item flex spbe">
        <div className="h-time">
          <p>{ dateTime.date }</p>
          <p>{ dateTime.time }</p>
        </div>
        <div className="h-content">
          <p className="h-question">{ question.text }</p>
          <p className="h-answer">
            <span className={ this.answerTypeClass }>{ question.answer.text }</span>
          </p>
        </div>
      </div>
    );
  }
}

module.exports = History;
