const React = require('react');
const PageLayout = require('./layout');

// Statistics Page
class StatsPage extends React.Component
{
  render()
  {
    return (
      <PageLayout appName={ this.props.appName } title="Statistics">
        <div>{ this.props.appName } Statistics</div>
      </PageLayout>
    );
  }
}

module.exports = StatsPage;
