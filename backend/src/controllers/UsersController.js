const User = require('../models/User');
const path = require("path");


const create = async (req, res) => {
  console.log("Signup")
  const filename = path.resolve(__dirname, '../../../public/views/users/create.njk');
  console.log(filename)
  // res.render('../views/users/test.html');
  res.render(
    filename,
    {
      "title": "Cadastrar"
    }
  );

};

const store = async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(req)

  try {
    const newUser = { name, email, password };
    console.log(newUser)
    if (name.length === 0) {
      const user = await User.login(newUser)
      console.log(a);
      if (user.length > 0) {
        res.redirect('/');
      } else {
        res.redirect('/signup');
      }


    } else {
      await User.create(newUser);

      res.redirect('/signup');
    }

  } catch (err) {
    console.error(err);
  }
};

module.exports = { create, store };
