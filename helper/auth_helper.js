module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("ERROR_MESSAGE", "you are not Authorized");
    res.redirect("/auth/login", 302, {});
  },
};
