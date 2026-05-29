/* ***********************
 * Require Statements
 *************************/

const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
const port = process.env.PORT || 3000;
const connectDB = require('./database/');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;

app.use(bodyParser.json());

// Session
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  }),
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// CORS

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Z-Key',
      'Authorization',
    ],
  }),
);

// Routes
app.use('/', routes);
app.get('/login', passport.authenticate('github'));
// Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

app.get('/', (req, res) => {
  res.send(
    req.session.user
      ? `Logged in as ${req.session.user.displayName}`
      : 'Logged Out',
  );
});

app.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/api-docs',
  }),
  (req, res) => {
    res.redirect('/');
  },
);

// Database

connectDB.initDB((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  }
});
