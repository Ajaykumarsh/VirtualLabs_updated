const passport=require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    // User.findById(id, function(err, user) {
    //   done(err, user);
    // });
    done(null, user);
  });


passport.use(new GoogleStrategy({
    clientID: '482972839762-iqrbton6o0boqsiuovoj2v5agududo2n.apps.googleusercontent.com',
    clientSecret: 'MOhH19HqjGnj608VawVLoYw1',
    callbackURL: "http://localhost:3000/admin/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    console.log(profile);
    return done(null,profile);
  }
));