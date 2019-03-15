const React = require('react');
const NavBar = require('./nav');

// Main Page Layout
class PageLayout extends React.Component
{
  render()
  {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>{ this.props.appName } - { this.props.title }</title>
          <link rel="stylesheet" type="text/css" href="stylesheets/style.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" />
        </head>
        <body>
          <NavBar />
          { this.props.children }
        </body>
      </html>
    );
  }
}

module.exports = PageLayout;
