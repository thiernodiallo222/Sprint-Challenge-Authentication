require('dotenv').config();
const bcrypt = require('bcryptjs');
const express = require("express");
const router = express.Router();
const db = require("./auth-model");
const jwt = require('jsonwebtoken');
router.post("/register", (req, res) => {
    const user = {
    username: req.body.username,
    password: req.body.password,
    }
  const hash = bcrypt.hashSync(user.password, 10);
     user.password = hash;
       db.add(user).then(user => {
    res.json({username:user.username});
    }).catch(error => {
      console.log(`An -${error}- occurred to add user`);
    })    
})

router.post("/login", async (req, res, next) => {
  const authError={message:'You shall not pass !'}
  try {
    const user = await db.findBy({username:req.body.username}).first()
    if (!user) {
      return res.status(401).json(authError)
    } else {
      const passwordValid = await bcrypt.compare(req.body.password, user.password)
      if (!passwordValid) {
        return res.status(401).json(authError)
      }
      const token = generateToken(user);
      // this sends the token back as a cookie instead of in
      // the request body, so the client will automatically
      // save it in its cookie jar.
      res.cookie("token", token);
      // res.json(user);
      res.json({
        message: `Welcome ${user.username}!`,
      })
    }
	} catch(err) {
    next(err);
	}
})

function generateToken(user) {
  const payload = {
    userId: user.id,
    // userRole: "admin",  // this would normally come from the database
  }
  const tokenSecret = process.env.TOKEN_SECRET || "hk3g$gi%sh!0h*dh.^kdh";
  
  return jwt.sign(payload, tokenSecret);
}

module.exports = router;




