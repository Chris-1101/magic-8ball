const React = require('react');
const PageLayout = require('./layout');
const History = require('./history');

// Index Page
class IndexPage extends React.Component
{
  render()
  {
    return (
      <PageLayout appName={ this.props.appName } title="Index">
        <h2>Welcome to { this.props.appName }!</h2>
        <p>Ask the Magic 8-Ball a question!</p>
        <QuestionForm />
        <History questions={ this.props.questions } />
      </PageLayout>
    );
  }
}

// Question Form
class QuestionForm extends React.Component
{
  // TODO: onClick (button below) triggers method here -> AJAX post
  render()
  {
    return (
      <form method="POST" action="/">
        <label htmlFor="question">Question &nbsp;</label>
        <input id="question" type="text" name="question" />
        <button type="submit">Ask...</button>
      </form>
    );
  }
}

module.exports = IndexPage;
