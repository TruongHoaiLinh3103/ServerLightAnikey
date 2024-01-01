const { Users } = require("../models");
const bcrypt = require("bcrypt");
const {sign} = require("jsonwebtoken")
module.exports = {
    get: async(req,res) => {
        const listUser = await Users.findAll()
        res.json(listUser)
    },
    signUP: async (req, res) => {
        try {
            const { user, email, password } = req.body;
            const checkUser = await Users.findOne({where: {user: user }})
            if(checkUser) {
                res.json({error: `${user} already exists!`})
            }else{
                bcrypt.hash(password, 10).then((hash) => {
                    Users.create({
                        user: user,
                        email: email,
                        password: hash,
                    })
                    res.json("Success!")
                })
            }
        } catch (error) {
            res.send({error: "Error!"})
        }
    },
    signIn: async (req, res) => {
        try {
            const {user, password} = req.body;
            const check = await Users.findOne({where: {user: user}})
            if(!check){
                res.json({error: `${user} does not exist!`})
            }
            else{
                bcrypt.compare(password, check.password).then((same) => {
                    if(!same){
                        res.json({error: "Wrong username and password combination!"})
                    }
                    else{
                        const accessToken = sign({user: check.user, id: check.id}, "importantsecret");
                        res.json(accessToken);
                    }
                })
            }
    
        } catch (error) {
            res.send(error)
        }
    },
    changePass: async (req, res) => {
        const { user, oldPassword, newPassword } = req.body;
        const check = await Users.findOne({ where: { user: user }});
        bcrypt.compare(oldPassword, check.password).then(async (match) => {
          if (!match) res.json({ error: "Wrong Password Entered!" });
          else{
            bcrypt.hash(newPassword, 10).then((hash) => {
                Users.update(
                  { password: hash },
                  { where: { user: user }}
                );
            });
            res.json({success: "SUCCESS!"})
          }
        });
    }
}