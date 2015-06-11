var debug = require('debug')('freecc:user:remote');
var blacklistedUsernames =
  require('../../server/utils/constants').blacklistedUsernames;

module.exports = function(User) {
  // NOTE(berks): user email validation currently not needed but build in. This
  // work around should let us sneak by
  // see:
  // https://github.com/strongloop/loopback/issues/1137#issuecomment-109200135
  delete User.validations.email;
  debug('setting up user hooks');
  // send verification email to new camper
  User.afterRemote('create', function(ctx, user, next) {
    debug('user created, sending email');
    if (!user.email) { return next(); }

    var mailOptions = {
      type: 'email',
      to: user.email,
      from: 'Team@freecodecamp.com',
      subject: 'Welcome to Free Code Camp!',
      redirect: '/',
      text: [
        'Greetings from San Francisco!\n\n',
        'Thank you for joining our community.\n',
        'Feel free to email us at this address if you have ',
        'any questions about Free Code Camp.\n',
        'And if you have a moment, check out our blog: ',
        'blog.freecodecamp.com.\n',
        'Good luck with the challenges!\n\n',
        '- the Free Code Camp Volunteer Team'
      ].join('')
    };
    user.verify(mailOptions, function(err) {
      if (err) { return next(err); }
      debug('verification email sent');
      ctx.req.flash('success', {
        msg: [
          'Please check your email and click on the verification link '
          + 'before logging in.'
        ]
      });
      ctx.res.redirect('/');
    });
  });

  User.beforeRemote('login', function(ctx, instance, next) {
    debug('before called');
    debug(ctx, instance, next);
    next();
  });

  User.afterRemote('login', function(ctx, instance) {
    var res = ctx.res;
    var req = ctx.req;

    if (!instance || instance.emailVerified !== true) {
      debug(instance);
      req.flash('errors', {
        msg: [
          'Please verify your email address.'
        ]
      });
      return res.redirect('/');
    }

    /*
    var config = {
      signed: !!req.signedCookies,
      maxAge: 1000 * accessToken.ttl
    };
    if (accessToken && accessToken.id) {
      res.cookie('access_token', accessToken.id, config);
      res.cookie('userId', accessToken.userId, config);
    }
    */
    res.redirect('/');
  });

  User.afterRemote('logout', function(ctx, result, next) {
    var res = ctx.result;
    res.clearCookie('access_token');
    res.clearCookie('userId');
    next();
  });

  User.doesExist = function doesExist(username, email, cb) {
    if (!username && !email) {
      return process.nextTick(function() {
        cb(null, false);
      });
    }
    debug('checking existence');

    // check to see if username is on blacklist
    if (username && blacklistedUsernames.indexOf(username) !== -1) {
      return cb(null, true);
    }

    var where = {};
    if (username) {
      where.username = username.toLowerCase();
    } else {
      where.email = email ? email.toLowerCase() : email;
    }
    debug('where', where);
    User.count(
      where,
      function (err, count) {
        if (err) {
          debug('err checking existance: ', err);
          return cb(err);
        }
        if (count > 0) {
          return cb(null, true);
        }
        return cb(null, false);
      }
    );
  };

  User.remoteMethod(
    'doesExist',
    {
      description: 'checks whether a user exists using email or username',
      accepts: [
        {
          arg: 'username',
          type: 'string'
        },
        {
          arg: 'email',
          type: 'string'
        }
      ],
      returns: [
        {
          arg: 'exists',
          type: 'boolean'
        }
      ],
      http: {
        path: '/exists',
        verb: 'get'
      }
    }
  );
};
