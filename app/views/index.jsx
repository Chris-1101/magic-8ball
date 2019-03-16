const React = require('react');
const PageLayout = require('./layout');
const History = require('./history');

// Index Page
class IndexPage extends React.Component
{
  render()
  {
    return (
      <PageLayout title="Index">
        <QuestionForm />
        <History questions={ this.props.questions } />
      </PageLayout>
    );
  }
}

// Question Form
class QuestionForm extends React.Component
{
  render()
  {
    return (
      <div className="question-form">
        <form id="submissionForm">
          <div className="form-group">
            <label htmlFor="question">Ask the Magic 8-Ball a Question!</label>
            <div className="input-group">
              <input id="question" className="form-control" type="text" name="question" />
              <div className="input-group-append">
                <button className="btn btn-dark btn-sm">&nbsp; Ask &nbsp;</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = IndexPage;
