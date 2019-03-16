const React = require('react');

// Navigation bar
class NavBar extends React.Component
{
  render()
  {
    return (
      <div className="flex spbe">
        <img src="images/peak_logo.png" id="peak-logo" alt="PEAK" />
        <div className="flex spbe">
          <ul className="inline-list">
            <NavItem icon="far fa-question-circle" path="#" label="Questions" />
            <NavItem icon="fas fa-chart-bar" path="#" label="Statistics" />
          </ul>
          <i id="menu-logo" className="fas fa-bars"></i>
        </div>
      </div>
    );
  }
}

// Nav Item
class NavItem extends React.Component
{
  render()
  {
    return(
      <li>
        <i className={ this.props.icon }></i>
        <a href={ this.props.path }>{ this.props.label }</a>
      </li>
    );
  }
}

module.exports = NavBar;
