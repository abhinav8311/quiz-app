const router = require("express").Router();
const passport = require("passport");

// Login route
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Callback route
router.get("/google/callback", 
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/login",
  })
);

// Logout route
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("http://localhost:3000/");
  });
});

// Get current user
router.get("/current-user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
