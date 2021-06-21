const router = require("express").Router();
const pages = require("../controllers/pages.controllers")
const user = require("../controllers/user.controllers")
const admin = require('../controllers/admin.controllers')
const midW = require('../middlewares/auth')
const passport = require("../middlewares/passport");

//Rutas de inicio
router.get("/",pages.home);
router.post("/",pages.postLogin)
router.post("/login",pages.postLogin)
router.post("/singUp", pages.postSingUp)
router.get('/auth/google',passport.authenticate('google', { 
    scope: ['https://www.googleapis.com/auth/plus.login',
          'https://www.googleapis.com/auth/userinfo.profile', 
          'https://www.googleapis.com/auth/userinfo.email'] 
  }));
router.get('/auth/google/callback', pages.googleAuth);

//Rutas user 
router.get("/dashboard",user.getDashboard)
router.get("/movies", user.getMovies)
router.post("/search", user.postSearch)
router.get("/search", midW.isAuth,midW.isUser,user.getSearch)
router.get("/search/:title", user.getSearchTitle)
router.get("/favMovies",user.getFavUserMovies)
 
//Rutas admin
router.get("/admin", admin.getLocalMovies)
router.get("/createMovie", admin.getCreateMovie)
router.post("/createMovie", admin.postCreateMovie)
router.get("/editMovie", admin.getEditMovie)
router.put("/editMovie/:id", admin.putMovie)
router.delete("/deleteFilm/:Title", admin.deleteMovie)
 
module.exports = router;