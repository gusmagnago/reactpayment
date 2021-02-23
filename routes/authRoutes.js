const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"], //the scope specifies to google what access we want to have besides users profile
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    //res.send(req.session);
    res.send(req.user);
  });
};

//prod credentials
//id : 437788752386-pvcvt4r8e3f85sojkprtus1djskve20k.apps.googleusercontent.com
//pass : QHJKMRJKtjHUg5_OtlTV3ZmB
