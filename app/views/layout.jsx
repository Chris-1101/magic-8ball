const React = require('react');

// Main Page Layout
class PageLayout extends React.Component
{
  render()
  {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>{ this.props.appName } - { this.props.title }</title>
          <link rel="stylesheet" type="text/css" href="stylesheets/style.css" />
        </head>
        <body>
          { this.props.children }
        </body>
      </html>
    );
  }
}

module.exports = PageLayout;
