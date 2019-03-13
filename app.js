// Express.js
const express = require('express');
const app = express();
const port = 3000;

// Other Dependencies
const jsx = require('express-react-views');
const path = require('path');

// Routers
const indexRouter = require('./routes/index');
const statsRouter = require('./routes/stats');

// Config
app.set('views', path.join(__dirname, 'views')); // Views
app.set('view engine', 'jsx'); // View Engine
app.engine('jsx', jsx.createEngine());
app.use(express.static('public')); // Static Resources

// Routes
app.get('/', indexRouter);
app.get('/stats', statsRouter);

// Launch Server
app.listen(port, () => console.log(`Server listening on port ${port}.\nConnect via http://localhost:${port}`));
