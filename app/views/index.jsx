const React = require('react');
const PageLayout = require('./layout');

// Index Page
class IndexPage extends React.Component
{
  render()
  {
    return (
      <PageLayout appName={ this.props.appName } title="Index">
        <div>Welcome to { this.props.appName }!</div>
      </PageLayout>
    );
  }
}

module.exports = IndexPage;
