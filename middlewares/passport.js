const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require('passport');
const User = require('../models/user.model.MySQL')
const config = require("../config"); //Importa modulo de APIKEYS y APISECRETS */

passport.serializeUser(function(user, done){
    done(null, user);
});
passport.deserializeUser(function(obj, done){
    done(null, obj);
})

passport.use(new GoogleStrategy({
  clientID: config.google.OAUTH2_CLIENT_ID,
  clientSecret: config.google.OAUTH2_CLIENT_SECRET,
  callbackURL: config.google.OAUTH2_CALLBACK
  },
  

  function(accessToken, refreshToken, profile, done) {
    /* console.log('PROFILE *************',profile, '*******************FIN PROFILE'); */
  /*   console.log('accessTOKEN: ', accessToken)
    console.log('refressToken:', refreshToken)
    
    console.log(profile.emails[0].value); */
/*     const usuario = new User ({
        googleId: profile.id,
        name: profile.displayName,
        provider: profile.provider,
        photo: profile.photos[0].value,
   }) */
       /* usuario.save(function (err, user) { */
        /* return done(); */
       /* }); */
       return done()
    }

))

module.exports = passport;