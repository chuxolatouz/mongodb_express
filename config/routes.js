'use strict';

/**
 * Module dependencies.
 */

const home = require('../app/controllers/home');
const users = require('../app/controllers/users')
const rooms = require('../app/controllers/rooms')
const talks = require('../app/controllers/talks')
const login = require('../app/controllers/login')
/**
 * Expose
 */

module.exports = function (app, passport) {

  app.get('/', home.index);
  app.route('/users').get(users.index).post(users.create)
  app.route('/rooms').get(rooms.index).post(rooms.create)
  app.route('/talks').get(talks.index).post(talks.create)
  app.route('/talks/:id').put(talks.update)
  app.route('/login').post(passport.authenticate('local'),login.create)
  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
