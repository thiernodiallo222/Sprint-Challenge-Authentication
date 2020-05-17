const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const router = require('express').Router();
const db = require('./auth-model');

router.post('/register', async(req, res) => {
  // implement registration
    const user = {
    username: req.body.username,
    password: req.body.password,
  }
  const hash = bcrypt.hashSync(user.password,10);
  user.password = hash;
  await db.add(user)
    .then(user => {
      res.json(user);
    }).catch(error => {
      console.log(error);
  }) 
});

router.post('/login', async (req, res) => {
  // implement login
  const authError = {
    message: "You shall not pass !"
  }
  try {
    const user = await db.findBy({ username: req.body.username }).first()
    if (!user) {
      return res.status(401).json(authError)
    }

    const passwordValid = await bcrypt.compare(req.body.password, user.password)
    if (!passwordValid) {
      return res.status(401).json(authError)
    }
    const token = generateToken(user);

       res.cookie("token", token);

		res.json({
      message: `Welcome ${user.username}!`,
		})
	} catch(err) {
		next(err)
	}
});
function generateToken(user) {
  const payload = {
    userId: user.id,
    userRole: "regular",  // this would normally come from the database
  }
  const tokenSecret = process.env.TOKEN_SECRET || "hk3g$gi%sh!0h*dh.^kdh";
  
  return jwt.sign(payload, tokenSecret);
}

module.exports = router;
